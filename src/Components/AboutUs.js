import React from "react";
// import bgbanner from '../logos/crpn-bg-help-the-poors 1.png'
const AboutUs = () => {
  return (
    <>
      <div className="aboutus-banner-div">
        <div className="container">
          {/* <img className="aboutus-banner-img" alt="" src={bgbanner} /> */}
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="row about-sec-col-sub-1">
                <div className="about-sec-para-sub-1 col-sm-6 col-md-6 col-lg-6">
                  <div className="about-content-sub-1">
                    <h6 className="about-sec-head-sub-1">98%</h6>
                    <p>Projects Completed</p>
                  </div>
                  <div className="about-sec-para-sub-2">
                    <h6 className="about-sec-head-sub-1"> 10 K</h6>
                    <p>Satisfied Clients</p>
                  </div>
                </div>

                <div className="about-sec-col-sub-2 col-sm-6 col-md-6 col-lg-6">
                  <div className="about-content-sub-2-1">
                    <h6 className="about-sec-head-sub-2-1">961</h6>
                    <p>Alone Volunteers</p>
                  </div>
                  <div className="about-content-sub-2-2">
                    <div className="about-content-sub-2-3">
                      <h6 className="about-sec-head-sub-2-2">45</h6>
                      <p>Awards Winning ORG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="about-sec-para-2">
                <p className=""> We Can Help The Poors</p>
                <h6 className="about-sec-heading-2">
                  DONATE FOR POOR KEEP THE HUMANITY
                </h6>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="about-us-btn-div">
                  <button
                    type="button"
                    className="about-us-btn btn btn-danger text-white"
                  >
                    {" "}
                    Learn More{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
