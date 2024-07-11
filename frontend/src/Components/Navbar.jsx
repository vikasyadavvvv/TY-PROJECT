import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link,  } from 'react-router-dom';
import History from '../AboutContent/History';
import Home from './Home';
import MissionAndVision from '../AboutContent/Mission&Vision';
import Leadership from '../AboutContent/Leadership';
import Achievements from '../AboutContent/Achievements';
import AdmissionProcess from '../Addmission/AdmissionProcess';
import Course from '../Addmission/Course';
import EligibilityCriteria from '../Addmission/Eligibility';
import FeesStructure from '../Addmission/FeesStructure';
import ApplicationForm from '../Addmission/ApplicationForm';
import DepartmentPage from '../Academics/Department';
import FacultyPage from '../Academics/Faculty';
import SyllabusPage from '../Academics/Syllabus';
import ExaminationSchedulePage from '../Academics/ExaminationSchedule';
import ResultPage from '../Academics/Result';
import ResearchCentre from '../Research/ResearchCentre';
import Publications from '../Research/Publication';
import OngoingProjects from '../Research/OngoingProject';
import ConferencesAndWorkshops from '../Research/ConferenceandWorkshop';
import ClubsAndSocieties from '../StudentLife/ClubsandSocieties';
import EventsAndActivities from '../StudentLife/EventandActivities';
import Sports from '../StudentLife/Sports';
import Library from '../StudentLife/Library';
import CampusLife from '../StudentLife/CampusLife';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


  return (
    <nav className="bg-white text-center text-black p-4 shadow-md relative z-10">
      <div className="container flex text-center justify-evenly items-center">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none font-bold"> 
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} 
          </button>
        </div>
        <ul className={`lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block relative z-10`}>
         <Link to="/home" element={<Home/>}> <li className='text-lg  font-serif mb-2 cursor-pointer'>Home</li> </Link>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(0)} className="focus:outline-none">About Us</button>
            {openDropdown === 0 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
             <Link to="/history" element={<History/>}>  <li className="p-2 bg-white hover:bg-gray-400">History</li> </Link>
             <Link to="/mission&vission" element={<MissionAndVision/>} ><li className="p-2 bg- hover:bg-gray-400 ">Mission & Vision</li> </Link>
            <Link to="/leadership" element={<Leadership/>}>  <li className="p-2 bg- hover:bg-gray-400 ">Leadership</li> </Link>
            <Link to="/achievement" element={<Achievements/>}><li className="p-2 bg- hover:bg-gray-400 "> Achievements</li></Link>
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(1)} className="focus:outline-none">Admissions</button>
            {openDropdown === 1 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
             <Link to="/admissionprocess" element={<AdmissionProcess/>}><li className="p-2 bg-white hover:bg-gray-400">Admission Process</li></Link>
             <Link to="/course" element={<Course/>}> <li className="p-2 bg-white hover:bg-gray-400">Courses Offered</li></Link>
             <Link to="/eligibility" element={<EligibilityCriteria/>}><li className="p-2 bg-white hover:bg-gray-400">Eligibility Criteria</li></Link>
             <Link to='/feesstructure'element={<FeesStructure/>} ><li className="p-2 bg-white hover:bg-gray-400">Fees Structure</li></Link>
              <Link to="/applyform" element={<ApplicationForm/>}>  <li className="p-2 bg-white hover:bg-gray-400">Apply Online</li></Link>
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2'">
            <button onClick={() => handleDropdown(2)} className="focus:outline-none">Academics</button>
            {openDropdown === 2 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
            <Link to='/department' element={<DepartmentPage/>}><li className="p-2 bg-white hover:bg-gray-400">Departments</li></Link>
            <Link to='/faculty' element={<FacultyPage/>}><li className="p-2 bg-white hover:bg-gray-400">Faculty</li></Link>  
            <Link to='/syllabus' element={<SyllabusPage/>}> <li className="p-2 bg-white hover:bg-gray-400">Syllabus</li> </Link>             
            <Link to='/examschedule' element={<ExaminationSchedulePage/>}> <li className="p-2 bg-white hover:bg-gray-400">Examination Schedule</li> </Link>
            <Link to='/result' element={<ResultPage/>}> <li className="p-2 bg-white hover:bg-gray-400">Results</li></Link>    
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(3)} className="focus:outline-none">Research</button>
            {openDropdown === 3 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
              <Link to='/researchcentre' element={<ResearchCentre/>}><li className="p-2 bg-white hover:bg-gray-400">Research Centers</li></Link>  
              <Link to='/publication' element={<Publications/>}> <li className="p-2 bg-white hover:bg-gray-400">Publications</li></Link>  
              <Link to='/ongoingproject' element={<OngoingProjects/>}> <li className="p-2 bg-white hover:bg-gray-400">Ongoing Projects</li></Link>  
              <Link to='/conferenceandworkshop' element={<ConferencesAndWorkshops/>}><li className="p-2 bg-white hover:bg-gray-400">Conferences & Workshops</li></Link>  
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(4)} className="focus:outline-none">Student Life</button>
            {openDropdown === 4 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
               <Link to='/clubsandsocieties' element={<ClubsAndSocieties/>}><li className="p-2 bg-white hover:bg-gray-400">Clubs & Societies</li></Link> 
               <Link to='/eventandactivities' element={<EventsAndActivities/>}><li className="p-2 bg-white hover:bg-gray-400">Events & Activities</li></Link> 
               <Link to='/sports' element={<Sports/>}><li className="p-2 bg-white hover:bg-gray-400">Sports</li></Link> 
               <Link to='/library' element={<Library/>}><li className="p-2 bg-white hover:bg-gray-400"><a href="#library">Library</a></li></Link> 
              <Link to='/campuslife' element={<CampusLife/>}><li className="p-2 bg-white hover:bg-gray-400">Campus Life</li></Link>  
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(5)} className="focus:outline-none">Placements</button>
            {openDropdown === 5 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#placement-cell">Placement Cell</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#recruiters">Recruiters</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#stats">Placement Statistics</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#internships">Internships</a></li>
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(6)} className="focus:outline-none">Alumni</button>
            {openDropdown === 6 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#association">Alumni Association</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#notable">Notable Alumni</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#alumni-events">Events</a></li>
              </ul>
            )}
          
          </li>

          <li className='text-lg  font-serif mb-2'><a href="#news">News & Events</a></li>
          <li className='text-lg  font-serif mb-2'><a href="#contact">Contact Us</a></li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(7)} className="focus:outline-none">Login</button>
            {openDropdown === 7 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#association"> Student Login</a></li>
                <li className="p-2 bg-white hover:bg-gray-400"><a href="#association"> Admin Login</a></li>

              </ul>
            )}
          </li>


        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
