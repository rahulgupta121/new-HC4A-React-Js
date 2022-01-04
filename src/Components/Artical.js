import React from "react";
import row1Img1 from "../logos/new-artical-1-1.png";
import row1Img2 from '../logos/new-artical-1-2.png'
//import row2Img1 from '../logos/new-artical-2-1.png'
import row2Img2 from '../logos/new-artical-2-2.png'
import row2Img3 from '../logos/new-artical-2-3.png'
import row3Img1 from '../logos/new-artical-3-1.png'
import row3Img2 from '../logos/new-artical-3-2.png'
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
      {/* row 1 section 1 */}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <img className="row1Img1" src={ row1Img1 } alt=""/>
                  <h6>Houston Community College Scholarship Award</h6>
                  <p>
                  On August 7th, at the Houston Community College Foundation
                  Board of Trustees meeting, HC4A Houston was recognized for
                  $10,000 award for 10 $1,000 Scholarships! This was the fist
                  award since...{" "}
                  </p>
                  <a href="/">learn more</a>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <img className="row1Img2 position-relative" src={row1Img2} alt=""/>
                    <h6 className="ongoingContent text-white">Ongoing Donations</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="row">
                {/* row 2 section 1 */}
                <div className="row2Img1 col-sm-12 col-md-12 col-lg-12">
                   
                  <div className="row2Sec1-div ">
                  <h6>Make Life Easier for Ebola & Alzheimer</h6>
                  <p> On August 7th, at the Houston Community College Foundation Board of Trustees meeting, HC4A Houston was recognized f</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <img className="row2Img2" src={ row2Img2 } alt=""/>
                <h6>Blood donation activities are held annually</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi...</p>
                  <a href="/">learn more</a>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <img className="row2Img3" src={row2Img3 } alt=""/>
                  <p>Houston Community College Scholarship Award</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              {/* row 3 */}
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <img className="row3Img1" src={row3Img1 } alt=""/>
                    <p>Results Achieved</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <img className="row3Img2" src={row3Img2 } alt=""/>
                    <h6>Helping old people in difficult circumstances</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud ...
                        </p>
                        <a href="/">learn more</a>
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
