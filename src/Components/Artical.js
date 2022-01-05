import React from "react";
import row1Img1 from "../logos/new-artical-1-1.png";
import row2Img2 from "../logos/new-artical-2-2.png";
import row3Img2 from "../logos/new-artical-3-2.png";
const Artical = () => {
  return (
    <>
      <div className="artical-mail-div">
        <h4 className="text-center mt-5 artical-heading">NEW ARTICALS</h4>
        <p className="text-center artical-para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="container mb-4">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              {/* row 1 section 1 */}
              <div className="row">
                <div className=" col-sm-12 col-md-12 col-lg-12">
                  <div className="for-box-shadow">
                    <img className="row1Img1" src={row1Img1} alt="" />
                    <div className="row1Content">
                      <h6 className="row1head1 pt-4 pb-3">
                        Houston Community College Scholarship Award
                      </h6>
                      <p className="row1para1">
                        On August 7th, at the Houston Community College
                        Foundation Board of Trustees meeting, HC4A Houston was
                        recognized for $10,000 award for 10 $1,000 Scholarships!
                        This was the fist award since...{" "}
                      </p>
                      <a className="anchor-artical" href="/">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 col-sm-12 col-md-12 col-lg-12">
                  <div className="row1Img2">
                    <h6 className="ongoingContent text-white">
                      Ongoing Donations
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="row">
                {/* row 2 section 1 */}
                <div className="row2Img1  col-sm-12 col-md-12 col-lg-12">
                  <div className="row2Sec1-div ">
                    <h6 className="row2head1 ">
                      Make Life Easier for Ebola & Alzheimer
                    </h6>
                    <p className="row2para1">
                      {" "}
                      On August 7th, at the Houston Community College Foundation
                      Board of Trustees meeting, HC4A Houston was recognized f
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="for-box-shadow mt-4">
                    <img className="row2Img2" src={row2Img2} alt="" />
                    <div className="row2Content">
                      <h6 className="row2head2 pt-4 pb-3">
                        Blood donation activities are held annually
                      </h6>
                      <p className="row2para2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi...
                      </p>
                      <a className="anchor-artical" href="/">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row2Img3">
                    <p className="row2para3">
                      Houston Community College Scholarship Award
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              {/* row 3 */}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="row3Img1 for-box-shadow">
                    <p className="row3para1">Results Achieved</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="for-box-shadow mt-4">
                    <img className="row3Img2" src={row3Img2} alt="" />
                    <div className="row3Content">
                      <h6 className="row3head2 pt-4 pb-3">
                        Helping old people in difficult circumstances
                      </h6>
                      <p className="row3para2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud ...
                      </p>
                      <a className="anchor-artical" href="/">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artical;
