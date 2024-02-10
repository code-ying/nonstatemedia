import React, { useState, useEffect } from "react";
import { navbar } from "../data/data";
import { Link, Navigate } from "react-router-dom";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if(window.scrollY > 10) {
      setChangeColor(true)
    }else{
      setChangeColor(false)
    }
  }
useEffect (() => {
  changeBackgroundColor();
  window.addEventListener('scroll', changeBackgroundColor);
})

  return (
    <nav className={changeColor ? "backdrop-blur-sm bg-white/30 fixed w-full ease-in duration-500 top-0 z-50" : ""}>
      <div className="flex font-plusjakarta font-extralight lg:justify-evenly justify-between">
        <div className="p-5">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-16"/>
          </Link>
        </div>
        <div className="md:flex lg:flex justify-between items-center hidden sm:hidden xs:hidden">
          {navbar.map((item) => {
            return (
              <Link to={item.path} key={item.id}>
                <li className="list-none uppercase m-2 px-2 py-1 rounded-xl hover:bg-third duration-500 font-bold">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </div>
        <div className="items-center flex p-5 text-2xl md:hidden lg:hidden xs:flex sm:flex md:flex hover:bg-primary duration-500 font-bold cursor-pointer"onClick={handleNav}>
          <button className="">
            <RiMenu4Line />
          </button>
        </div>
      </div>
      <div onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        {navbar.map((item) => {
          return (
            <Link to={item.path} key={item.id}>
              <ul className="h-full w-full text-center pt-3">
                <li className="list-none uppercase m-2 px-4 py-1 rounded-xl hover:bg-ice duration-500 font-bold">
                  {item.name}
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
