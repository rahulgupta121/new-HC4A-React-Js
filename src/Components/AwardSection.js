import React from "react";
import presidentAward from "../logos/Presidential Award 1.png";
import awardImg1 from "../logos/award-1-300x249 1.png";
import awardImg2 from "../logos/award-2-300x249 1.png";
import awardImg3 from "../logos/award-3-300x249 1.png";
import awardImg4 from "../logos/award-4-300x249 1.png";
import awardImg5 from "../logos/award-5-300x249 1.png";
import awardImg6 from "../logos/award-6-300x249 1.png";
const AwardSection = () => {
  return (
    <>
      <div className="award-section-div">
        <div className="container award-section">
          <h3 className="text-center award-head">AWARDS</h3>
          <div className="row mb-5">
            <div className="award-main-card border border-dark col-sm-12 col-md-4 col-lg-4">
              <div className="">
                <div className="card-background card">
                  <div className="card-background-padding">
                    <img
                      src={presidentAward}
                      className="president-award card-img-top"
                      alt="..."
                    />
                    <div className="card-inner card-body">
                      <h5 className="card-title pt-2 text-white">
                        The Award – Community Appreciation
                      </h5>
                      <p className="text-white award-para">
                        In 2017, US President Donald Trump honored founder
                        Harish Kotecha President’s “Lifetime Achievement Award”.
                        The award reads “With grateful President’s Lifetime
                        Achievement Award for their lifelong commitment to
                        building a stronger nation through volunteer service.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="justify-content-center text-center mt-4 col-12 .col-sm-12 .col-lg-8 col-md-8">
              <div class="award-section-1 row ">
                <div class="award-logo-div  .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg1} alt="" />
                  </div>
                </div>
                <div class="award-logo-div .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg2} alt="" />
                  </div>
                </div>
                <div class="award-logo-div .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg3} alt="" />
                  </div>
                </div>
              </div>
              <div class="award-section-2 row">
                <div class="award-logo-div .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg4} alt="" />
                  </div>
                </div>
                <div class="award-logo-div .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg5} alt="" />
                  </div>
                </div>
                <div class="award-logo-div .col-sm-12 .col-lg-4 col-md-4">
                  <div class="sub-award-border">
                    <img class="award-logo" src={awardImg6} alt="" />
                  </div>
                </div>
              </div>
              <div class="student-view-all-awards-btn">
                <button type="button" class="student-view-all-awards btn btn-danger text-white">
                  {" "}
                  VIEW ALL AWARDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AwardSection;
