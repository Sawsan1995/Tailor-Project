import '../App/App.css';
import React from 'react';
import { Component } from 'react';
import {IoHeartOutline} from 'react-icons/io5';
import {AiOutlineTrademarkCircle} from 'react-icons/ai';
import './EmiratesLoveHeader.css';

export default class EmiratesLoveHeader extends Component{
    render(){
        return<header>
            <div className="EmiratesLoveHeaderContainer">
                <div className='HeaderLogo'>
                    <IoHeartOutline className='HeaderLogoHeartIcon' />
                    <h1 className='HeaderLogoName'>Emirates<br/>Loves<AiOutlineTrademarkCircle className='LogoTradmarkIcon' /></h1>
                </div>
                <nav className='HeaderNavigationLinks'>
                    <ul className="NavigationItems">
                        <li><a>Who Are We</a></li>
                        <li><a>Type of Stories</a></li>
                        <li><a>Countries</a></li>
                        <li><a>Events</a></li>
                        <li><a>العربية</a></li>
                    </ul>
                </nav>
                <div className='HeaderButton'>
                    <button className='TellUsYourStoryCTA'>Tell Us Your Story</button>
                </div>
            </div>
        </header>
    }
} 