import React from "react";
import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <div>
      <div className="mx-8 sm:mx-16 xl:mx-24 relative">
        <div className="text-center mt-7 mb-8">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
            <p>New:AI feature integrated</p>
            <img src={assets.star_icon} alt="start-icon" className="w-2.5" />
          </div>

          <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16">
            Your own <span className="text-primary">blogging</span> <br />{" "}
            platform
          </h1>

          <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
            This is your space to think out loud, share what matters, and write about the things you love. You can also gather knowledge here. <br />
            <span className="text-primary">Start your journey today!</span>
          </p>

          <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white    rounded overflow-hidden">
               <input type="text" placeholder="Search for blogs" required className="pl-4 outline-none"/>
               <button type="submit" className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search here</button>
          </form>
        </div>
        <img
          src={assets.gradientBackground}
          alt="gradientBackground"
          className="absolute -top-50 -z-1 opacity-50"
        />
      </div>
    </div>
  );
};
