import React from "react";
import "./Modal.css";

import { useState } from "react";
import { Icon } from "@iconify/react";

function Modal({ isOpen, setIsOpen }) {
  const [isColor, setIsColor] = useState(false);

  //   function leftM() {
  //     setIsColor(!false);
  //   }
  //   function rightM() {
  //     setIsColor(!false);
  //   }
  if (!isOpen) return null;
  if (isOpen) {
    return (
      <div style={{ opacity: 1 }} className="back-layer">
        <div style={{ opacity: 1 }} className="modal-wrapper">
          <section className="header-modal">
            <p className="p0">Преимущества</p>
            <p className="p">
              Brend<span>XY</span>
            </p>
          </section>
          <div className="inner-carousel">
            <div className="inner-scroll">
              <div className="first-block item">
                <div>
                  <span>01</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div>
                  <span>02</span>
                  <p>Faucibus pulvinar elementum integer enim</p>
                </div>
                <div>
                  <span>03</span>
                  <p>Faucibus pulvinar elementum integer enim</p>
                </div>
              </div>
              <div
                className={
                  isColor ? "second-block-1 item" : "second-block item"
                }
              >
                <div>
                  <span>04</span>
                  <p>Faucibus pulvinar elementum integer enim</p>
                </div>
                <div>
                  <span>05</span>
                  <p>Faucibus pulvinar elementum integer enim</p>
                </div>
                <div>
                  <span>06</span>
                  <p>Faucibus pulvinar elementum integer enim</p>
                </div>
              </div>
            </div>
            <div className="btns">
              <button onClick={() => setIsColor(!false)}>
                <Icon icon="ep:arrow-right" rotate={2} />
              </button>
              {isColor ? (
                <div className="row-btns">
                  <div className="circle circle-active-l"></div>
                  <div className="circle circle-active-r"></div>
                </div>
              ) : (
                <div className="row-btns">
                  <div className="circle "></div>
                  <div className="circle "></div>
                </div>
              )}
              <button onClick={() => setIsColor(!false)}>
                <Icon icon="ep:arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
