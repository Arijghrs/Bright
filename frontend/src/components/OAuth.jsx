import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';


//signin with google
export default function OAuth() {


    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result = await signInWithPopup(auth, provider)

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({ name: result.user.displayName, email: result.user.email }),
            })
            const data = await res.json();
            //dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            console.log('could not sign in with google ', error);
        }
    }
    return (
        <button onClick={handleGoogleClick} type='button' className="relative w-32 h-8 py-1 px-3 border mt-2 ml-2 border-black text-black font-semibold bg-white">
            <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-yellow z-0"></span>
            <span className="absolute inset-0 border border-black bg-white z-10"></span>
            <span className="relative z-20 font-inter text-sm flex items-center justify-center">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2 w-5" />Gmail
            </span>
        </button>
    )
}
