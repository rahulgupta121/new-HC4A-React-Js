import React from 'react'
import hc4alogo from '../logos/HC4A-logo.png' 
import { MdDoubleArrow, MdLocationOn } from 'react-icons/md';
//import { ImLocation } from './react-icons/im';
import footerimg1 from '../logos/footerimg1.png'
import footerimg2 from '../logos/footerimg2.png'
import footerimg3 from '../logos/footerimg3.png'
const FooterSection = () => {
    return (
        <>
         <div className='footer-div'>
            <div className=''>
                <div className='container footer-background pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>
                            <ul className='list-unstyled'>
                                <li><img src={hc4alogo} alt='/' /></li>
                                <li className='hc4a-list'><MdLocationOn /> <span className='address-hc4a text-center'>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</span></li>
                                <li className='hc4a-list'><i class="fa fa-phone" aria-hidden="true"></i><span className='telephone-hc4a'>+44(0) 0000000000</span></li>
                                <li className='hc4a-list'> <i class="fa fa-envelope" aria-hidden="true"></i>
                                           <span className='mail-hc4a'>abc@gmail.com</span> </li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>
                            
                            <ul className='list-unstyled'>
                                <li><h3 className='text-uppercase'>Quick links</h3></li>
                                <hr className='footer-hr'/>
                                <li className='quick-list mt-0'><MdDoubleArrow/> About Us</li>
                                <li className='quick-list'><MdDoubleArrow/>Contact Us</li>
                                <li className='quick-list'><MdDoubleArrow/>Home</li>
                                <li className='quick-list'><MdDoubleArrow/>Donate</li>
                                <li className='quick-list'><MdDoubleArrow/>Privacy Policy</li>
                                <li className='quick-list'><MdDoubleArrow/>Grow the Movement</li>
                                <li className='quick-list'><MdDoubleArrow/>Event</li>
                            </ul>
                        </div>
                        <div className='col-sm-12 col-mg-4 col-lg-4'>
                        <div className='row'>
                            <div className='col-sm-12 col-mg-12 col-lg-12'>
                                <h3 className='recent-head'>RECENT POSTS</h3>  
                                <hr className='footer-hr'/> 
                                <div className='row pb-2'>
                                    <div className='footer-content-1 col-sm-3 col-mg-3 col-lg-3'>
                                     
                                    <img src={footerimg1} alt=''/>
                                    </div>
                                    <div className='col-sm-9 col-mg-9 col-lg-9'>
                                        <h6>Our donation is hope for poor childrens</h6>
                                        <p>August 14, 2021</p>
                                    </div>
                                    
                                    
                                </div>
                            </div> 
                            <div className='col-sm-12 col-mg-12 col-lg-12'>
                                <div className='row pt-2 pb-2 footer-content-3-2'>
                                    <div className='footer-content-2 col-sm-3 col-mg-3 col-lg-3'>
                                    <img src={footerimg2} alt=''/>
                                    </div>
                                    <div className='col-sm-9 col-mg-9 col-lg-9'>
                                        <h6>Our donation is hope for poor childrens</h6>
                                        <p>July 24, 2021</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                             
                            <div className=' col-sm-12 col-mg-12 col-lg-12'>
                                <div className='row pt-2 pb-2'>
                                    <div className='footer-content-3 col-sm-3 col-mg-3 col-lg-3'>
                                    <img src={footerimg3} alt=''/>
                                    </div>
                                    <div className='col-sm-9 col-mg-9 col-lg-9'>
                                        <h6>Make Life Easier for Ebola & Alzheimer</h6>
                                        <p>March 04, 2021</p>
                                    </div>
                                     
                                </div>
                            </div>
                             
                        </div>
                        </div>
                    </div>

                </div>
            </div>   
        </div> 
        <div className='footer-end text-center'>
                <p className='footer-end-content text-white pt-4 pb-4 mb-0'>© 2021 Hindu Charities for America</p>
            </div>   
        </>
    )
}

export default FooterSection
