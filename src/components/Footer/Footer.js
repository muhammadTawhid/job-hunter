import React from 'react';

const Footer = () => {
    return (
        
            <div style={{backgroundColor:'#44d699',color:'white'}}>
                <h2  style={{paddingTop:'50px', textAlign:'center'}}>Welcome to our Contact section:</h2>
                <div style={{marginLeft:'0',marginRight:'0'}} className="row p-3">
                <div className="col-md-4">
                    <h2>About:</h2>
                </div>
                <div className="col-md-4">
                    <h2>Donations: </h2>
                </div> 
                <div className="col-md-4">
                    <h2>Contact Us:</h2>
                </div>

            </div>
            </div>
        
    );
};

export default Footer;