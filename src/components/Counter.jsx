import React from "react";
import "/home/devdanda/dev-trening/react-Fcc/fcc-button-counter/src/styles/Counter.css"

const Counter = ( {clickNumber} ) => {
    return(
      <div className="counter">
      {clickNumber}
      </div>
    )
}

export default Counter