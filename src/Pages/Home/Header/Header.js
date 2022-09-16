import React from "react";
import HeadingTitle from "../../shared/HeadingTitle/HeadingTitle";
import "./Header.css";

const Header = () => {
  return (
    <div className=" hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="px-3 lg:px-0">
            <HeadingTitle
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
            <p className="pb-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="btn btn-primary text-white mb-3 lg:mb-0 ">
                GET STARTED NOW{" "}
                <i className="fa fa-long-arrow-alt-right button-icon"></i>
              </button>
              <button className="text-[#1eb2a6] ml-4 btn bg-[white] border-none">
                VIEW COURSE <i className="fa fa-long-arrow-alt-right button-icon button-icons text-[#1eb2a6]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
