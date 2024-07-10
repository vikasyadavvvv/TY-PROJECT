import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsSection from './Components/NewsSection';
import History from './AboutContent/History'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MissionAndVision from './AboutContent/Mission&Vision';
import Leadership from './AboutContent/Leadership';
import Achievements from './AboutContent/Achievements';
import AdmissionProcess from './Addmission/AdmissionProcess';
import Course from './Addmission/Course';
import EligibilityCriteria from './Addmission/Eligibility';
import FeesStructure from './Addmission/FeesStructure';
import ApplicationForm from './Addmission/ApplicationForm';
import DepartmentPage from './Academics/Department';
import FacultyPage from './Academics/Faculty';
import SyllabusPage from './Academics/Syllabus';
import ExaminationSchedulePage from './Academics/ExaminationSchedule';
import ResultPage from './Academics/Result';
import ResearchCentre from './Research/ResearchCentre';
import Publications from './Research/Publication';
import OngoingProjects from './Research/OngoingProject';
import ConferencesAndWorkshops from './Research/ConferenceandWorkshop';


function App() {
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
        <Route path="/leadership" element={<Leadership/>}></Route>
        <Route path="/achievement" element={<Achievements/>}></Route>
        <Route path="/admissionprocess" element={<AdmissionProcess/>}></Route>
        <Route path="/course" element={<Course/>}></Route>
        <Route path="/eligibility" element={<EligibilityCriteria/>}></Route>
        <Route path="/feesstructure" element={<FeesStructure/>}></Route>
        <Route path="/applyform" element={<ApplicationForm/>}></Route>
        <Route path='/department' element={<DepartmentPage/>}></Route>
        <Route path='/faculty' element={<FacultyPage/>}></Route>
        <Route path='/syllabus' element={<SyllabusPage/>}></Route>
        <Route path='/examschedule' element={<ExaminationSchedulePage/>}></Route>
        <Route path='/result' element={<ResultPage/>}></Route>
        <Route path='/researchcentre' element={<ResearchCentre/>}></Route>
        <Route path='/publication' element={<Publications/>}></Route>
        <Route path='/ongoingproject' element={<OngoingProjects/>}></Route>
        <Route path='/conferenceandworkshop' element={<ConferencesAndWorkshops/>}></Route>
      </Routes>
      <Footer />

    
    </>
    
  );
}

export default App;
