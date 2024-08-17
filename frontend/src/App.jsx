import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home         from './pages/Home';
import Auth         from './components/Auth';
import Users        from './components/Users';
import Layout       from './components/Layout';
import MainLayout   from './components/MainLayout';
import Mentors      from './components/Mentors';
import Coursesd     from './components/Coursesd';
import Certificates from './components/Certificates';
import Dashboard    from '../src/components/dashboard';
import AddCourse    from './pages/AddCourse';
import Profile      from './pages/Profile';
import CourseDiscussion from './pages/CourseDiscussion';

import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import MentorCourse from './pages/MentorCourse';
import HomeScreen from './pages/HomeScreen';

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
        path="/CourseDiscussion"
        element={
          <MainLayout>
            <CourseDiscussion/>
          </MainLayout>
        }
      />
      
      
      <Route
        path="/MentorCourse"
        element={
          <MainLayout>
            <MentorCourse/>
          </MainLayout>
        }
      />
      <Route
        path="/Checkout"
        element={
          <MainLayout>
            <Checkout/>
          </MainLayout>
        }
      />
      <Route
        path="/HomeScreen"
        element={
          <MainLayout>
            <HomeScreen/>
          </MainLayout>
        }
      />
      <Route
        path="/Payment"
        element={
          <MainLayout>
            <Payment/>
          </MainLayout>
        }
      />


<Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
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
      
      <Route path="/addcourse" element={<AddCourse/>} />

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
