import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className="pt-20">
      <div className="flex justify-evenly py-10 ">
          <FaXTwitter
            onClick={() => newTab("https://twitter.com/nonstatemedia")}
            className="cursor-pointer hover:bg-zinc-100 ease-in duration-300 px-4 py-4 text-7xl rounded-full"
          />
        <FaInstagram
          onClick={() => newTab("https://www.instagram.com/nonstatemedia/")}
          className="cursor-pointer hover:bg-zinc-100 hover:text-[#E4405F] ease-in duration-300 px-4 py-4 text-7xl rounded-full"
        />
      </div>
      <div className="bg-orange-400 py-3">
        <p className="text-center text-[12px]">
          Copyright © 2022 by Non-State Media. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
