import React, { Component } from 'react';
import {TfiInstagram} from 'react-icons/tfi';
import { IconContext } from 'react-icons';
import './InstagramCard.css';

export default class InstagramCard extends Component{
    render(){
        return(
                <div className="instagram-images-card">
                    <img src={this.props.InstaOne} />
                    <IconContext.Provider value={{color:'white', visibility: 'hidden', className:'instagram-icon'}}>
                        <TfiInstagram/>
                    </IconContext.Provider>    
            </div> 
        )
    }
}