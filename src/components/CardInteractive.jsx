import { useState } from "react";
import star from "../assets/icon-star.svg";
import "./card-interactive.css";
import CardInteractiveThanks from "./CardInteractiveThanks";

const CardInteractive = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isRating, setIsRating] = useState(false);

  function selectNumber(number) {
    setSelectedNumber(number);
  }

  return isRating ? (
    <CardInteractiveThanks number={selectedNumber} />
  ) : (
    <article className="card-interactive">
      <div className="card-interactive__start">
        <img src={star} alt="Star" />
      </div>
      <h1 className="card-interactive__title">How did we do?</h1>
      <p className="card-interactive__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="card-interactive__buttons">
        <button
          className="card-interactive__button"
          onClick={() => selectNumber(1)}
        >
          1
        </button>
        <button
          className="card-interactive__button"
          onClick={() => selectNumber(2)}
        >
          2
        </button>
        <button
          className="card-interactive__button"
          onClick={() => selectNumber(3)}
        >
          3
        </button>
        <button
          className="card-interactive__button"
          onClick={() => selectNumber(4)}
        >
          4
        </button>
        <button
          className="card-interactive__button"
          onClick={() => selectNumber(5)}
        >
          5
        </button>
      </div>

      <button
        className="card-interactive__submit"
        onClick={() => {
          setIsRating(true);
        }}
      >
        Submit
      </button>
    </article>
  );
};

export default CardInteractive;
