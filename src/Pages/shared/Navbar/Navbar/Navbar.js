import React from 'react';
import DownNav from '../DownNav/DownNav';
import TopNav from '../TopNav/TopNav';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <TopNav/>
            <DownNav/>
            {/* <DownNav1/> */}
        </div>
    );
};

export default Navbar;