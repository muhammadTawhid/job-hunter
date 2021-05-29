import React from "react";

import volunteer1 from "../../Images/volanteer1.jpg";
import volunteer2 from "../../Images/volanteer2.jpg";
import volunteer3 from "../../Images/volanteer3.jpg";
import volunteer4 from "../../Images/volanteer4.jpg";
import VolanteerCard from "../VolanteerCard/VolanteerCard";

const Volunteer = () => {
  const VolunteerData = [
    {
      img: volunteer1,
      name: "Jhone Dove",
    },
    {
      img: volunteer2,
      name: "Merry Query",
    },
    {
      img: volunteer3,
      name: "David Watson",
    },
    {
      img: volunteer4,
      name: "Franklia Ats",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h3 style={{ textDecoration: "underline" }} className="text-white mt-5">
          <b>OUR VOLUNTEERS</b>
        </h3>
      </div>
      <div className="row justify-content-center ">
        {VolunteerData.map((volanteer) => (
          <VolanteerCard volanteer={volanteer} />
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
