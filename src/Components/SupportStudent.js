import React from 'react'
import supportBanner1 from '../logos/supportstud1.png'
const SupportStudent = () => {
    return (
        <>
            <div className='Support-stud-banner-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="supportBanner1">
                                 <img alt='' src={supportBanner1} />
                            </div>
                           
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h4>Support The Students</h4>

                            <p className="text-white">School Supplies – Based on data from Texas Homeless Education Office, we identify the schools with homeless children needing most help. We then provide them the school supplies that they distribute to the students. We have provided school supplies to Austin, Manor, Del Valle ISDs and many other smaller organizations that are connected directly to homeless students.</p>
                        
                            <p className="text-white">Vocational Training Scholarships – We provide broad guidelines to the institutions and entrust them to select students. The key points in the Guidelines are: The student must be living below federally definednts and some other organizations who work with students experiencing economic hardship</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SupportStudent;
