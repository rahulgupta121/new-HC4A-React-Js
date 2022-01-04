import React from 'react'
import hc4alogo from '../logos/HC4A-logo.png'
const FooterSection = () => {
    return (
        <>
         <div className='footer-div'>
            <div className=''>
                <div className='container footer-background'>
                    <div className='row'>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>
                            <ul className='list-unstyled'>
                                <li><img src={hc4alogo} alt='/' /></li>
                                <li><i class="fa fa-map-marker" aria-hidden="true"></i>Cecilia Chapman
                                    711-2880 Nulla St.
                                    Mankato Mississippi 96522</li>
                                <li><i class="fa fa-phone" aria-hidden="true"></i>+44(0) 0000000000</li>
                                <li> <i class="fa fa-envelope" aria-hidden="true"></i>
                                            abc@gmail.com</li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>
                            
                            <ul className='list-unstyled'>
                                <li><h3>Quick links</h3></li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>About Us</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Contact Us</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Home</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Donate</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Privacy Policy</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Grow the Movement</li>
                                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Event</li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>

                        </div>
                    </div>

                </div>
            </div>     
        </div>   
        </>
    )
}

export default FooterSection
