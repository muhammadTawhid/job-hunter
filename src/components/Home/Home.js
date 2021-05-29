import React from "react";
import Donation from "../Donation/Donation";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Volunteer from "../Volanteer/Volanteer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <Header></Header>
      <Donation></Donation>
      <Volunteer></Volunteer>
      <Footer></Footer>
    </div>
  );
};

export default Home;
