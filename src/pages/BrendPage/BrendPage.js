import React from 'react';
import { useState } from 'react';
import './styled.js';
import Header from '../../Components/Header/Header';

import Modal from '../../Components/BrendModal/Modal';
import {
  BrendMain,
  Onpoint,
  Bubble1,
  Bottle,
  Bubble2,
  Bubble3,
  Bubble4,
  Bubble5,
  Bubble6,
  Bubble7,
  Bubble8,
  MoreButton,
  RowBlock,
  KeyMsg,
} from './styled';

function BrendPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrendMain>
      <Header />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <KeyMsg>
        <p className='p1'>Ключевое сообщение</p>
        <p className='p2'>
          Brend<span>XY</span>
        </p>
      </KeyMsg>
      <RowBlock>
        <div className='div1'>
          <div className='icon2'></div>
          <p>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vesitibulum
            lorem sed risus ultricies
          </p>
        </div>
        <div className='div2'>
          <div className='icon1'></div>
          <p>
            A arcu <br />
            cursus vitae
          </p>
          <MoreButton onClick={() => setIsOpen(!isOpen)}></MoreButton>
        </div>
      </RowBlock>
      <Bottle></Bottle>

      <Bubble1></Bubble1>
      <Bubble2></Bubble2>
      <Bubble3></Bubble3>
      <Bubble4></Bubble4>
      <Bubble5></Bubble5>
      <Bubble6></Bubble6>
      <Bubble7></Bubble7>
      <Bubble8></Bubble8>
      <Onpoint>
        <p>onpoint</p>
      </Onpoint>
    </BrendMain>
  );
}

export default BrendPage;
