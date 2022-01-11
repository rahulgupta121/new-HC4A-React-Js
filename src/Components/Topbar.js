import React from "react";
// import { Router, Switch } from "react-router-dom"
// import $  from 'jquery'

// $(document).ready(function () {

//   var menu = $('.navbar');
//   var origOffsetY = menu.offset().top;

//   function scroll() {
//       if ($(window).scrollTop() >= origOffsetY) {
//           $('.menu').addClass('sticky');
//           $('.content').addClass('menu-padding');
//       } else {
//           $('.menu').removeClass('sticky');
//           $('.content').removeClass('menu-padding');
//       }
//   }

//   document.onscroll = scroll;

// });

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction 
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById("myTopnav");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. 
  // Remove "sticky" when you leave the scroll position

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  
})
const Topbar = () => {
  return (
    <>
      <div id="myTopnav" className="topnav top-navbar navbar d-flex flex-wrap" data-spy="affix" data-offset-top="197">
        <div className="container">
          <div className="row justify-content-between w-100">
            {/* <!------- d-flex justify-content-around --> */}

            <div className="col-lg-4 col-md-4 col-sm-4 d-flex">
              <a className="navbar-brand became-volunteer text-white" href="/" > Became a volunteer</a>
              
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 ">
              <div className="d-flex telephone justify-content-center">
                <div className="pr-2 mt-2 d-flex align-items-center">
                <i class="fas fa-phone"></i>
                  <h6 className="phone-no"> +125 445-485-5242</h6>
                </div>
              </div>
            </div>

            <div className="col-for-social-link-div col-lg-4 col-md-4 col-sm-4 d-flex pl-0">
              <div className="col-for-social-link d-flex align-items-center justify-content-end">
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