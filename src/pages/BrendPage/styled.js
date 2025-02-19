import styled from 'styled-components';
import bg1 from '../../images/BrendPage/bg1.png';
import bottle from '../../images/BrendPage/bottle.png';
import icon2 from '../../images/BrendPage/icon2.png';
import icon1 from '../../images/BrendPage/icon1.png';
import btn1 from '../../images/BrendPage/btn1.png';
import bubble1_img from '../../images/BrendPage/bubble1.png';
import bubble2_img from '../../images/BrendPage/bubble2.png';
import bubble3_img from '../../images/BrendPage/bubble3.png';
import bubble4_img from '../../images/BrendPage/bubble4.png';
import bubble5_img from '../../images/BrendPage/bubble5.png';
import bubble6_img from '../../images/BrendPage/bubble6.png';
import bubble7_img from '../../images/BrendPage/bubble7.png';
import bubble8_img from '../../images/BrendPage/bubble8.png';

export const BrendMain = styled.div`
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Bottle = styled.div`
  background-image: url(${bottle});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 300px;
  height: 670px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 30px;
`;

export const KeyMsg = styled.div`
  margin: 100px 0 0 150px;
  width: 500px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-family: 'Gilroy-Light', sans-serif;

  .p1 {
    margin: 0;
    font-size: 23px;
    line-height: 30px;
  }
  .p2 {
    margin: 0;
    font-size: 90px;
    font-weight: 300;
    line-height: 100px;
    letter-spacing: 10px;
  }
`;

export const RowBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 0 0 0 250px;
  height: 400px;

  .div1,
  .div2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 49%;
    height: 100%;
    margin: 20px 0 0 0;

    .icon2 {
      background-image: url(${icon2});
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100px;
      width: 100px;
    }
    .icon1 {
      background-image: url(${icon1});
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100px;
      width: 100px;
    }
  }

  p {
    width: 70%;
  }
`;

export const MoreButton = styled.div`
  background-image: url(${btn1});
  width: 250px;
  height: 75px;
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 50px 0 0 -30px;
`;

export const Bubble = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
`;

export const Bubble1 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble1_img});
  width: 65px;
  height: 65px;
  z-index: 1;
  top: 210px;
  left: 80px;
  animation: bubble1 5s linear infinite;

  @keyframes bubble1 {
    0% {
      top: 220px;
      left: 110px;
    }
    50% {
      top: 210px;
      left: 80px;
    }
    100% {
      top: 220px;
      left: 110px;
    }
  }
`;

export const Bubble2 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble2_img});
  width: 150px;
  height: 150px;
  z-index: 1;
  top: 300px;
  left: 170px;
  animation: bubble2 5s linear infinite;

  @keyframes bubble2 {
    0% {
      width: 180px;
      height: 180px;
    }
    50% {
      width: 150px;
      height: 150px;
    }
    100% {
      width: 180px;
      height: 180px;
    }
  }
`;

export const Bubble3 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble3_img});
  width: 80px;
  height: 80px;
  z-index: 1;
  top: 70px;
  left: 190px;
  animation: bubble3 5s linear infinite;

  @keyframes bubble3 {
    0% {
      top: 50px;
      left: 220px;
    }
    50% {
      top: 70px;
      left: 190px;
    }
    100% {
      top: 50px;
      left: 220px;
    }
  }
`;

export const Bubble4 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble4_img});
  width: 60px;
  height: 60px;
  z-index: 2;
  top: 450px;
  left: 5px;
  animation: bubble4 3s linear infinite;

  @keyframes bubble4 {
    0% {
      top: 450px;
      left: 20px;
    }
    50% {
      top: 450px;
      left: 5px;
    }
    100% {
      top: 450px;
      left: 20px;
    }
  }
`;

export const Bubble5 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble5_img});
  width: 90px;
  height: 90px;
  z-index: 1;
  bottom: 100px;
  left: 250px;
  animation: bubble5 3s linear infinite;

  @keyframes bubble5 {
    0% {
      bottom: 80px;
      left: 270px;
    }
    50% {
      bottom: 100px;
      left: 250px;
    }
    100% {
      bottom: 80px;
      left: 270px;
    }
  }
`;

export const Bubble6 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble6_img});
  width: 200px;
  height: 80px;
  z-index: 2;
  bottom: 0;
  left: 160px;
  animation: bubble6 4s linear infinite;

  @keyframes bubble6 {
    0% {
      width: 220px;
      height: 100px;
    }
    50% {
      width: 200px;
      height: 80px;
    }
    100% {
      width: 220px;
      height: 100px;
    }
  }
`;

export const Bubble7 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble7_img});
  width: 100px;
  height: 100px;
  z-index: 2;
  top: 140px;
  left: 180px;
  animation: bubble7 5s linear infinite;

  @keyframes bubble7 {
    0% {
      top: 140px;
      left: 180px;
    }
    50% {
      top: 170px;
      left: 220px;
    }
    100% {
      top: 140px;
      left: 180px;
    }
  }
`;

export const Bubble8 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bubble8_img});
  width: 90px;
  height: 90px;
  z-index: 2;
  bottom: 120px;
  left: 20px;
  animation: bubble8 5s linear infinite;

  @keyframes bubble8 {
    0% {
      width: 90px;
      height: 90px;
    }
    50% {
      width: 120px;
      height: 120px;
    }
    100% {
      width: 90px;
      height: 90px;
    }
  }
`;
