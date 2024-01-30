import React from "react";
import "./Events.css";

const Events = () => (
  <div className="container mt-14">
    <h1 className="font-bold text-4xl text-center">
      Events <span className="text-customGreen">And</span>{" "}
      <span>Activities</span>
    </h1>
    <p className="text-center">Save earth by reusing, recycling waste</p>
  </div>
);

const Slider = () => (
  <section id="slider">
    {/* Start Slider Checked */}
    <input type="radio" name="slider" id="slide-1-radio" checked />
    <input type="radio" name="slider" id="slide-2-radio" />
    <input type="radio" name="slider" id="slide-3-radio" />
    {/* End Slider Checked */}

    {/* Start Slides */}
    <div className="slides">
      <div className="slide">
        <a href="#">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"
            alt="slide-1"
          />
        </a>
      </div>
      <div className="slide">
        <a href="#">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg"
            alt="slide-1"
          />
        </a>
      </div>
      <div className="slide">
        <a href="#">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg"
            alt="slide-1"
          />
        </a>
      </div>
    </div>
    {/* End Slides */}

    {/* Start Slider Control */}
    {/* Start Previous Arrow */}
    <div className="prev-arrow arrow">
      <label htmlFor="slide-1-radio" id="prev-1-arrow">
        <i className="fa fa-arrow-left"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"
            alt="slide-1-thumb"
          />
        </span>
      </label>
      <label htmlFor="slide-2-radio" id="prev-2-arrow">
        <i className="fa fa-arrow-left"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg"
            alt="slide-2-thumb"
          />
        </span>
      </label>
      <label htmlFor="slide-3-radio" id="prev-3-arrow">
        <i className="fa fa-arrow-left"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg"
            alt="slide-3-thumb"
          />
        </span>
      </label>
    </div>
    {/* End Previous Arrow */}

    {/* Start Next Arrow */}
    <div className="next-arrow arrow">
      <label htmlFor="slide-1-radio" id="next-1-arrow">
        <i className="fa fa-arrow-right"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499938951/banner-2_gl3fir.jpg"
            alt="slide-1-thumb"
          />
        </span>
      </label>
      <label htmlFor="slide-2-radio" id="next-2-arrow">
        <i className="fa fa-arrow-right"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939039/banner-4_gdy1qw.jpg"
            alt="slide-2-thumb"
          />
        </span>
      </label>
      <label htmlFor="slide-3-radio" id="next-3-arrow">
        <i className="fa fa-arrow-right"></i>
        <span className="thumb">
          <img
            src="http://res.cloudinary.com/hurricane10/image/upload/v1499939087/banner-1_rlnwku.jpg"
            alt="slide-3-thumb"
          />
        </span>
      </label>
    </div>
    {/* End Next Arrow */}

    {/* End Slider Control */}
  </section>
);

const App = () => (
  <div>
    <Events />
    <Slider />
    {/* Add other components or content here */}
  </div>
);

export default App;
