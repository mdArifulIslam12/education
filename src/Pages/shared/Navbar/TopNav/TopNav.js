import React from "react";
import { useLocation } from "react-router-dom";


import './TopNav.css'

const TopNav = () => {
  const location = useLocation()
  return (
    <section className={`head mt-3 px-3 ${location.pathname.split("/")[1] == 'signup' || location.pathname.split("/")[1] == 'login'|| location.pathname.split("/")[1] == 'dashboard'  ? 'hidden' : 'block'}`}>
      <div className="row flex justify-between items-center">
        <div className="logo col-lg-3">
          <h1>ACADEMIA</h1>
          <span>ONLINE EDUCATION & LEARNING</span>
        </div>

        <div className="social col-lg-3 lg:block hidden">
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-youtube icon"></i>
        </div>
      </div>
    </section>
  );
};

export default TopNav;
