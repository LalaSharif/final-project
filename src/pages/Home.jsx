import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import Aboutus from "../components/Aboutus/Aboutus";
import Categoryies from "../components/Categories/Categoryies";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Mostpopular from "../components/Mostpopular/Mostpopular";
import Contacts from "../components/Contact/Contacts";
import Collections from "../components/Collections/Collections";
function Home() {
  return (
    <div>
      <HomeHeader />
      <Categoryies />
      <Aboutus />
      <Banner />
      <Products />
      <Mostpopular />
      <Collections />
      <Contacts />
    </div>
  );
}

export default Home;
