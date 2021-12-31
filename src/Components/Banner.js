import React from "react";
import bannerImg from "../logos/banner.png";

const Banner = () => {
  return (
    <>
      <div className="background-banner position-relative">
        <img className="background-banner" alt="" src={bannerImg} />
        <div className="container">
          <div className="service-learn">
            <h2 className="service-heading text-white">
              SAFE CHILDREN UNSAFE FUTURE!
            </h2>
            <p className="text-white service-para mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, eveniet, dolorem fugit ab modi laboriosam ratione
              repudiandae maiores perferendis assumenda repellat nostrum
              cupiditate molestiae, quae hic placeat ad ea est? fugit ab modi
              laboriosam ratione repudiandae maiores perferendis assumenda
              repellat nostrum cupiditate molestiae, quae hic placeat ad ea est?
            </p>
            <div className="register-btn-div">
              <button
                type="button"
                className="banner-register-btn btn btn-danger text-white mr-2"
              >
                {" "}
                REGISTER NOW{" "}
              </button>

              <button
                type="button"
                className="banner-donate-btn btn btn-danger text-white ml-3"
              >
                {" "}
                DONATE NOW{" "}
              </button>
            </div>
          </div>
          <div className=" row banner-sec-3">
            <div className="col-sm-12 col-md-4 col-lg-4 banner-sub-1-sec">
              <h3 className="banner-sub-1-sec-heading">Donate Now</h3>
              <p className="banner-sec-1-para banner-sub-1-sec-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="banner-sub-1-sec-btn">
                <button
                  type="button"
                  className="banner-sub-1-sec-btn border border-white btn btn-danger text-white"
                >
                  {" "}
                  REGISTER NOW{" "}
                </button>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 banner-sub-2-sec">
              <h3 className="banner-sub-2-sec-heading">Start a chapter</h3>
              <p className="banner-sec-3-para banner-sub-2-sec-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="banner-sub-2-sec-btn-div">
                <button
                  type="button"
                  className="banner-sub-2-sec-btn border border-white btn btn-danger text-white"
                >
                  {" "}
                  REGISTER NOW{" "}
                </button>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 banner-sub-3-sec">
              <h3 className="banner-sub-3-sec-heading">Became a Volunteer</h3>
              <p className="banner-sec-3-para banner-sub-3-sec-para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="banner-sub-3-sec-btn-div">
                <button
                  type="button"
                  className="banner-sub-3-sec-btn border border-white btn btn-danger text-white"
                >
                  {" "}
                  REGISTER NOW{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
