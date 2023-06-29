import React, { useState } from "react";


import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import {toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

import {useSelector ,useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";


import Layout from '../components/Layout'
import Signup from './Signup'

const Login = () => {

  const navigate =useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const userData=useSelector(state=>state)
  console.log(userData.user) 

   const dispatch=useDispatch()

  const [data, setData] = useState({

  email: "",
  password: "",
  
});

const handleOnChange=(e)=>{
      const {name,value}=e.target
      setData((preve)=>{
        return{
           ...preve ,
           [name]:value
        }
      })
}
 console.log(data);
const handleShowPassword = () => {
  setShowPassword((preve) => !preve);
};



const handleSubmit=async(e)=>{
  e.preventDefault();
   
  }

  return (
    <div>
           <Layout>


           <div className="p-3  md:p-4  ">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4   ">
      <h1 className='text-center text-xl font-bold ' > Login Here </h1>

        
          
        <form className="w-full  py-3  flex flex-col "   onSubmit={handleSubmit}  >
         
       

          <label htmlFor="Email"> Email : </label>
          <input
            type=" email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            className="mt-1  bg-slate-200 w-full px-2 py-1 rounded  mb-2 focus-within:outline-blue-300  "
          />

          <label htmlFor="Password"> Password : </label>
          <div className="flex  px-2 py-1  bg-slate-200 rounded  mt-1 mb-1 focus-within:outline  focus-within:outline-blue-300  ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={data.password}
              onChange={handleOnChange}
              className="  bg-slate-200 w-full  border-none outline-none   "
            />
            <span
              className="flex  text-xl cursor-pointer "
              onClick={handleShowPassword}  
            >
              
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

        

          <button className="w-full  bg-blue-600 max-w-[150px] hover:bg-blue-800 cursor-pointer m-auto text-xl font-medium text-cetner py-1  rounded-full mt-4 ">
            
            Login
          </button>
        </form>
             
        <p>
          
          Do Not have an Acconunt ?
          <Link to="/signup">
            
            <span className="text-blue-500 file:"> Sign Up </span>
          </Link>
        </p>
      </div>
    </div>
                
                 
           </Layout>
    </div>
  )
}

export default Login