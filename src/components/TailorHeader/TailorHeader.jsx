import React, { Component } from 'react';
import LogoImageHeader from '../../imgs/logo.png';
import './TailorHeader.css';

export default class TailorHeader extends Component{
    render(){
        return(
            <header className='tailor-header'>
                <div className='tailor-logo'>
                    <img src={LogoImageHeader} />
                </div>
                <nav className='nav-links'>
                    <ul className='nav-links-list'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Blog</a>
                            <ul className='sub-menu-links'>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Blog Details</a></li>
                                <li><a href='#'>Elements</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
                <div className='visit-us-button'>
                    <a href='#'>Visit us</a>
                </div>
            </header>
        )
    }
}