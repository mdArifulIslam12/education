import React from 'react';
import './HomeAbout.css'
import aboutImg from "../../../assets/about.webp"
import HeadingTitle from '../../shared/HeadingTitle/HeadingTitle';
import HomeAboutRow from '../HomeAboutRow/HomeAboutRow';

const HomeAbout = () => {
    const homeAbout = [
        {
          id: 1,
          cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
          title: "Online Courses",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 1,
          cover: "https://img.icons8.com/ios/80/000000/diploma.png",
          title: "Earn A Certificates",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 1,
          cover: "https://img.icons8.com/ios/80/000000/athlete.png",
          title: "Learn with Expert",
          desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
      ]
    return (
        <div className='home-about max-w-7xl mx-auto mb-5 container'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="">
                    <img src={aboutImg} className='w-100 h-[800px]' alt="" />
                </div>
                <div className="lg:ml-16">
                    {/* <HeadingTitle subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
                    <h3 className='text-xl font-medium text-primary mb-6'>LEARN ANYTHING</h3>
                    <h2 className='text-5xl font-medium mb-10'>Benefits About Online Learning Expertise</h2>

                    <div className='grid grid-cols-1 gap-6 about-home-page'>
                    {
                        homeAbout.map(about =><HomeAboutRow about={about} key={about.id}></HomeAboutRow>)
                    }
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default HomeAbout;