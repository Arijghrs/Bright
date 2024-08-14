import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './components/Auth';
import Users from './pages/Users';
import Layout from './components/Layout';
import MainLayout from './components/MainLayout';
import Mentors from './pages/Mentors';
import Coursesd from './pages/Coursesdash';
import Certificates from './pages/Certificates';
import Dashboard from '../src/pages/dashboard';
import AddCourse from './pages/AddCourse';
import Courses from './pages/Courses';
import CoursesA from './pages/CoursesA';
import QuizStart from './pages/QuizStart';
import QuizFinish from './pages/QuizFinish';
import QuizFinishFail from './pages/QuizFinishFail';
import Checkbox from './pages/Checkbox';
import Quiz from './pages/Quiz';
import FillBlanksQuiz from './pages/FillBlanksQuiz';

function App() {
  return (
    <Routes>
     
     <Route
        path="/"
        element={
          <MainLayout>
            <Home />

          </MainLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <MainLayout>
            <Auth />
          </MainLayout>
        }
      />
      <Route
        path="/courses"
        element={
          <MainLayout>
            <Courses />
          </MainLayout>
        }
      />
      <Route
        path="/coursesA"
        element={
          <MainLayout>
            <CoursesA/>
          </MainLayout>
        }
      />
       <Route
        path="/QuizStart"
        element={
          <MainLayout>
           <QuizStart/>
          </MainLayout>
        }
      />
       <Route
        path="/QuizFinish"
        element={
          <MainLayout>
         <QuizFinish/>
          </MainLayout>
        }
      />
       <Route
        path="/QuizFinishFail"
        element={
          <MainLayout>
         <QuizFinishFail/>
          </MainLayout>
        }
      />
       <Route
        path="/Checkbox"
        element={
          <MainLayout>
            <Checkbox/>
          </MainLayout>
        }
      />
      <Route
        path="/Quiz"
        element={
          <MainLayout>
            <Quiz/>
          </MainLayout>
        }
      />
       <Route
        path="/FillBlanksQuiz"
        element={
          <MainLayout>
            <FillBlanksQuiz/>
          </MainLayout>
        }
      />
      

     <Route
        path="/dashboard"
        element={
          <Layout>
           <Dashboard/>
          </Layout>
        }
      />
      
      <Route
        path="/users"
        element={
          <Layout>
            <Users />
          </Layout>
        }
      />
     <Route
        path="/mentors"
        element={
          <Layout>
            <Mentors/>
          </Layout>
        }
      />
      <Route
        path="/coursesdash"
        element={
          <Layout>
            <Coursesd/>
          </Layout>
        }
      />
      <Route
        path="/certificates"
        element={
          <Layout>
            <Certificates/>
          </Layout>
        }
      />
      
      <Route 
      path="/addcourse" 
      element={<AddCourse/>} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
