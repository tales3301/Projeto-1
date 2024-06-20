import "./CardHome.css";

const Card = (props) => {
  return (
    <div className="containerCard">
      <div className="infoCard">
        <h4>{props.title}</h4>
        <h2>{props.value}</h2>
        <p>{props.info}</p> 
      </div>
      <div className="iconeCard">{props.iconeCard}</div>
    </div>
  );
};

export default Card;
