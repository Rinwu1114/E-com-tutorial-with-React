import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// const Rating = ({ rating }) => {
//   return (
//     <div className="book__ratings">
//       {new Array(Math.floor(rating)).fill(0).map((_, index) => (
//         <FontAwesomeIcon icon="star" key={index} />
//       ))}
//       {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />}
//     </div>
//   );
// };


const Rating = ({ rating, maxStars = 5 }) => {

  return (

    <div className="book__ratings">

      {Array.from({ length: maxStars }, (_, i) => {

        if (i < Math.floor(rating)) {

          return <FontAwesomeIcon icon="star" key={i} />;

        } else if (i < rating) {

          return <FontAwesomeIcon icon="star-half-alt" key={i} />;

        } else {

          return <FontAwesomeIcon icon={["far", "star"]} key={i} />;

        }

      })}

    </div>

  );

};

export default Rating;

