import React from "react";
import Icon1 from "./../assets/img/project.png";
import Icon2 from './../assets/img/deadline-img.png';
import Icon3 from './../assets/img/screen-image.png';
import Icon4 from './../assets/img/agreement-img.png';


const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-container">
          <div className="feature">
            <img src={Icon1} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
          <div className="feature">
            <img src={Icon1} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
          <div className="feature">
            <img src={Icon1} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
          <div className="feature">
            <img src={Icon2} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
          <div className="feature">
            <img src={Icon3} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
          <div className="feature">
            <img src={Icon4} alt="" />
            <div className="text">
              <h3>40+</h3>
              <span>проектов</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
