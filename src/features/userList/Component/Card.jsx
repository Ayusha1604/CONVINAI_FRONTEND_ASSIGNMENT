import { useSelector } from "react-redux";
import {
  selectCardName,
  selectCardImg,
  selectCardEmail
} from "../userCardSlice";

import "../../../App";
function Card() {
  const cardName = useSelector(selectCardName);
  const cardImg = useSelector(selectCardImg);
  const cardEmail = useSelector(selectCardEmail);

  console.log(cardImg);

  let style = {
    display: cardName === "" ? "none" : "flex"
  };

  return (
    <>
      <div style={style} className="card-data">
        <img className="card-data-avatar" src={cardImg} alt="user-avatar"></img>
        <div className="card-data-details">
          <h2>{cardName}</h2>
          <p>{cardEmail}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
