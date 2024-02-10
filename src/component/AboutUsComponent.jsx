import React from "react";
import logo from "../assets/img/logo.png";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
const AboutUsComponent = () => {
  let navigate = useNavigate();
  return (
    <div className="pt-20 w-4/6 m-auto">
      <hr className="py-10" />
      <div className="lg:flex lg:justify-between pb-20 ">
        <div className="m-auto lg:pr-24 text-center">
          <h1 className="font- text-5xl py-5 text-left">
            What is{" "}
            <span className="bg-black text-orange-400 px-2">
              "Non-state Media"
            </span>
            ?{" "}
          </h1>
          <p className="py-5 font-garamond text-justify text-xl font-bold">
            Pemilihan nama "Non-State" tuh sebenernya karena kami pengen banget
            media ini tetap merdeka, nggak ada ikatan atau pengaruh langsung
            dari negara atau pemerintahan gitu.
          </p>{" "}
          <p className="py-5 font-poppins text-lg font-bold text-justify">
            {" "}
            As a dedicated media platform focused on international relations and
            geopolitics, our mission is to deliver comprehensive and insightful
            content that unravels the intricate dynamics between nations.
          </p>{" "}
          <p className="py-5 font-kiw text-lg text-left">
            {" "}
            Harapannya, sih, media kami bisa ngasih info yang lebih adil,
            terpercaya, dan objektif. 😆😆
          </p>
          <div onClick={() => navigate("/aboutus")} className="">
            <Button className=""/>
          </div>
          
        </div>
        <div className="lg:w-5/6 pt-10">
          <img src={logo} alt="" className="w-full"/>
        </div>
      </div>{" "}
    </div>
  );
};

export default AboutUsComponent;
