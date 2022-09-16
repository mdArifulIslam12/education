import React from 'react';
import './HomeAboutRow.css'

const HomeAboutRow = ({about}) => {
    const {desc,cover,title} = about
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl about-detalis">
  <div className="card-body ">
   <div className='flex'>
   <div>
        <img src={cover} alt="" className='w-[100px]' srcset="" />
    </div>
    <div className='ml-4'>
    <h2 className="card-title text-xl">{title}</h2>
    <p className='text-lg about-details-1'>{desc}</p>
     
    </div>
   </div>
  </div>
</div>
    );
};

export default HomeAboutRow;