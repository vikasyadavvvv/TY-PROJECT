import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link,  } from 'react-router-dom';
import History from '../AboutContent/History';
import Home from './Home';
import MissionAndVision from '../AboutContent/Mission&Vision';
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
import ClubsAndSocieties from '../StudentLife/ClubsandSocieties';
import EventsAndActivities from '../StudentLife/EventandActivities';
import Sports from '../StudentLife/Sports';
import Library from '../StudentLife/Library';
import PlacementCell from '../Placement/PlacementCell';
import Recruiters from '../Placement/Recruiters';
import StudentLogin from '../Login/StudentLogin';
import AboutIQAC from '../IQAC/AbaoutIQAC';
import ATRPage from '../IQAC/ATR';
import AAAReportPage from '../IQAC/AAA';
import StakeholderFeedbackPage from '../IQAC/Stackholder';
import NAACAccreditation from '../NAAC/ACC';
import InstitutionInfo from '../NAAC/Institutioninfo';
import NAACSSR from '../NAAC/SSR';
import NAACVisit from '../NAAC/NAACvisit';


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
             <Link to="/history" element={<History/>}>  <li className="p-2 bg-white hover:bg-gray-400">President Message</li> </Link>
             <Link to="/mission&vission" element={<MissionAndVision/>} ><li className="p-2 bg- hover:bg-gray-400 ">Mission & Vision</li> </Link>
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
            <button onClick={() => handleDropdown(4)} className="focus:outline-none">Student Life</button>
            {openDropdown === 4 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
               <Link to='/clubsandsocieties' element={<ClubsAndSocieties/>}><li className="p-2 bg-white hover:bg-gray-400">Clubs & Societies</li></Link> 
               <Link to='/eventandactivities' element={<EventsAndActivities/>}><li className="p-2 bg-white hover:bg-gray-400">Events & Activities</li></Link> 
               <Link to='/sports' element={<Sports/>}><li className="p-2 bg-white hover:bg-gray-400">Sports</li></Link> 
               <Link to='/library' element={<Library/>}><li className="p-2 bg-white hover:bg-gray-400"><a href="#library">Library</a></li></Link> 
              </ul>
            )}
          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(5)} className="focus:outline-none">Placements</button>
            {openDropdown === 5 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
              <Link to='/placementcell' element={<PlacementCell/>}><li className="p-2 bg-white hover:bg-gray-400">Placement Cell</li></Link>
               <Link to='/recruiters' element={<Recruiters/>}><li className="p-2 bg-white hover:bg-gray-400">Recruiters</li></Link> 
               <Link to='/placementstatics' element={<PlacementCell/>}><li className="p-2 bg-white hover:bg-gray-400">Placement Statistics</li></Link> 
              </ul>
            )}
          </li>

          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(7)} className="focus:outline-none">IQAC</button>
            {openDropdown === 7 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
               <Link to='/abaoutIQAC' element={<AboutIQAC/>}><li className="p-2 bg-white hover:bg-gray-400">About IQAC</li></Link> 
               <Link to='/atr' element={<ATRPage/>}><li className="p-2 bg-white hover:bg-gray-400">ATR</li></Link>
               <Link to='/aaa' element={<AAAReportPage/>}><li className="p-2 bg-white hover:bg-gray-400">AAA Report</li></Link> 
               <Link to='/stackholderfeedback' element={<StakeholderFeedbackPage/>}><li className="p-2 bg-white hover:bg-gray-400">Stackholder Feedback</li></Link> 


              </ul>
            )}
          </li>

          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(8)} className="focus:outline-none">NAAC</button>
            {openDropdown === 8 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
               <Link to='/acc' element={<NAACAccreditation/>}><li className="p-2 bg-white hover:bg-gray-400">A QAR</li></Link> 
               <Link to='/instinfo' element={<InstitutionInfo/>}><li className="p-2 bg-white hover:bg-gray-400">IIQA</li></Link> 
               <Link to='/ssr' element={<NAACSSR/>}><li className="p-2 bg-white hover:bg-gray-400">SSR</li></Link> 
               <Link to='/naacvisit' element={<NAACVisit/>}><li className="p-2 bg-white hover:bg-gray-400">NAAC Visit</li></Link> 


              </ul>
            )}

          </li>
          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(9)} className="focus:outline-none">NIRF</button>
            {openDropdown === 9 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">


              </ul>
            )}
          </li>




          <li className="text-lg  font-serif relative group mb-2">
            <button onClick={() => handleDropdown(10)} className="focus:outline-none">Login</button>
            {openDropdown === 10 && (
              <ul className="absolute left-0 mt-1 bg-white text-black lg:block shadow-lg z-20">
               <Link to='/studentlogin' element={<StudentLogin/>}><li className="p-2 bg-white hover:bg-gray-400"> Student Login</li></Link> 
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
