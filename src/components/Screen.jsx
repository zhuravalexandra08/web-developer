import React from "react";
import screenImg from "./../assets/img/screen-image.png";

const Screen = () => {
  return (
    <section className="screen">
      <div className="container">
        <div className="screen-content">
          <div className="left">
            <img src={screenImg} alt="" />
          </div>
          <div className="right">
            <h1>Дизайн и верстка</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam facilis impedit dolorem, blanditiis vel debitis
              perspiciatis? Alias, tempore odit accusantium omnis fugiat
              doloribus at similique unde aliquid eum consequuntur debitis!
            </p>
            <button>НАПИСАТЬ МНЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screen;
