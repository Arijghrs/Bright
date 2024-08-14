import Rating from "./Rating"
import mentor1 from '../assets/Mentor.png'; 
import book from '../assets/book.png'

export default function About() {
    const mentors = [
        {
          id: 1,
          name: 'Jane Doe',
          title: 'Senior Web Developer',
          image: mentor1,
          rate: 5
        },
    ];
  return (
    <div >
      <div>
        <ul className="font-caprasimo flex space-x-20 ml-16">
          <li className="text-darkBlue text-[23px]">About</li>
          <li className="text-darkBlue text-[23px]">Discussion</li> 
        </ul>
      </div>
      {mentors.map((mentor) => (
     <div key={mentor.id} className="px-12">
        <div className="flex items-center space-x-10 p-5 bg-white  ">
        <div className="relative w-16 h-15 mb-4 ">
                <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
                <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
                <img src={mentor.image} alt={mentor.name} className="relative z-20 h-full w-full  object-cover rounded-full" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{mentor.name}</h1>
                <p className="text-black font-bold">{mentor.title}</p>
                <div className="flex items-center text-black">
                    <div className=""> <Rating rate={mentor.rate} /></div>
                   
                </div>
            </div>
            </div>
          <  div className='flex justify-center -mt-24 ml-11'>
        <button className="relative  w-60 h-9 py-1 px-3 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#CED9BF]  z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20  font-montserrat text-black mr-14">Download Document</span>
          <img src={book} alt="book" className="relative  z-20 ml-44 w-7 -mt-6" />
        </button>
      </div>
     </div>
        ))}    
      
      <div className="mb-24 mt-12 ml-14">
      <h2 className="text-xl font-bold">About this course</h2> 
      <p className="text-justify font-montserrat">
      This course is designed to start you on a path toward future studies in web development and design, no <br/>
      matter how little experience or technical knowledge you currently have. The web is a very big place, and if <br/>
      you are the typical internet user, you probably visit several websites every day, whether for business,<br/>
       entertainment or education. But have you ever wondered how these websites actually work? How are they <br/>
       built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to <br/>
       build a website? With almost 1 billion websites now on the internet, the answers to these questions could <br/>
       be your first step toward a better understanding of the internet and developing a new set of internet skills.<br/>
       <br/>
       By the end of this course you’ll be able to describe the structure and functionality of the world wide web,<br/>
       create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential <br/>
       programming language concepts when creating HTML forms, select an appropriate web hosting service, <br/>
       and publish your webpages for the world to see. Finally, you’ll be able to develop a working model for <br/>
       creating your own personal or business websites in the future and be fully prepared to take the next step in <br/>
       a more advanced web development or design course or specialization.
        </p>
        <div className="mt-8">
        <h3 className="font-bold text-xl mb-4">Skills you’ll learn</h3>
        <div className="flex gap-4">
        <button className="relative  w-45 h-9 py-1 px-5 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">HTML</span>
        </button>
        <button className="relative  w-45 h-9 py-1 px-5 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">CSS</span>
        </button>
        <button className="relative  w-45 h-9 py-1 px-5 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">JavaScript</span>
        </button>
        <button className="relative  w-45 h-9 py-1 px-5 border border-black text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-black bg-white z-10"></span>
          <span className="relative z-20   text-black">Web dev</span>
        </button>
        </div>
        <div className="mt-6">
        <h2 className="font-bold text-xl mb-2">Experience Level: </h2>
        </div>
      </div>
      </div>
     



    </div> 
    
  )
}
