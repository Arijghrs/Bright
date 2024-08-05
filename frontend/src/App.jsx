import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Auth from './components/Auth.jsx';
import Users from './components/Users.jsx';
import Layout from './components/Layout.jsx';
import MainLayout from './components/MainLayout.jsx';
import Mentors from './components/Mentors.jsx';
import Coursesd from './components/Coursesd.jsx';
import Certificates from './components/Certificates.jsx';
import Dashboard from '../src/components/dashboard.jsx';
import AddCourse from './pages/AddCourse.jsx';
import Profile from './pages/Profile.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (

    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path="/signup" element={
          <MainLayout>
            <Auth />
          </MainLayout>
        }
      />

      <Route element={<PrivateRoute/>}>

       <Route path="/profile" element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
       />      

     <Route path="/dashboard" element={
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

      </Route>

    </Routes>
    </BrowserRouter>
     
  );
}



export default App;
