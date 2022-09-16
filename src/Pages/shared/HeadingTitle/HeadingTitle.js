import React from 'react';
import './HeadingTitle.css'

const HeadingTitle = ({subtitle,title}) => {
    return (
        <>
          <div id='heading'>
            <h3>{subtitle} </h3>
            <h1>{title} </h1>
          </div>
        </>
      )
};

export default HeadingTitle;