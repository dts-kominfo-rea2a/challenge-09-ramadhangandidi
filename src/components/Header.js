// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <h1>{props.headerText}</h1>
      <p>{props.headerInnerText}</p>
      <hr></hr>
    </>
  );
};

export default Header;
