import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="top-navbar navbar d-flex flex-wrap">
        <div className="container">
          <div className="row justify-content-between w-100">
            {/* <!------- d-flex justify-content-around --> */}

            <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
              <a className="navbar-brand became-volunteer text-white" href="/" > Became a volunteer</a>
              
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div className="d-flex telephone justify-content-center">
                <div className="pr-2  d-flex align-items-center">
                <i class="fas fa-phone"></i>
                  <h6> +125 445-485-5242</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 d-flex pl-0">
              <div className="d-flex align-items-center justify-content-end">
                <ul className="social list-unstyled d-flex text-center ">
                  <li className="social-icon rounded-circle ">
                    <a href="/">
                    <i class="fas fa-envelope fa-icon"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a  href="/">
                    <i class="fab fa-facebook fa-icon"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a href="/">
                    <i class="fab fa-twitter fa-icon"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a href="/">
                    <i class="fab fa-youtube fa-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;