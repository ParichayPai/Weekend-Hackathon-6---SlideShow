import React, { Component, useState } from "react";
import "../styles/App.css";
import Slide from "./slide";

const App = (props) => {
  const [slideNo, setSlideNo] = React.useState(0);
  const previousSlide = () => {
    setSlideNo(slideNo - 1);
  };

  const nextSlide = () => {
    setSlideNo(slideNo + 1);
  };

  const restartSlides = () => {
    setSlideNo(0);
  };

  return (
    <>
      <button
        data-testid="button-restart"
        onClick={() => restartSlides()}
        disabled={slideNo === 0}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        onClick={() => previousSlide()}
        disabled={slideNo === 0}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        onClick={() => nextSlide()}
        disabled={slideNo === 4}
      >
        Next
      </button>
      <Slide
        title={props.slides[slideNo].title}
        text={props.slides[slideNo].text}
      />
    </>
  );
};

export default App;
