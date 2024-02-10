import React from "react";
import barcode from "../assets/img/barcode.jpeg";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const NonStateCornerComponent = () => {
  const newTab = (url) => {
    window.open(url);
  };

  return (
    <div className="lg:pt-20 w-4/6 m-auto">
      <div className="lg:text-center text-center">
        <h1 className="font-garamond text-5xl font-bold">
          <span className="bg-black text-orange-400 px-2">Non-State Media</span>{" "}
          Corner
        </h1>
        <div className="xl:flex pt-20 flex-row-reverse font-plusjakarta pb-10">
          <div className="py-10 xl:w-4/6 text-left">
            <div className="flex flex-col">
              <p className="pb-10 text-3xl m-auto">'pou(ə)r'</p>
              <hr />
              <p className="py-10 text-3xl m-auto">POWER</p>
            </div>
            <p className="font-kiw text-justify text-lg">
              Kami selalu percaya, kalau kita semua harus merdeka dalam menulis,
              bebeas dalam berpikir.
            </p>
            <p className="text-justify font-kiw text-lg">
              Oleh karena itu, hadirin yang berbahagia, kami membuka kesempatan
              bagi temen-temen untuk berkontribusi lewat POWER (Posting-an
              Follower) yang nantinya akan dimuat di platform media sosial dan
              website NSM
            </p>
          </div>
          <div className="w-full">
            <img src={barcode} alt="" className="lg:w-4/6 m-auto" />
          </div>
        </div>
        <Link onClick={() => newTab("https://s.id/SendYourPOWER")}>
          <Button className=""/>
        </Link>
      </div>
    </div>
  );
};

export default NonStateCornerComponent;
