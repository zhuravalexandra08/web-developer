import React from 'react'
import Icon from './../assets/img/1421822696til-shvaiger-interesne-fakt-iz-jizni 1.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="left">
            <h2>Верстальщик</h2>
            <h1>Тиль Швайгер</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              repellendus facilis recusandae eum dolorum. Repellendus iste
              numquam quae, delectus neque temporibus ab aut dolores saepe sed
              porro similique error ipsum.
            </p>
            <button>НАПИСАТЬ МНЕ</button>
          </div>
          <div className="right">
            <img
              src={Icon}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero