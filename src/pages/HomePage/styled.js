import styled from 'styled-components';
import bakti_1_img from '../../images/HomePageImg/bakti_1.png';
import layer4_1_img from '../../images/HomePageImg/layer4_1.png';
import layer4_2_img from '../../images/HomePageImg/Layer4_2.png';
import layer4_img from '../../images/HomePageImg/layer4.png';
import layer5_img from '../../images/HomePageImg/layer5.png';
import layer7_img from '../../images/HomePageImg/layer7.png';
import layer8_img from '../../images/HomePageImg/layer8.png';
import pink_sperm from '../../images/HomePageImg/pink_sperm.png';
import pink_sperm_1 from '../../images/HomePageImg/pink_sperm_1.png';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background: linear-gradient(
    135deg,
    #4fc7fd,
    #ffffff,
    #ffffff,
    #ffffff,
    #4fc7fd
  );
  overflow: hidden;
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

export const Bakti1 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${bakti_1_img});
  height: 100px;
  width: 100px;
  bottom: 150px;
  left: 15px;
  z-index: 0;
  animation: bounce1 6s linear infinite;

  @keyframes bounce1 {
    0% {
      bottom: 150px;
      left: 15px;
    }
    50% {
      bottom: 180px;
      left: 7px;
    }
    100% {
      bottom: 150px;
      left: 15px;
    }
  }
`;

export const Layer4_1 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer4_1_img});
  height: 60px;
  width: 60px;
  bottom: 70px;
  left: 330px;
`;

export const Layer4_2 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer4_2_img});
  height: 70px;
  width: 70px;
  top: 40px;
  right: 50px;
`;

export const Layer4 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer4_img});
  height: 140px;
  width: 290px;
  bottom: 0;
  right: 300px;
  animation: bounce4 6s linear infinite;

  @keyframes bounce4 {
    0% {
      height: 140px;
      width: 290px;
      bottom: 0;
    }
    50% {
      height: 180px;
      width: 350px;
      bottom: -30px;
    }
    100% {
      height: 140px;
      width: 290px;
      bottom: 0;
    }
  }
`;

export const Layer5 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer5_img});
  height: 150px;
  width: 150px;
  top: 50px;
  right: 270px;
  animation: bounce5 6s linear infinite;

  @keyframes bounce5 {
    0% {
      top: 50px;
      right: 270px;
    }
    50% {
      top: 120px;
      right: 200px;
    }
    100% {
      top: 50px;
      right: 270px;
    }
  }
`;

export const Layer7 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer7_img});
  height: 100px;
  width: 130px;
  top: 50px;
  left: 0;
`;

export const Layer8 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${layer8_img});
  height: 170px;
  width: 170px;
  top: 200px;
  right: 70px;
  z-index: 1;
  animation: bounce8 7s linear infinite, rotate8 25s linear infinite;

  @keyframes bounce8 {
    0% {
      top: 200px;
      right: 70px;
    }
    50% {
      top: 100px;
      right: 120px;
    }
    100% {
      top: 200px;
      right: 70px;
    }
  }
  @keyframes rotate8 {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;

export const PinkSperm = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${pink_sperm});
  height: 120px;
  width: 210px;
  bottom: 50px;
  left: 30px;
`;

export const PinkSperm1 = styled.div`
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;

  background-image: url(${pink_sperm_1});
  height: 200px;
  width: 450px;
  top: 150px;
  right: 200px;
  z-index: 1;
`;
