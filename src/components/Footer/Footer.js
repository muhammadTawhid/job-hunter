import React from 'react';
import event from '../../Images/header.jpg'

const Footer = () => {
    return (
        <div style={{paddingTop:'5%', backgroundColor:'gray', color:'white'}}>
            <div style={{marginRight: '0px', padding: '0px 2% 1% 3%'}} className="row">
                <div className="col-md-4">
                    <h2>ABOUT US</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam unde corrupti ducimus magnam, at inventore in exercitationem molestias molestiae eaque aspernatur vitae, quasi, quos nulla nemo dolorum voluptas odit. Repudiandae itaque dolor possimus, esse iusto iste nulla. Ex, quos? <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ullam unde corrupti ducimus magnam, at inventore in exercitationem molestias molestiae eaque aspernatur vitae, quasi, quos nulla nemo dolorum voluptas odit.  </p>
                </div>
                <div className="col-md-4">
                    <h2>OUR ADDRESS</h2>
                    <h6>OUR OFFICE LOCATION:</h6>
                    <p style={{borderBottom: '1px solid white', paddingBottom: '15px'}}>#23, Uttara, Dahaka-1200</p>
                    <h6>OUR PHONE:</h6>
                    <p style={{borderBottom: '1px solid white', paddingBottom: '15px'}}>012345567890</p>
                    <h6>OUR EMAIL:</h6>
                    <p>antorcnj2014@gmail.com</p>
                </div>
               <div className="col-md-4">
               <div className="p-2">
                    <h2>EVENTS</h2>
                    <div className="row">
                    <img className="col-md-4"  src={event} alt="" />
                    <div className="col-md-7">
                    <h6>EID DAY EVENT</h6>
                    <small className="">FUND:$2990</small> <br />
                    <small className="">NEED:$2990</small>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="row">
                    <img className="col-md-4"  src={event} alt="" />
                    <div className="col-md-7">
                    <h6>EID DAY EVENT</h6>
                    <small className="">FUND:$2990</small> <br />
                    <small className="">NEED:$2990</small>
                    </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="row">
                    <img className="col-md-4"  src={event} alt="" />
                    <div className="col-md-7">
                    <h6>EID DAY EVENT</h6>
                    <small className="">FUND:$2990</small> <br />
                    <small className="">NEED:$2990</small>
                    </div>
                    </div>
                </div>
               </div>
                
            </div>
        </div>
    );
};

export default Footer;