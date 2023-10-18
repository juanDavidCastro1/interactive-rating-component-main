import imageThankYou from "../assets/illustration-thank-you.svg";
import "./card-interactive-thank.css";

const CardInteractiveThanks = ({ number }) => {
  return (
    <article className="card-interactive-thanks">
      <img
        className="card-interactive-thanks__image"
        src={imageThankYou}
        alt="Image Thank You"
      />
      <div className="card-interactive-thanks__selected">
        <p className="card-interactive-thanks__selected-text">
          You selected {number} out of 5
        </p>
      </div>

      <h1 className="card-interactive-thanks__title">Thank you!</h1>
      <p className="card-interactive-thanks__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </article>
  );
};

export default CardInteractiveThanks;
