'use client';

import { useState, React } from 'react';
import { AiFillSetting } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import * as logic from '../app/logic.js'

const Navbar = () => {
  const [rules, setRules] = useState(false);

  const handleRules = () => {
    setRules(!rules);
  }

  return (
    <>
      <div className='h-[68px] w-full top-0 flex flex-row items-center border-b'>
        <div className='w-full h-full flex flex-[1] ml-4 items-center border-b border-b-[#3A3A3C]'>
          <GiHamburgerMenu size={22} />
        </div>
        <div className='flex flex-[3] items-center justify-center text-2xl h-full w-full border-b border-b-[#3A3A3C]'>
          <h1 className='text-3xl font-extrabold'>Wordle</h1>
        </div>
        <div className='w-full flex flex-[1] justify-end items-center mr-4 border-b border-b-[#3A3A3C] h-full'>
          <button onClick={logic.resetGame} className='px-3 py-1 bg-white text-black text-sm font-semibold rounded-lg mr-4 hover:cursor-pointer'>New Word</button>
          <BsFillInfoCircleFill size={24} className='mr-2' onClick={handleRules} />
          <AiFillSetting size={32} />
        </div>
      </div>
      {/*NOTE: Finish implementing rules popup*/}
      {/*<div className={rules ? 'w-full h-screen bg-black text-black z-[100] absolute' : 'hidden'}>hi</div>*/}
    </>
  )
}

export default Navbar
