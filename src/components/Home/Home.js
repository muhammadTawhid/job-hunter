import React from 'react';
import Donation from '../Donation/Donation';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div style={{backgroundColor:"#212529"}}>
            <Header></Header>
            <Donation></Donation>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default Home;