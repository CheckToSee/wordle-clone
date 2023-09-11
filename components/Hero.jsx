"use client";

import React, { useState, useEffect } from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'
import * as logic from '../app/hooks.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Hero = () => {

  useEffect(() => {
    document.addEventListener('keydown', logic.keypress, true)
  }, [])

  const detectKeyDown = (e) => {
    console.log("clicked key: ", e.key)
  }

  const [active, setActive] = useState(() => {
    console.log("not active")
    return false
  })

  // function switchActive() {
  //   setActive(!active)
  // }

  if (active) {
    logic.keypress('T')
  }

  return (
    <>
      <div className='h-screen w-full mt-[-68px] flex justify-center bg-[#121213]'>
        <div className='py-[68px] h-full flex flex-col items-center'>
          {/* GUESS BOXES */}
          <div className='grid grid-rows-6 gap-1 mt-3'>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row1 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row1 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row1 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row1 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row1 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row2 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row2 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row2 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row2 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row2 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row3 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row3 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row3 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row3 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row3 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row4 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row4 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row4 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row4 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row4 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row5 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row5 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row5 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row5 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row5 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
            <div className='h-14 grid grid-cols-5 gap-1'>
              <div className='row6 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row6 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row6 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row6 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
              <div className='row6 h-14 w-14 border-2 border-[#3A3A3C] flex justify-center items-center text-3xl font-bold'></div>
            </div>
          </div>

          {/* KEYBOARD */}
          <div className='flex flex-col mt-3 text-xl'>
            <div className='flex flex-row'>
              <button value='Q' id="Q" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>Q</button>
              <button value='W' id="W" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>W</button>
              <button value='E' id="E" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>E</button>
              <button value='R' id="R" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>R</button>
              <button value='T' id="T" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>T</button>
              <button value='Y' id="Y" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>Y</button>
              <button value='U' id="U" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>U</button>
              <button value='i' id="I" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>I</button>
              <button value='O' id="O" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>O</button>
              <button value='P' id="P" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>P</button>
            </div>
            <div className='flex flex-row mt-2 justify-center'>
              <button value='A' id="A" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>A</button>
              <button value='S' id="S" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>S</button>
              <button value='D' id="D" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>D</button>
              <button value='F' id="F" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>F</button>
              <button value='G' id="G" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>G</button>
              <button value='H' id="H" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>H</button>
              <button value='J' id="J" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>J</button>
              <button value='K' id="K" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>K</button>
              <button value='L' id="L" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>L</button>
            </div>
            <div className='flex flex-row mt-2 justify-center'>
              <button className='bg-[#818384] w-16 h-14 rounded-[4px] font-bold ml-[6px] text-xs' onClick={logic.submitLine}>ENTER</button>
              <button value='Z' id="Z" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>Z</button>
              <button value='X' id="X" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>X</button>
              <button value='C' id="C" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>C</button>
              <button value='V' id="V" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>V</button>
              <button value='B' id="B" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>B</button>
              <button value='N' id="N" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>N</button>
              <button value='M' id="M" className='bg-[#818384] w-10 h-14 rounded-[4px] font-bold ml-[6px]' onClick={logic.keyClick}>M</button>
              <button className='bg-[#818384] w-16 h-14 rounded-[4px] font-bold ml-[6px] flex justify-center items-center' onClick={logic.deleteLetter} >
                <RiDeleteBack2Line size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className='mt-14' />
    </>
  )
}

export default Hero
