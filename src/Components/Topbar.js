import React from "react";

const Topbar = () => {
  return (
    <div>
      <div className="top-navbar navbar d-flex flex-wrap">
        <div className="container ">
          <div className="row justify-content-between w-100">
            {/* <!------- d-flex justify-content-around --> */}

            <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex">
              {/* <a className="navbar-brand became-volunteer text-white" href="/" ></a> */}
               Became a volunteer
            </div>

            <div className="telephone col-12 col-lg-4 col-md-4 col-sm-12 ">
              <div className="d-flex align-items-center">
                <div className="pr-2 d-flex align-items-center">
                <i class="fas fa-phone-alt"></i>
                  <h6> +125 445-485-5242</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-md-4 col-sm-12 d-flex">
              <div className="d-flex align-items-center justify-content-end">
                <ul className="social list-unstyled d-flex text-center ">
                  <li className="social-icon rounded-circle ">
                    <a href="/">
                    <i class="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a  href="/">
                    <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a href="/">
                    <i class="fas fa-envelope"></i>
                    </a>
                  </li>
                  <li className="social-icon rounded-circle">
                    <a href="/">
                    <i class="fas fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
