import styled from 'styled-components';
import bg from '../../images/TextPage/bg.png';
import Layer3_6_img from '../../images/TextPage/Layer3_6.png';
import Layer3_2_img from '../../images/TextPage/Layer3_2.png';

export const SecondPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Msg = styled.div`
  position: absolute;
  width: 70%;
  top: 70px;

  p {
    font-size: 26px;
    text-transform: uppercase;
    font-family: 'Gilroy-Light', sans-serif;
  }
`;

export const Onpoint = styled.div`
  position: absolute;
  z-index: 3;
  width: 90%;
  bottom: 10px;
  left: 100px;

  p {
    font-size: 15px;
  }
`;

export const TextContainer = styled.div`
  margin: 0px 0 0 0;
  border: 1px solid rgb(255, 255, 255);
  background-color: white;
  border-radius: 40px;
  width: 65%;
  height: 400px;
  position: absolute;
  z-index: 2;
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Gilroy-Light', sans-serif;

  p {
    line-height: 33px;
    text-align: end;
  }
`;

export const TextDiv = styled.div`
  width: 80%;
  margin: -20px 100px 0 0;
`;

export const Div = styled.div`
  padding: 20px 0 20px 20px;
  width: 110%;
  height: 320px;
  scroll-behavior: smooth;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background: black;
    width: 20px;
    border-left: 7px solid white;
    border-right: 7px solid white;
  }

  &::-webkit-scrollbar-track {
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb {
    background: #cf578d;
    border-radius: 20px;
    box-shadow: inset 4px 4px 6px rgba(2, 2, 2, 0.5);
  }
`;

export const Layer3_6 = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  background-image: url(${Layer3_6_img});
  width: 600px;
  height: 300px;
  animation: appear 1s linear forwards;

  @keyframes appear {
    0% {
      opacity: 0;
      top: 70px;
      right: -40px;
    }
    100% {
      opacity: 1;
      top: 30px;
      right: 20px;
    }
  }
`;

export const Layer3_2 = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  background-image: url(${Layer3_2_img});
  width: 400px;
  height: 200px;
  animation: appear1 1s linear forwards;

  @keyframes appear1 {
    0% {
      opacity: 0;
      top: 60px;
      right: -20px;
    }
    100% {
      opacity: 1;
      top: 30px;
      right: 20px;
    }
  }
`;

export const Layer3_2_1 = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  background-image: url(${Layer3_2_img});
  width: 200px;
  height: 150px;
  animation: appear2 1s linear forwards;

  @keyframes appear2 {
    0% {
      opacity: 0;
      top: 80px;
      right: 20px;
    }
    100% {
      opacity: 1;
      top: 40px;
      right: 80px;
    }
  }
`;

export const Layer3_2_2 = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  background-image: url(${Layer3_2_img});
  background-size: 400px !important;
  width: 150px;
  height: 200px;
  animation: appear3 1s linear forwards;

  @keyframes appear3 {
    0% {
      opacity: 0;
      right: -100px;
      bottom: 150px;
    }
    100% {
      opacity: 1;
      right: 0;
      bottom: 200px;
    }
  }
`;

export const Layer3_2_3 = styled.div`
  background-size: 100%;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;

  background-image: url(${Layer3_2_img});
  width: 150px;
  height: 150px;
  animation: appear4 1s linear forwards;

  @keyframes appear4 {
    0% {
      opacity: 0;
      bottom: 50px;
      right: -100px;
    }
    100% {
      opacity: 1;
      bottom: 100px;
      right: 0px;
    }
  }
`;
