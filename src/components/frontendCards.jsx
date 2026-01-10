import "../index.css";

function FrontendCards(props){
  return (
  <div className="Card">
    <h1 className="cardHeader">
      {props.headers}
    </h1>
    <p className="cardDescription">
      {props.text}
    </p>
    <h1 className="arrowEmote">
      ↘️
    </h1>
  </div>
  )
}

export default FrontendCards;