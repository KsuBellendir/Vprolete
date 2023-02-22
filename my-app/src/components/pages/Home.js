import '../../App.css';
import React from 'react';
import HeroSection from '../heroSection/HeroSection';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

const Home = () => {
    return(
        <>
        <HeroSection/>  
        <Cards/>
        <Footer/>
        </>
    )
}
export default Home;