import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[160px] bg-[red] mt-32">
        <hr class="border-[4px] border-gray-700 my-[-1px]" />
        <div className=" h-auto absolute flex w-full p-4 justify-between">
          <h1 className="uppercase text-white font-bold max-[640px]:text-3xl md:text-5xl cursor-pointer ">
            Netflix
          </h1>
        </div>
        <div className="my-16 py-8 flex justify-evenly text-gray-400">
          <p>Questions? Call 000-800-919-1694</p>
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Account</p>
          <p>Media Center</p>
          <p>Terms of Watch</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
