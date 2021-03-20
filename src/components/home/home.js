import React from 'react';
import {Box} from "@material-ui/core";
import TopMain from "./top-main";
import Features from "./features";
import Service from "./service";
import Doctors from "./doctors";
import Footer from "./footer";
import ContactUs from "./contact-us";

const Home = () => {
    return (
        <>
            <Box>
                <TopMain/>
                <Features/>
                <Service/>
                <Doctors/>
                <ContactUs/>
                <Footer/>
            </Box>
        </>
    );
};

export default Home;
