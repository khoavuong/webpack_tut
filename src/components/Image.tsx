import React from "react";
import image from "../assets/download.png";
import styled from "styled-components";

const BaseImage = styled.div`
  background-image: url(${image});
  width: 100px;
  height: 100px;
`;

const Image = () => {
  return (
    <div>
      <BaseImage />
    </div>
  );
};

export default Image;
