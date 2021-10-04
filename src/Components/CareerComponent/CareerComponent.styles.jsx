import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #a9a9a9;
  padding: 50px 0;
  @media screen and (max-width: 512px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const CareerImg = styled.img`
  width: 300px;
  height: 200px;
  margin-right: 30px;

  @media screen and (max-width: 1024px) {
    width: 230px;
    height: 150px;
  }

  @media screen and (max-width: 512px) {
    width: 100%;
    height: 200px;
    margin: 0px 0px 20px 0;
  }
`;

export const CareerDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    margin: 0;
    color: #474747;

    @media screen and (max-width: 512px) {
      margin: 5px 0;
    }
  }
`;

export const CareerTitle = styled.p`
  font-size: 20px;
  color: black !important;
`;
