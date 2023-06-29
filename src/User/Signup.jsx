import React, { useState } from "react";

import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {toast} from "react-toastify"

import Layout from '../components/Layout'

const Signup = () => {



  const navigate=useNavigate();
     
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  
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

const handleShowPassword = () => {
setShowPassword((preve) => !preve);
};

const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const handleShowConfirmPassword = () => {
setShowConfirmPassword((preve) => !preve);
};


  const handleSubmit= async (e)=>{
    e.preventDefault();
     
    
       
  }



  return (
    <div>
          <Layout>

         <div className="p-3  md:p-4  ">
          <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4 ">
        <h1 className='text-center text-xl font-bold ' > SignUP Here </h1>
        

      

        <form className="w-full  py-3  flex flex-col "   onSubmit={handleSubmit} >
          <label htmlFor="firstName"> First Name : </label>
          <input
            type="text"
            name="firstName"
           value={data.firstName}
           onChange={handleOnChange}
            className="mt-1  bg-slate-200 w-full px-2 py-1 rounded  mb-2 focus-within:outline-blue-300    "
          />

          <label htmlFor="LastName"> Last Name : </label>
          <input
            type="text"
            name="lastName"
          value={data.lastName}
          onChange={handleOnChange}

            className="mt-1  bg-slate-200 w-full px-2 py-1 rounded  mb-2  focus-within:outline-blue-300   "
          />

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

          <label htmlFor="Password"> Confirm Password : </label>
          <div
            className="flex  px-2 py-1  bg-slate-200 rounded  mt-1 mb-1   
          focus-within:outline focus-within:outline-blue-300  "
          >
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleOnChange}
              className="  bg-slate-200 w-full  border-none outline-none   "
            />
            <span
              className="flex  text-xl cursor-pointer "
              onClick={handleShowConfirmPassword}
            >
              
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full  bg-blue-600 max-w-[150px] hover:bg-blue-800 cursor-pointer m-auto text-xl font-medium text-cetner py-1  rounded-full mt-4 ">
            
            Sign Up
          </button>
        </form>
             
        <p>
          
          Already have an Account ?
          <Link to="/login">
          
            <span className="text-blue-500 file:"> Sign In </span>
          </Link>
        </p>
      </div>



      
    

           </div>
                
          </Layout>

    </div>
  )
}

export default Signup