import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const Carosel = () => {
  let styles = {
    itemsToShow: 3,
  };

  return (
    //@ts-ignore
    <Carousel {...styles}>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </Carousel>
  );
};

export default Carosel;
