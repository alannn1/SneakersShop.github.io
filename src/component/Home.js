import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from "./Carouselslider";
import Navigasi from "./Navigation";
import '../style/firstpage.css'
import Cardtype from "./Cardtype";
import Contentnew from "./Contentnew";
import Carouselbrand from "./Carouselbrand";
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsPatchCheck } from "react-icons/bs";
import Tabcontent from "./Tabcontent";
import Footer from "./Footer";


const Home = () => {
    return(
        <div className="parent">
            <Navigasi />
            <main className='Container'>
                <section className='animation'>
                    <div className='first'><div>FREE SHIPPING NATIONWIDE <LiaShippingFastSolid/></div></div>
                    <div className='second'><div>LEGIT <BsPatchCheck/></div></div>
                    <div className='third'><div>CASH ON DELIVERY <LiaMoneyBillWaveSolid/></div></div>
                </section>
            </main>
                <div className="contentSlide">
                    <CarouselPage />
                </div>
                    <Contentnew />
                    <Tabcontent />
                    <Cardtype />
                    <Carouselbrand />
                    <Footer />
        </div>
    )
}

export default Home;