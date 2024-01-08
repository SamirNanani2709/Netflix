import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

export const Main = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <img
          className=" w-full h-[845px] object-cover sm:block absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 w-full h-[845px] top-0 left-0 absolute" />

        <div className="absolute w-full px-4 py-28 ">
          <div className="text-center mx-auto py-16">
            <h1 className=" max-[768px]:text-3xl md:text-6xl font-extrabold">
              Enjoy big movies, hit series and more from ₹ 149.
            </h1>
            <h4 className="  max-[768px]:text-xl md:text-2xl font-bold py-5">
              Join today. Cancel anytime.
            </h4>
            <h6 className=" max-[768px]:text-xl md:text-2xl font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
            <Link to="/login" className="flex justify-center">
              <button
                class="bg-[red] text-white font-bold py-2 px-4 rounded mt-16 
                    flex"
              >
                Get Started
                <svg
                  class="rtl:rotate-180 w-5 h-3.5 ms-3 mt-[0.35rem]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Card
          image="./Images/Tv.png"
          text="Enjoy on your TV"
          text2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        />
        <Card
          isImageRight={false}
          image="./Images/feature-2.png"
          text="Download your shows to watch offline"
          text2="Save your favorites easily and always have something to watch."
        />
        <Card
          image="./Images/feature-3.png"
          text="Watch everywhere"
          text2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        />
        <Card
          isImageRight={false}
          image="./Images/feature-4.png"
          text="Create profiles for kids"
          text2="Send children on adventures with their favorites characters in a space made just for them—free with your membership."
        />
      </div>
      <Footer />
    </>
  );
};
