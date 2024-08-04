import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo1 from '../assets/Logo1.png';
import dashboardIcon from '../assets/element-4.svg';
import usersIcon from '../assets/profile-2user.svg';
import mentorsIcon from '../assets/teacher.svg';
import coursesIcon from '../assets/document-copy.svg';
import discussionIcon from '../assets/note.svg';
import scheduleIcon from '../assets/calendar.svg';
import certificatesIcon from '../assets/document-text.svg';
import accountIcon from '../assets/Mentor.png';

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

  return (
    <aside className="bg-white w-96 h-screen p-6 shadow-md">
      <div className="logo flex justify-center mb-6">
        <img src={logo1} alt="logo" width={125} height={38} className="object-contain" />
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
      <button className="relative w-29 h-9 py-1 px-4 border border-grey text-black bg-white mt-6">
        <span className="absolute inset-0 border border-black transform -translate-x-1 translate-y-1 bg-[#CF1F30] z-0"></span>
        <span className="absolute inset-0 border border-black bg-white z-10 flex items-center justify-center"></span>
        <span className="relative z-20 font-caprasimo text-[24px]">Log out</span>
      </button>
    </aside>
  );
};

export default Sidebar;
