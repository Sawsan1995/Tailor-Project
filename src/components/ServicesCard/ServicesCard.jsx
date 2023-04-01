import React, { Component } from 'react';
import './ServicesCard.css'


export default class ServicesCard extends Component{
    render(){
        return <div className='services-card-wrapper'>
            <div className='service-card-image'>
                <img src={this.props.serviceImage}/>
            </div>
            <div className='services-card-info'>
                <div className='service-number'>{this.props.serviceNumber}</div>
                <div className='service-text'>
                    <h1>{this.props.serviceTitle}</h1>
                    <p>{this.props.serviceDescription}</p>
                </div>
            </div>
        </div>
    }
}