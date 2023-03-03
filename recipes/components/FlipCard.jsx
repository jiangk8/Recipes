import { useState } from "react";
import cn from "classnames";
import { CardBody, CardTextFont } from "./styled-components";

function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    setShowBack(!showBack);
  }

  return (
    <div className='flip-card-outer' onClick={handleClick}>
      <div
        className={cn("flip-card-inner", {
          showBack,
        })}
      >
        <div className='card front'>
          <CardBody>
            <CardTextFont>{card.front}</CardTextFont>
          </CardBody>
        </div>
        <div className='card back'>
          <CardBody>
            <p className='card-text fs-1 fw-bold'>{card.back}</p>
          </CardBody>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
