import React, { useState } from "react";
import logo from "../assests/rajesh.jpg";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-toastify";




const Header = () => {
  
        
const userData=useSelector((state)=>state.user)

const dispatch=useDispatch();
   
// const hadleLogout =()=>{   

// dispatch(logoutRedux());
// toast("Logout successfully");
 
// }
    
         
console.log(process.env.REACT_APP_ADMIN_EMAIL);

// const cartItemNumber=useSelector((state)=>state.product.cartItem)
 
return (
<header className="flex  shadow-md w-full h-16 px-2 md:px-4  sticky  z-50 bg-white  ">

<div className="flex items-center h-full  w-full justify-between mr-5 ">

<Link to="/">
<div className="h-16">
  <img src={logo} alt="" className="h-16" />
</div>
</Link>

<div className="flex justify-between  items-center gap-4 md:gap-6  " >
<nav className="list-none flex  gap-4 md:gap-6  text-base md:text-lg  md:flex  " >
   <Link to="/" > <li> Home  </li>  </Link>
   <Link to="/about" > <li> About  </li>  </Link>
   <Link to="/internship" > <li> InternShip  </li>  </Link>
   <Link to="/login" > <li> Login  </li>  </Link>
    
</nav>

</div>

</div>


</header>
);
};


export default Header