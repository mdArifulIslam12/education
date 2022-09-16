import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import Coures from '../Coures/Coures';

const Courese = () => {

    const {
        data: courese,
        isLoading,
      } = useQuery("courese", () =>
        fetch("https://calm-plateau-26528.herokuapp.com/coures", {
          method: "GET",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => res.json())
      );
      if (isLoading) {
        return <Loading />;
      }
    return (
        <div className='max-w-7xl mx-auto mt-20 mb-20'>
            <div className='text-center mb-12'>
                <h2 className='text-primary text-xl mb-3 font-medium uppercase'>Our Courese</h2>
                <h1 className='text-5xl font-bold '>Explore Oure Popular Online Courese</h1>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                {
                   courese.slice(0, 3).map(coures =><Coures key={coures._id} coures={coures}></Coures>) 
                }
            </div>
        </div>
    );
};

export default Courese;