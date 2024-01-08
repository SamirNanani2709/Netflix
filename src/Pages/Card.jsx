import React from "react";

function Card(props) {
  return (
    <div>
      <hr className="border-[4px] border-gray-700 my-[-1px]" />
      <div className="bg-black h-[90vh] md:flex justify-between">
        {props.isImageRight ? (
          <>
            <div className="text-white text-5xl font-extrabold max-w-[640px] text-center md:mt-32 md:ml-10 lg:mt-64 lg:mr-10 xl:mt-72 xl:text-7xl">
              {props.Heading}
              <br />
              <span className="text-white text-xl font-normal mt-7 block xl:text-2xl">
                {props.Detail_para}
              </span>
            </div>
            <img
              src={props.image}
              className="md:w-[400px] lg:w-[600px] xl:w-[800px] mt-5"
              alt=""
            />
          </>
        ) : (
          <>
            <img
              src={props.image}
              className="md:w-[400px] lg:w-[600px] xl:w-[800px] mt-5"
              alt=""
            />
            <div className="text-white text-5xl font-extrabold max-w-[640px] text-center md:mt-10 md:ml-10 lg:mt-64 lg:mr-10 xl:mt-72 xl:text-7xl">
              {props.Heading}
              <br />
              <span className="text-white text-xl font-normal mt-7 block xl:text-2xl">
                {props.Detail_para}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Card.defaultProps = {
  isImageRight: true,
};

export default Card;
