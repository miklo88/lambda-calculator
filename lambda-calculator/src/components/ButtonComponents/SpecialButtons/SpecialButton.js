import React from "react";

const SpecialButton = (props) => {
  console.log("special", props);
  return (
    <button className="special-btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.text}
    </button>
  );
};

export default SpecialButton;