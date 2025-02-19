import React from 'react';
import './styled.js';
// import { useState, useRef, useEffect } from "react";

import TextContent from '../../Components/TextContent/TextContent';
import Header from '../../Components/Header/Header';

import {
  SecondPage,
  TextContainer,
  TextDiv,
  Msg,
  Onpoint,
  Layer3_2,
  Layer3_2_1,
  Layer3_2_2,
  Layer3_2_3,
  Layer3_6,
  Div,
} from './styled';

function TextPage() {
  return (
    <SecondPage>
      <Header />
      <Msg>
        <p>
          Текст
          <br /> Сообщения
        </p>
      </Msg>
      <TextContainer>
        <Div>
          <TextDiv>
            <p>
              <span>Lorem ipsum dolor sit amet,</span> consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <TextContent />
            <TextContent />
            <TextContent />
          </TextDiv>
        </Div>
      </TextContainer>
      <Layer3_6></Layer3_6>
      <Layer3_2></Layer3_2>
      <Layer3_2_1></Layer3_2_1>
      <Layer3_2_2></Layer3_2_2>
      <Layer3_2_3></Layer3_2_3>
      <Onpoint>
        <p>onpoint</p>
      </Onpoint>
    </SecondPage>
  );
}

export default TextPage;
