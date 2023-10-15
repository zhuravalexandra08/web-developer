import React from "react";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="container">
        <div className="feedback-content">
          <h2>Хотите веб-сайт?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Autem repudiandae
            tenetur quam reprehenderit obcaecati labore cupiditate excepturi
            provident odio fugit sequi, facilis laborum inventore eligendi a,
            debitis pariatur iste! Aspernatur.
          </p>
          <form action="#">
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Ваш e-mail" />
            <textarea placeholder="Ваше сообщение"></textarea>
            <button>ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
