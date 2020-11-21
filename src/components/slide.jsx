import React from "react";

export default function Slide(props) {
  return (
    <>
      <h1 data-testid="title">{props.title}</h1>
      <p data-testid="text">{props.text}</p>
    </>
  );
}
