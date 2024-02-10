import React from "react";
import giphy from "../assets/img/giphy.gif"
const ArticleComponent = () => {
  const newTab = (url) => {
    window.open(url);
  };
  return (
    <div className="w-4/6 text-center m-auto">
      <h1 className="font-plusjakarta text-5xl">Articles</h1>
      <p className="pb-20 font-kiw">Coming soon!</p>
      <p className="lg:text-xl">
        We're still building this page, you can go to our <span onClick={() => newTab("https://www.instagram.com/nonstatemedia/")} className="cursor-pointer font-bold border px-4 py-2 rounded-full">Instagram</span>{" "}
        or <span onClick={() => newTab("https://www.twitter.com/nonstatemedia")} className="cursor-pointer font-bold border px-4 py-2 rounded-full">Twitter</span> page for our articles.
      </p>
      <img src={giphy} alt="" className="m-auto pt-10 lg:w-5/6"/>
    </div>
  );
};

export default ArticleComponent;
