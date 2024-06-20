import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import GridCards from "../../components/GridCardsInfo/GridCardsInfo";

import "./TelaInfo.css";

const TelaHome = ({ socket }) => {  
  return (
    <>
      <Header icon="home" title="Home" />
        <div className="containerTelaHome">
          <GridCards />
        </div>
      <Footer />
    </>
  );
};

export default TelaHome;
