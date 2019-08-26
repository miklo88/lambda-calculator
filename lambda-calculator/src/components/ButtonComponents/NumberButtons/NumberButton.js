import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number-btn" onClick={() => props.addNumber(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
      {/* <button onClick={() => props.add(props.text)} className="btn">{ props.text }</button> */}

      {props.text}
    
    </button>
  );
};

export default NumberButton