import React from 'react';
import fitLogo from '../fitLogo.png';
import landingPageVideo from '../landingPageVideo.mp4';
import '../App.css';

export default function LandingPage() {

return (
    <>
    <div>
        <img src={fitLogo} alt="Anywhere Fitness logo" />

    </div>
    <div>
    <video width="450" height="800" autoPlay muted>
        <source src={landingPageVideo} type="video/mp4" />
        This video isn't supported by your browser. 
    </video>
    </div>
    </>
)

}

