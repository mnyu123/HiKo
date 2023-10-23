import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomProgressBar({ timeLeft , now , initialTime }) {
  return (
    <ProgressBar animated now={now} max={initialTime} label={`${now}초`} />
  );
}

export default CustomProgressBar;