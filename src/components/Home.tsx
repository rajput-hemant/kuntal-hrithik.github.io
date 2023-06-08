import React from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800  ; '>
         <div className='max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row '>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white ' > I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md' >
                I am a Student.
                Currently, I love to work on web applications using technoligies like
                React, tailwind ,Next js and Typescript. 
            </p>
            <div >
                <button className='text-white group  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight></MdKeyboardArrowRight>
                    </span>
                   
                </button>
            </div>
            </div>
            <div className='rounded-2xl mx-auto  w-2/3 md:w-full items-center py-32 ' >
                <img src="/luffy.png" alt="my personal profile"  />
            </div>
         </div>
    </div>
  );
}

export default Home;