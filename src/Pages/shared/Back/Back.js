import React from 'react';
import { useLocation } from 'react-router-dom';
import './Back.css'

const Back = ({title}) => {
    const location = useLocation()

    return (
      <>
        <section className='back'>
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
        </section>
        <div className='home-about'></div>
      </>
    )
};

export default Back;