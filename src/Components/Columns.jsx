import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Columns = ({ title, fetchURL, ColumnId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Call the async function
  }, [fetchURL]); // Ensure useEffect runs when fetchURL changes

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + ColumnId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById("slider" + ColumnId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="p-4 font-bold md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          className="bg-white text-black left-0 absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + ColumnId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          className="bg-white right-0 text-black absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Columns;
