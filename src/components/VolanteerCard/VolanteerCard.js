import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const VolanteerCard = (props) => {
  const { img, name } = props.volanteer;

  return (
    <div className="col-md-3 d-flex justify-content-center my-3">
      <div className=" shadow-lg">
        <div>
          <div className="text-center bg-white">
            <img style={{ height: "13rem" }} className="img-fluid " src={img} />
            <br />
            <FontAwesomeIcon className="ml-4 mt-3" icon={faFacebook} />
            <FontAwesomeIcon className="ml-4 mt-3" icon={faTwitter} />
            <FontAwesomeIcon className="ml-4 mr-4 mt-3" icon={faLinkedin} />
            <h3>
              <b>{name}</b>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolanteerCard;

{
  /* <div>
           <div className="col-md-3  justify-content-center my-3">
           <img className="img-fluid" src={img}/>
           </div>
           <FontAwesomeIcon icon={fb} />
           <FontAwesomeIcon icon={twitter} />
           <FontAwesomeIcon className="text-white" icon={faLinkedin} />
           <h3 className="text-white"><b>{name}</b></h3>
       </div> */
}
