import React from 'react'
import NavBar from '../NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from '../HeroSection'
import { LandingContainer } from './LandingPageStyles';
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection';
const LandingPage = () => {
    return (
        <>
            <LandingContainer>
                <NavBar />
                <HeroSection />
                <AboutSection />
                <ContactSection />
            </LandingContainer>


        </>

    )
}

export default LandingPage;