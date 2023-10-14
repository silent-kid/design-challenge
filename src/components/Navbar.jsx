import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav class="flex items-center justify-between mt-5 mr-2 pt-0 h-10 border-black w-full">

    <div class="mx-2">
      <img src={Logo} alt="" />
    </div>
    <div className='flex justify-between align-middle'>
      <a class="mx-2 my-auto md:cursor-pointer hover:text-blue-500 font-semibold">Solutions<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></a>
      <a class="mx-2 my-auto md:cursor-pointer hover:text-blue-500 font-semibold">Features<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></a>
      <a class="mx-2 my-auto md:cursor-pointer hover:text-blue-500 font-semibold">Blog</a>
      <a class="mx-2 my-auto md:cursor-pointer hover:text-blue-500 font-semibold">About<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg></a>
      <a class="mx-2 my-auto md:cursor-pointer hover:text-blue-500 font-semibold">Contact</a>

    </div>

    <div>
      <button class="mx-2 my-auto md:cursor-pointer w-20 rounded-md h-9 text-blue-500 border-x-2 border-y-2 border-sky-500 font-black">Login</button>
      <button class="mx-2 my-auto md:cursor-pointer w-20 rounded-md h-9 bg-blue-500 text-white font-black  border-sky-500">Register</button>
    </div>
  </nav>
  {/* <svg className='w-full bottom-60 left-0 absolute -z-10'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000" fill-opacity="1" d="M0,192L1440,32L1440,320L0,320Z"></path>
</svg> */}
  </>
  )
}

export default Navbar