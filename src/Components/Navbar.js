import React from 'react'
import hc4alogo from "../logos/HC4A-logo.png"
const Navbar = () => {
    return (
        <>
        <div className="container d-flex justify-content-center position-relative">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      {/* <!-- <a className="navbar-brand" href="/">Navbar scroll</a> --> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: "100px", alignItems: "center" }}>
          <li className="home nav-item active">
            <a className="nav-link" href="/">HOME <span className="sr-only">(current)</span></a>
          </li>
          <li className="about-us nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button"
              data-toggle="dropdown" aria-expanded="false">
              ABOUT US
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button"
              data-toggle="dropdown" aria-expanded="false">
              EVENTS
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button"
              data-toggle="dropdown" aria-expanded="false">
              GROW THE MOVEMENTS
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <div className="HC4A-logo position-relative">
            <img className="HC4A-logo" src={hc4alogo} alt=''/>
          </div>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button"
              data-toggle="dropdown" aria-expanded="false">
              PROGRAMES
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button"
              data-toggle="dropdown" aria-expanded="false">
              STORYS
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item active">
            <a className="contact-us nav-link" href="/">CONTACTS US <span className="sr-only">(current)</span></a>
          </li>
          <div className="navbar-donate-div">
            <button type="button" className="btn btn-danger navbar-donate-btn"> DONATE </button>
          </div>
        </ul>
      </div>
    </nav>
  </div> 
        </>
    )
}

export default Navbar
