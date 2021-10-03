import styled from "styled-components";

export const CareerDiv = styled.div`
  margin: 40px 15%;

  @media screen and (max-width: 1024px) {
    margin: 20px 5%;
  }
  @media screen and (max-width: 512px) {
    margin: 20px 10%;
  }
`;

export const HeaderDiv = styled.div`
  height: 50vh;
  width: 100%;
  margin-bottom: 50px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    height: 30vh;
  }
`;

export const HeaderText = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: white;

  p {
    font-size: 34px;
    text-align: center;
    margin: 0 15%;
  }
  @media screen and (max-width: 1440px) {
    p {
      font-size: 28px;
      margin: 0 10%;
    }
  }
  @media screen and (max-width: 512px) {
    p {
      font-size: 18px;
      margin: 0 7%;
    }
  }
`;
