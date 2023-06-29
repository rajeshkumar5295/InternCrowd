

import React from 'react';
import './App.css';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes,Route } from 'react-router-dom';

import Home from "./pages/Home"
import About from "./pages/About"
import Internship from './pages/Internship';
import Login from './User/Login';
import Signup from './User/Signup';
import ForgotPassword from './User/ForgotPassword'


function App() {
  return (
             <>  
             <Routes>
              
                 <Route path='/' element={<Home/>}  />
                 <Route path='/about' element={<About/>} />
                 <Route  path="/internship" element={<Internship/>} />
                 <Route   path='/login' element={<Login/>} />
                 <Route  path='/signup' element={<Signup/>} />
                 <Route  path='/forgotpassword' element={<ForgotPassword/>} />

             </Routes>

             
             
             <ToastContainer/>
             </>
  );
}

export default App;
