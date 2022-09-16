import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Loading from "../../Loading/Loading"
import auth from '../../../../firebase.init'
import './DownNav.css'
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../../CustomLink/CustomLink"
import { signOut} from "firebase/auth";

const DownNav = () => {
  const location = useLocation()


  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading/>;
  }
  const logOut =()=>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  const menuItems = (<>
      <li>
        <CustomLink to="/" className='text-lg font-medium'>Home</CustomLink>
      </li>
      {/* <li>
        <CustomLink className='text-lg font-medium' to="/reviews">Reviews</CustomLink>
      </li> */}
      <li>
        <CustomLink to="/about" className='text-lg font-medium'>About</CustomLink>
      </li>

       {user && (
        <li>
          {" "}
          <CustomLink to="/dashboard" className='text-lg font-medium'>Dashboard</CustomLink>
        </li>
      )}

      <li>
        {user ? (
          <button className="btn btn-ghost text-white mt-1" onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <CustomLink to="/login" className='text-lg font-medium'>Login</CustomLink>
        )}
      </li>
    
    </>
  )
  
  return ( 


<div className={`navbar  navbar-section p-0 lg:mt-14 px-4 lg:px-0 

  ${location.pathname.split("/")[1] == 'signup' || location.pathname.split("/")[1] == 'login'|| location.pathname.split("/")[1] == 'dashboard'  ? 'bg-[#1eb2a6] lg:mt-0' : 'bg-[#e7e7e74f]'}

`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden text-[#1eb2a6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className=" hidden  lg:flex ">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      </div>
      <div className=" hidden  lg:flex justify-start">
      </div>
      <div className='lg:navbar-end hidden lg:flex'>
            <div className='navbar-end-button'>GET CERTIFICATE</div>
          </div>
      <div className="navbar-end lg:hidden">
        <label
          tabIndex="1"
          htmlFor="my-drawer-2"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
      <Outlet />
    </div>
  );
};

export default DownNav;
