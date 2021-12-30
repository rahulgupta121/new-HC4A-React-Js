import React from 'react'
import bannerImg from '../logos/banner.png'
const Banner = () => {
    return (
        <>

  <div className="background-banner position-relative">
    <img className="background-banner" alt='' src={bannerImg}/>
    <div className="container">
      <div className="service-learn">
        <h2 className="service-heading text-warning">JOIN A SERVICE LEARNING TRIP</h2>
        <p className="text-white service-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, eveniet, dolorem fugit
          ab modi laboriosam ratione repudiandae maiores perferendis
          assumenda repellat nostrum cupiditate molestiae, quae hic placeat ad ea est?
        </p>
        <div className="register-btn-div">
          <button type="button" className="register-btn btn btn-danger text-white"> REGISTER NOW </button>
        </div>
      </div>
    </div>
  </div>

        </>
    )
}

export default Banner;
