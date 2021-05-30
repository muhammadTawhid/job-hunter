import React from "react";

const DonationCard = (props) => {
  const { title, img, place, raised, target, description } = props.donate;

  return (
    <div className="col-md-4 d-flex justify-content-center my-3">
      <div className=" shadow-lg">
        <div className=" info-container service-red">
          <div className="text-center bg-white">
            <img style={{ height: "13rem" }} className="img-fluid " src={img} />
            <h3>
              <b>{title}</b>
            </h3>
            <h5 className="text-secondary">
              <b>{place}</b>
            </h5>
            <h5 className="justify-content-center"> <strong>RAISED: ${raised}</strong></h5>
    
              <h5 className="justify-content-center"><strong>TARGET: ${target}</strong> </h5>
            <p className="text-center ">{description}</p>
            <button
              style={{ borderRadius: "15px" }}
              className="bg-secondary text-white my-3"
            >
              <b>Donate Now</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
