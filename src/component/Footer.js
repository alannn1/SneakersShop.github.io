import React from "react"
import { SiShopee, SiGooglemaps } from "react-icons/si";
import { TbBrandAppgallery, TbWorld } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
        <div className="container-footer">
                <div className="company">
                    <div className="content-company">
                        <h4 style={{marginBottom:'50px'}}> Hubungi Kami </h4>
                        <p><BsFillTelephoneFill style={{marginRight:'10px',position:'relative',bottom:'2px'}}/>087-714595762</p>
                        <p><FaWhatsapp style={{marginRight:'10px',position:'relative',bottom:'1.5px',fontSize:'18px'}}/>082-314063002</p>
                        <p>Senin - Jumat</p>
                        <p>09.00 - 21.00</p>
                        <br/>
                        <p>Jl. K.H. Wachid Hasyim</p>
                        <p>Bapangan Rt.01 Rw.03</p>
                        <p>Jawa Tengah - Jepara</p>
                        <p>591403</p>
                    </div>
                </div>
                <div className="customer-service">
                    <h4 style={{marginBottom:'50px'}}>Layanan</h4>
                    <div className="content-cs">
                        <p><TbWorld style={{fontSize:'17px',marginLeft:'1px',position:'relative',bottom:'1.5px'}}/> Web Store</p>
                        <p><a href="/#"><SiShopee style={{fontSize:'15px',position:'relative',bottom:'2px',cursor:'pointer',marginRight:'2px',marginLeft:'2px'}}/> Shopee </a></p>
                        <p><a href="/#"><TbBrandAppgallery style={{fontSize:'18px',position:'relative',bottom:'1px'}}/> Tokopedia </a></p>
                        <p><a href="/#"><SiGooglemaps style={{fontSize:'18px',position:'relative',bottom:'1px'}}/> Offline Store </a></p>
                    </div>
                </div>
                <div className="sosmed">
                    <h4>Sosmed</h4>
                    <div className="content-sosmed">
                        <p><a href="/#"><FaInstagram/></a></p>
                        <p><a href="/#"><FaFacebook/></a></p>
                        <p><a href="/#"><FaXTwitter/></a></p>
                        <p><a href="/#"><FaLinkedin/></a></p>
                    </div>
                </div>
        </div>
    )
}

export default Footer