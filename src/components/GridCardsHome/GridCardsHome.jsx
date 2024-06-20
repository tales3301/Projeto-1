import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "../CardHome/CardHome";
import "./GridCardsHome.css";

const GridCards = () => {
  const [Dados, setDados] = useState([]);

  const configHearders = {
    headers: {
      "Content-Type": "application/json"
    },
  };

  async function getDados() {
    try {
      const response = await axios.get(
        `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`, configHearders);

      console.log(response.data);
      setDados(response.data);
    } catch (erro) {
      console.log(erro);
    }
  }

  useEffect(() => {
    getDados();
  }, []);

  return (
    <div className="containerCards"> 
      <div className="grid">
        <div className="primeiraLinha">
          { Dados.USDBRL ? (
            <Card
              title={ Dados.USDBRL.name}
              value={ `Valor de compra: ${ Dados.USDBRL.bid } Valor de venda:  ${ Dados.USDBRL.ask }` }
              info={`Variação: ${Dados.USDBRL.varBid}`}
            ></Card>
          ) : null }
          { Dados.EURBRL ? (
            <Card
              title={ Dados.EURBRL.name}
              value={ `Valor de compra: ${ Dados.EURBRL.bid } Valor de venda:  ${ Dados.EURBRL.ask }` }
              info={`Variação: ${Dados.EURBRL.varBid}`}
            ></Card>
          ) : null }
          { Dados.BTCBRL ? (
            <Card
              title={ Dados.BTCBRL.name}
              value={ `Valor de compra: ${ Dados.BTCBRL.bid } Valor de venda:  ${ Dados.BTCBRL.ask }` }
              info={`Variação: ${Dados.BTCBRL.varBid}`}
            ></Card>
          ) : null }
        </div>
      </div>
    </div>
  );
};

export default GridCards;
