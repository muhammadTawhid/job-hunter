import React from "react";
import DonationCard from "../DonationCard/DonationCard";
import africa from "../../Images/donate3.jpg";
import india from "../../Images/donate2.jpg";
import brazil from "../../Images/donate1.jpg";

const Donation = () => {
  const donateServices = [
    {
      title: "Donate  for  Food",
      img: africa,
      place: "Africa",
      raised: "11,366",
      target: "15,000",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been ",
    },
    {
      title: "Donate for Children",
      img: brazil,
      place: "India",
      raised: "9,564",
      target: "12,000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Donate for Homeless",
      img: india,
      place: "Brazil",
      raised: "8,366",
      target: "10,000",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h3 style={{ textDecoration: "underline" }} className="text-white mt-5">
          <b>REASON FOR DONATION</b>
        </h3>
      </div>
      <div style={{marginRight:"0px", }} className="row justify-content-center p-5">
        {donateServices.map((donate) => (
          <DonationCard donate={donate}></DonationCard>
        ))}
      </div>
    </div>
  );
};

export default Donation;
