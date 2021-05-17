import React from "react";

const Congratulations = ({ message }) => {
  return message ? <h2>Congratulations, {message}</h2> : null;
};

export default Congratulations;
