import React from "react";
import row1Img1 from "../logos/artical-img1.png";
const Artical = () => {
  return (
    <>
      <div className="artical-mail-div">
        <h4 className="text-center mt-5 artical-heading">NEW ARTICALS</h4>
        <p className="text-center artical-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img src={row1Img1} alt="" />
              <div className="">
                <h6>Houston Community College Scholarship Award</h6>
                <p>
                  On August 7th, at the Houston Community College Foundation
                  Board of Trustees meeting, HC4A Houston was recognized for
                  $10,000 award for 10 $1,000 Scholarships! This was the fist
                  award since...{" "}
                </p>
                <a href="/">learn more</a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">

            </div>
            <div className="col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artical;
