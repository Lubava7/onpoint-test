import React from 'react';
import './styled.js';

import HomeTitle from '../../Components/HomeTitle/HomeTitle';
import Header from '../../Components/Header/Header';
import {
  MainContainer,
  Bakti1,
  Layer4,
  Layer4_1,
  Layer4_2,
  Layer5,
  Layer7,
  Layer8,
  PinkSperm,
  PinkSperm1,
  Onpoint,
} from './styled';

function HomePage() {
  return (
    <MainContainer>
      <Header />
      <div>
        <HomeTitle />
        <Bakti1></Bakti1>
        <Layer4_1></Layer4_1>
        <Layer4_2></Layer4_2>
        <Layer4></Layer4>
        <Layer5></Layer5>
        <Layer7></Layer7>
        <Layer8></Layer8>
        <PinkSperm1></PinkSperm1>
        <PinkSperm></PinkSperm>
      </div>
      <Onpoint>
        <p>onpoint</p>
      </Onpoint>
    </MainContainer>
  );
}

export default HomePage;
