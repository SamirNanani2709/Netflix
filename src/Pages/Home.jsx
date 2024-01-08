import React from "react";
import Banner from "../Components/Banner";
import Columns from "../Components/Columns";
import endpoints from "../Services/Movieservices";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Columns ColumnId="1" title="Upcoming" fetchURL={endpoints.upcoming} />
      <Columns ColumnId="2" title="Popular" fetchURL={endpoints.popular} />
      <Columns ColumnId="3" title="Trending" fetchURL={endpoints.trending} />
      <Columns ColumnId="4" title="Comedy" fetchURL={endpoints.comedy} />
      <Footer />
    </>
  );
};

export default Home;
