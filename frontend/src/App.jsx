import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router,  Route, Routes ,Navigate} from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsSection from './Components/NewsSection';
import History from './AboutContent/History'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MissionAndVision from './AboutContent/Mission&Vision';
import AdmissionProcess from './Addmission/AdmissionProcess';
import Course from './Addmission/Course';
import EligibilityCriteria from './Addmission/Eligibility';
import FeesStructure from './Addmission/FeesStructure';
import ApplicationForm from './Addmission/ApplicationForm';
import DepartmentPage from './Academics/Department';
import FacultyPage from './Academics/Faculty';
import SyllabusPage from './Academics/Syllabus';
import ExaminationSchedulePage from './Academics/ExaminationSchedule';
import ClubsAndSocieties from './StudentLife/ClubsandSocieties';
import EventsAndActivities from './StudentLife/EventandActivities';
import Sports from './StudentLife/Sports';
import Library from './StudentLife/Library';
import PlacementCell from './Placement/PlacementCell';
import Recruiters from './Placement/Recruiters';
import PlacementStatistics from './Placement/PlacementStatics';
import StudentLogin from './Login/StudentLogin';
import AboutIQAC from './IQAC/AbaoutIQAC';
import ATRPage from './IQAC/ATR';
import AAAReportPage from './IQAC/AAA';
import StakeholderFeedbackPage from './IQAC/Stackholder';
import NAACAccreditation from './NAAC/ACC';
import InstitutionInfo from './NAAC/Institutioninfo';
import NAACSSR from './NAAC/SSR';
import NAACVisit from './NAAC/NAACvisit';
import AdmissionForm2 from './Addmission/AdmissionForm2';
import AdminLogin from './Login/AdminLogin';
import AdminContent from './Login/AdminContent';
import Admissions from './Login/Admissionslist';
import StudentContent from './Login/studentContent';
import ApplySubjects from './Login/ApplySubject';
import UpdateResults from './Login/Updateresult';
import ViewResult from './Login/Viewresult';
import UpdateMarks from './Login/Updatemarks';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false); // State for admin authentication

  return (
    <>
    
    <Header />
      <Navbar />
      <NewsSection/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/mission&vission" element={<MissionAndVision/>}></Route>
        <Route path="/admissionprocess" element={<AdmissionProcess/>}></Route>
        <Route path="/course" element={<Course/>}></Route>
        <Route path="/eligibility" element={<EligibilityCriteria/>}></Route>
        <Route path="/feesstructure" element={<FeesStructure/>}></Route>
        <Route path="/enquiryform" element={<ApplicationForm/>}></Route>
        <Route path='/department' element={<DepartmentPage/>}></Route>
        <Route path='/faculty' element={<FacultyPage/>}></Route>
        <Route path='/syllabus' element={<SyllabusPage/>}></Route>
        <Route path='/examschedule' element={<ExaminationSchedulePage/>}></Route>
        <Route path='/clubsandsocieties' element={<ClubsAndSocieties/>}></Route>
        <Route path='/eventandactivities' element={<EventsAndActivities/>}></Route>
        <Route path='/sports' element={<Sports/>}></Route>
        <Route path='/library' element={<Library/>}></Route>
        <Route path='/placementcell' element={<PlacementCell/>}></Route>
        <Route path='/recruiters' element={<Recruiters/>}></Route>
        <Route path='/placementstatics' element={<PlacementStatistics/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/abaoutIQAC' element={<AboutIQAC/>}></Route>
        <Route path='/atr' element={<ATRPage/>}></Route>
        <Route path='/aaa' element={<AAAReportPage/>}></Route>
        <Route path='/stackholderfeedback' element={<StakeholderFeedbackPage/>}></Route>
        <Route path='/acc' element={<NAACAccreditation/>}>s</Route>
        <Route path='/instinfo' element={<InstitutionInfo/>}></Route>
        <Route path='/ssr' element={<NAACSSR/>}></Route>
        <Route path='/naacvisit' element={<NAACVisit/>}></Route>
        <Route path='/admissionform' element={<AdmissionForm2></AdmissionForm2>}></Route>
        <Route path='/admissionlist' element={<Admissions></Admissions>}></Route>
        <Route path='/studentcontent' element={<StudentContent></StudentContent>}></Route>
        <Route path='/apply-subjects' element={<ApplySubjects></ApplySubjects>}></Route>
        <Route path='/updateresult' element={<UpdateResults></UpdateResults>}></Route>
        <Route path='/view-result' element={<ViewResult></ViewResult>}></Route>
        <Route path="/view-result/:generatedId" element={<ViewResult />} />
        <Route path='/updatemarks' element={<UpdateMarks></UpdateMarks>}></Route>
        <Route path='/updatemarks/:generatedId' element={<UpdateMarks></UpdateMarks>}></Route>



        <Route 
          path="/adminlogin" 
          element={<AdminLogin setIsAdminAuthenticated={setIsAdminAuthenticated} />} 
        />

        {/* Conditional route for AdminContent */}
        <Route 
          path="/admincontent" 
          element={isAdminAuthenticated ? (
            <AdminContent setIsAdminAuthenticated={setIsAdminAuthenticated} />
          ) : (
            <Navigate to="/adminlogin" />
          )} 
        />

      </Routes>
      <Footer />

    
    </>
    
  );
}

export default App;
