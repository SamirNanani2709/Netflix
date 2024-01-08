import React from "react";
import { SavedShow } from "../Components/SavedShow";

const Profile = () => {
  return (
    <>
      <div className="w-full">
        <img
          className=" w-full h-[400px] object-cover sm:block "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 w-full h-[550px] top-0 left-0 fixed" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Collection</h1>
        </div>
      </div>
      <SavedShow />
    </>
  );
};

export default Profile;
