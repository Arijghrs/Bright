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
      
      {mentors.map((mentor) => (
     <div key={mentor.id} className="px-12">
     <div className="flex justify-between items-center p-5 bg-white">
       <div className="flex items-center space-x-10">
         <div className="relative w-24 h-24 mb-4">
           <span className="absolute inset-0 w-full h-full border border-black rounded-full transform -translate-x-1 translate-y-1 bg-[#a19ef7] z-0"></span>
           <span className="absolute inset-0 w-full h-full border border-black rounded-full bg-white z-10"></span>
           <img src={mentor.image} alt={mentor.name} className="relative z-20 h-full w-full object-cover rounded-full" />
         </div>
         <div>
           <h1 className="text-2xl font-montserrat text-blackish font-semibold">{mentor.name}</h1>
           <p className="text-blackish text-xl font-semibold">{mentor.title}</p>
           <div className="flex items-center text-black">
             <Rating rate={mentor.rate} />
           </div>
         </div>
       </div>
   
       <div className="ml-auto">
         <button className="relative w-64 h-11 text-left py-1 px-3 border border-grey text-black font-semibold bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
           <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#CED9BF] z-0"></span>
           <span className="absolute inset-0 border border-black bg-white z-10"></span>
           <span className="relative z-20 font-montserrat font-semibold text-blackish">Download Document</span>
           <img src={book} alt="book" className="relative z-20 ml-48 w-7 -mt-6" />
         </button>
       </div>
     </div>
   </div>
   
        ))}    
      
      <div className="mb-24 mt-12 ml-14">
      <h2 className="text-[32px] font-semibold font-montserrat text-black mb-6 ">About this course</h2> 
      <p className="text-justify text-[16px] tracking-[0.015em] font-montserrat text-[#2C3439]">
      This course is designed to start you on a path toward future studies in web development and design, no 
      matter how little experience or technical knowledge you currently have. The web is a very big place, and if 
      you are the typical internet user, you probably visit several websites every day, whether for business,
       entertainment or education. But have you ever wondered how these websites actually work? How are they 
       built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to 
       build a website? With almost 1 billion websites now on the internet, the answers to these questions could 
       be your first step toward a better understanding of the internet and developing a new set of internet skills.
       <br/><br/>
       By the end of this course you’ll be able to describe the structure and functionality of the world wide web,
       create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential 
       programming language concepts when creating HTML forms, select an appropriate web hosting service, 
       and publish your webpages for the world to see. Finally, you’ll be able to develop a working model for 
       creating your own personal or business websites in the future and be fully prepared to take the next step in
       a more advanced web development or design course or specialization.
        </p>
        <div className="mt-8">
        <h3 className="font-montserrat text-[20px] font-semibold tracking-[0.015em] text-left mb-6">Skills you’ll learn</h3>
        <div className="flex gap-5">
        <button className="relative  w-36 h-12 py-1 px-5 border border-blackish border-0.5  bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-blackish transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-blackish bg-white z-10"></span>
          <span className="relative z-20 text-lg font-montserrat font-semibold text-black">HTML</span>
        </button>
        <button className="relative  w-36 h-12 py-1 px-5 border border-blackish border-0.5  bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-blackish transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-blackish bg-white z-10"></span>
          <span className="relative z-20 text-lg font-montserrat font-semibold text-black">CSS</span>
        </button>
        <button className="relative  w-36 h-12 py-1 px-5 border border-blackish border-0.5  bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-blackish transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-blackish bg-white z-10"></span>
          <span className="relative z-20 text-lg font-montserrat font-semibold text-black">JavaScript</span>
        </button>
        <button className="relative  w-36 h-12 py-1 px-5 border border-blackish border-0.5  bg-white cursor-pointer shadow-purple-400 hover:transform hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-purple-500">
          <span className="absolute inset-0 border border-blackish transform -translate-x-1 translate-y-1 bg-purp z-0"></span>
          <span className="absolute inset-0 border border-blackish bg-white z-10"></span>
          <span className="relative z-20 text-lg font-montserrat font-semibold text-black">Web dev</span>
        </button>
        </div>
        <div className="mt-6">
        <h2 className="font-montserrat text-[20px] font-semibold tracking-[0.015em] text-left">Experience Level: </h2>
        </div>
      </div>
      </div>
     



    </div> 
    
  )
}