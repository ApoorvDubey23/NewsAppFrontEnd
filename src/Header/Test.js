import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Fade } from "react-awesome-reveal";

const DelayedRenderingOnScroll = () => {
  // Simulated data to be rendered
  const data = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    "Option 3",
    // Add more options as needed
  ];

  const [renderedOptions, setRenderedOptions] = useState([]);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      // Simulating delay before rendering
      setTimeout(() => {
        const nextOptions = data.slice(renderedOptions.length, renderedOptions.length + 1);
        setRenderedOptions(prevOptions => [...prevOptions, ...nextOptions]);
      }, 500); // Adjust delay time as needed
    }
  };

  return (
    <div className=' mt-[10vh]'>
      {data.map((option, index) => (
        
          
    //   <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
    <Fade direction='up'>
        <div className='bg-black text-white h-[100px] w-[100px]' style={{ height: '100px' }} >
        <p key={index}>{option}</p>
        </div>
        </Fade>

    //   </VisibilitySensor>
      ))}
      
    </div>
  );
};

export default DelayedRenderingOnScroll;
