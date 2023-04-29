import React, {Component} from 'react';
import Footermap from '../../imgs/map.png';
import Footerlogo from '../../imgs/logo2_footer.png';
import {AiFillHeart} from 'react-icons/ai';
import {FaFacebookF, FaPinterestP, FaTwitter} from 'react-icons/fa';
import {AiOutlineToTop} from 'react-icons/ai';
import { IconContext } from 'react-icons';

import './Footer.css';

export default class Footer extends Component{
    render(){
    const currentYear = new Date().getFullYear();
    document.addEventListener('DOMContentLoaded', function() {
        const backToTheTop = document.querySelector(".back-to-top-icon");
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 100){
                backToTheTop.classList.add("active")
                console.log("active")
            }
            else{
                backToTheTop.classList.remove("active")
            }
        })
      });
    
        
        
        return(
            <footer className='footer-wrapper'>
                <div className="footer-map-area">
                    <img src={Footermap} alt="footer-map"/>
                </div>
                <div className='footer-information'>
                    <div className='footer-app-info'>
                        <div className='footer-app-info-img'>
                            <img src={Footerlogo} alt="logo"/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <div className='footer-app-contact-info'>
                            <a className="number-one" href="">(80) 783 367-3904</a>
                            <a className="number-two" href="#">(80) 783 367-3904</a>
                        </div>
                        <div className="footer-social-media-icons">
                            <IconContext.Provider value={{color:"#be9278", className:"social-media-icons"}}>
                                <a href="#"><FaFacebookF/></a>
                                <a href="#"><FaPinterestP/></a>
                                <a href="#"><FaTwitter/></a>
                            </IconContext.Provider>
                        </div>
                    </div>    
                    <div className='footer-application-links'>
                        <h1>Our solutions</h1>
                        <ul className='footer-application-links-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>Copyright &copy; {currentYear} All rights reserved | This Template is made with
                        <IconContext.Provider value={{color: "white", size: "1rem", className:"footer-heart-icon"}}>
                            <AiFillHeart/>
                        </IconContext.Provider>
                        by <span>Colorlip</span>
                    </p>
                </div>
                <div className='back-to-top-section'>
                    <a href="#" className='to-top-link'>
                        <IconContext.Provider value={{className:"back-to-top-icon"}}>
                            <AiOutlineToTop/>
                        </IconContext.Provider>
                    </a>
                </div>
            </footer>
        )
    }
}