import React from "react";
import img from "./yourname.jpg";
import {
  MainDiv,
  CareerImg,
  CareerDetail,
  CareerTitle,
} from "./CareerComponent.styles";

export const CareerComponent = ({ data }) => {
  return (
    <MainDiv>
      <CareerImg src={img} alt="career" />
      <CareerDetail>
        <p>{data.type}</p>
        <CareerTitle>{data.title} </CareerTitle>
        <p>{data.workingHour}</p>
        <p>{data.postDate}</p>
      </CareerDetail>
    </MainDiv>
  );
};
