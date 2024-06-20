import { useState, useEffect } from "react";
import Card from "../CardHome/CardHome";
import "./GridCardsInfo.css";

const GridCards = () => {

  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
        <Card
              title={"Thalysson Kauã"}
              value={ `Estudante de Analises de sistemas` }
              info={`22 anos, Estudante `}
            ></Card>  
        </div>
      </div>
    </div>
  );
};

export default GridCards;
