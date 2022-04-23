import React from "react";
import "./QuoteCard.css";

const QuoteCard = ({ simpson }) => (
  <div>
    <figure className="QuoteCard">
      <img src={simpson.image} alt={simpson.character} />
      <figcaption>
        <blockquote>{simpson.quote}</blockquote>
        <cite>{simpson.character}</cite>
      </figcaption>
    </figure>
  </div>
);

export default QuoteCard;
