import React from "react";
import supportBanner1 from "../logos/supportstud1.png";
import handsImg from "../logos/hands.png";
import yellowCircle from "../logos/Ellipse 2.png";
import RedCircle from "../logos/Ellipse 3.png";
import rectangle from "../logos/Rectangle.png";

const SupportStudent = () => {
  return (
    <>
      <div className="Support-stud-banner-div">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="support-1-content-1 col-sm-12 col-md-4 col-lg-4">
              <div className="supportBanner1-div">
                <img
                  className="supportBanner1 rounded-circle"
                  alt=""
                  src={supportBanner1}
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-8 col-lg-8 supportBanner2-div">
              <div className="supportBanner2-content">
                <h4>Support The Students</h4>

                <div className="circle-logo">
                  <img className="" alt="" src={yellowCircle} />
                  <img className="" alt="" src={RedCircle} />
                  <img className="" alt="" src={rectangle} />
                </div>

                <p className="text-black">
                  School Supplies – Based on data from Texas Homeless Education
                  Office, we identify the schools with homeless children needing
                  most help. We then provide them the school supplies that they
                  distribute to the students. We have provided school supplies
                  to Austin, Manor, Del Valle ISDs and many other smaller
                  organizations that are connected directly to homeless
                  students.
                </p>
                <p className="text-black">
                  Vocational Training Scholarships – We provide broad guidelines
                  to the institutions and entrust them to select students. The
                  key points in the Guidelines are: The student must be living
                  below federally definednts and some other organizations who
                  work with students experiencing economic hardship
                </p>

                <div className="navbar-donate-div">
                  <button
                    type="button"
                    className="btn btn-danger navbar-donate-btn"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* support content 2 */}

        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8 supportBanner2-div supportBanner2-div-2">
              <div className="supportBanner2-content">
                <h4 className="text-white">Support The Students</h4>
                <div className="circle-logo">
                  <img className="" alt="" src={yellowCircle} />
                  <img className="" alt="" src={RedCircle} />
                  <img className="" alt="" src={rectangle} />
                </div>
                <p className="text-white">
                  School Supplies – Based on data from Texas Homeless Education
                  Office, we identify the schools with homeless children needing
                  most help. We then provide them the school supplies that they
                  distribute to the students. We have provided school supplies
                  to Austin, Manor, Del Valle ISDs and many other smaller
                  organizations that are connected directly to homeless
                  students.
                </p>
                <p className="text-white">
                  Vocational Training Scholarships – We provide broad guidelines
                  to the institutions and entrust them to select students. The
                  key points in the Guidelines are: The student must be living
                  below federally definednts and some other organizations who
                  work with students experiencing economic hardship
                </p>

                <div className="navbar-donate-div">
                  <button
                    type="button"
                    className="btn btn-danger navbar-donate-btn"
                  >
                    Donate Now{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="support-1-content-1 col-sm-12 col-md-4 col-lg-4">
              <div className="supportBanner1-div">
                <img
                  className="supportBanner1 rounded-circle"
                  alt=""
                  src={handsImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportStudent;
