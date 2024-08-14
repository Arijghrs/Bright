import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dashboardIcon from '../assets/element-4.svg';
import usersIcon from '../assets/profile-2user.svg';
import mentorsIcon from '../assets/teacher.svg';
import coursesIcon from '../assets/document-copy.svg';
import discussionIcon from '../assets/note.svg';
import scheduleIcon from '../assets/calendar.svg';
import certificatesIcon from '../assets/document-text.svg';
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from '../redux/user/userSlice.js';
import { useDispatch } from 'react-redux';


const menuItems = [
  { href: '/dashboard', title: 'Dashboard', icon: dashboardIcon },
  { href: '/users', title: 'Users', icon: usersIcon },
  { href: '/mentors', title: 'Mentors', icon: mentorsIcon },
  { href: '/coursesdash', title: 'Courses', icon: coursesIcon },
  { href: '/discussion', title: 'Discussion', icon: discussionIcon },
  { href: '/schedule', title: 'Schedule', icon: scheduleIcon },
  { href: '/certificates', title: 'Certificates', icon: certificatesIcon },
  { href: '/profile', title: 'Account'},
];


const Sidebar = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure());
    }
  };
  return (
  <aside className=" p-1 ">
   <div className="container mx-auto px-12 py-3 flex justify-between items-center">
        <div className="font-caprasimo text-4xl leading-[55.05px]  font-normal">
          Bright
        </div>
    </div>
    <nav>
      <ul>
        {menuItems.map(({ href, title, icon }) => (
          <li key={title} className="m-2">
            <NavLink
                to={href}
                className={({ isActive }) =>
                  `hoverEffect flex items-center p-2 text-gray-500 transition duration-300 ${
                    isActive ? 'font-semibold bg-gray-50 border-b-2 border-purple-400 text-gray-700' : ''
                  }`
                }
              >
                {href === '/profile' && currentUser ? (
                  <img
                    className="rounded-full h-7 w-7 object-cover mr-4"
                    src={currentUser.avatar}
                    alt="profile"
                  />
                ) : (
                  <img src={icon} className="h-6 mr-4" alt={title} />
                )}
                {title}
              </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div onClick={handleSignOut}
    className='mx-4 mt-7'>
          <button className="relative w-52 h-10 py-2 px-3 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#CF1F30] z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20 font-caprasimo text-lg font-normal text-black">Log out</span>
        </button>
        </div>    
  </aside>
)};
export default Sidebar;
