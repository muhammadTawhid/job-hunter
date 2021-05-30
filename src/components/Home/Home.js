import React from "react";
import Contact from "../Contact/Contact";
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
      <Contact/>
      <Footer></Footer>
    </div>
  );
};

export default Home;
