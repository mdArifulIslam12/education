import React from 'react';
import './Coures.css'

const Coures = ({coures}) => {
    const {cover, coursesName,courTeacher,priceAll,pricePer} = coures
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
        <div className="card-body ">
         <div className='flex justify-between'>
         <div className='bg-primary w-20 h-20 coures-img'>
              <img src={cover} alt="" className='w-[50px] h-[50px]' srcset="" />
          </div>
          <div className=' w-[245px] ml-4'>
          <h2 className=" text-4xl font-medium">{coursesName}</h2>
          <p className='text-lg '>{}</p>
         
          </div>
         </div>
         <h3 className='text-primary text-xl font-medium mt-20 text-center'>{priceAll} / {pricePer}</h3>
         <button className='btn  btn-outline btn-primary w-100 mt-8'>Enroll Now!</button>
        </div>
      </div>
    );
};

export default Coures;