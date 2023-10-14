import React, { useState } from "react";
import Pic1 from "./assets/picture-1.png";
import Pic2 from "./assets/picture-2.png";
import Pic3 from "./assets/picture-3.png";
import data from "./assets/CA";
import { Link } from "react-router-dom";
const express = require('express');


const Home = () => {
  const [value,setValue]=useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
        setValue(searchTerm);
        
  }



  return (
    <>
    <div className="flex items-center justify-around h-100 w-full mt-auto mx-0 bg-gradient-to-r from-[#feddee] via-[#c5eaed] to-[#fddefe]">
      <div className="items-center justify-center">
        <h1 className="font-extrabold font-[Poppins] ">
          Find Partners (CAs) available online.
        </h1>
        <p>
          CONNECT with us where your services are listed and visible to a myriad
          of
          <br /> businesses seeking CA’s for compliance support
        </p>
        <div className="m-2 flex w-50 bg-white border-none rounded-md ">
          <input
            className="w-full bg-transparent border-none px-4 py-1 text-blue-gray-900 outline-none focus:outline-none"
            type="search"
            placeholder="Search"
            value={value}
            onChange={onChange}
          ></input>
          <button onClick={()=>onSearch(value)} className="m-0 rounded bg-blue-500 text-white px-4 py-2 border-none h-25 p-0" >Search</button>
        </div>
          <div className="flex flex-col bg-white rounded-md pl-3 w-[80%] ml-2">{data.filter((item)=>{
            const searchTerm = value.toLowerCase();
            const name = item.name.toLowerCase();

            return searchTerm && name.startsWith(searchTerm) && name !== searchTerm
          }).map((item)=>(<div onClick={()=>onSearch(item.name)} className="flex hover:cursor-pointer w-full">{item.name}</div>))}</div>
      </div>
      <div className="flex items-center justify-around mt-40 gap-5">
        <img src={Pic1} alt="" className="mt-20" />
        <img src={Pic2} alt="" />
        <img src={Pic3} alt="" className="mt-20" />
      </div>
    </div>
    <section>
          <div></div>
          <div></div>
    </section>
    </>
  );
};

export default Home;
