import React from "react";
//import donationBanner from '../logos/donation-Img.png'
const Donation = () => {
  return (
    <>
      <div className="donation-section ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 donationBanner-div">
              <div className="donationBanner">
                {/* <img className="donationBanner" src={donationBanner} alt=""/> */}
                <h4 className="text-white">We Need Donations</h4>
                <p className="text-white mt-3 mb-3">
                  Alienum phaedrum torquatos nec eu, vis detrax culis ex, nihis
                  in mei.
                </p>
              </div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <p className="text-white mt-0 mb-0">Raised so far</p>
                  <h5 className="text-warning donation-font-weight mt-0">
                    $1,200
                  </h5>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-right">
                  <p className="text-white mt-0 mb-0">Our Goal</p>
                  <h5 className="text-warning donation-font-weight mt-0 ">
                    $5,000
                  </h5>
                </div>
              </div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            {/* content part 2 */}
            <div className="col-sm-12 col-md-6 col-lg-6 content-part-2">
              <p className="content-top-para">Please Select</p>
              <div className="row">
                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                  <p className="content-part-2-heading">AMOUNT TO DONATE</p>
                  <p className="content-part-2-para">
                    All donations are tax deductable.
                  </p>
                </div>
                <div className="col-4 col-sm-4 col-md-4 col-lg-4 text-center">
                  <div className=" dollar-section">
                   
                    <p className="dollar-sign text-white">$</p>
                    <p className="dollar-sign-100">100</p>
                  
                    {/* <div className="col-sm-6 col-md-5 col-lg-5">
                      <p className="dollar-sign text-white">$</p>
                    </div>
                    <div className="col-sm-6 col-md-7 col-lg-7 dollar-sign-100-div">
                      <p className="dollar-sign-100">100</p>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* content part 3 */} 
              <div className="content-part-3-div text-center">
                <ul className="list-unstyled list-inline ul-content-3">
                  <li class="list-inline-item content-part-3 li-content-3">$10</li>
                  <li class="list-inline-item content-part-3 li-content-3">$20</li>
                  <li class="list-inline-item content-part-3 li-content-3">$50</li>
                  <li class="list-inline-item content-part-3 li-content-3">$100</li>
                  <li class="list-inline-item content-part-3 li-content-3">Custom Amount</li>
                </ul>
              </div>
              {/* content part 4 */}
              <div className="row text-center donation-button-div mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12 donation-button-row">
                  <button type="button" class="btn btn-primary donation-button">
                    DONATE NOW
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

export default Donation;
