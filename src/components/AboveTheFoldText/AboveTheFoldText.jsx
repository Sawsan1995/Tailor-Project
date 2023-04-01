import React, { Component } from 'react';
import "../App/App.css";
import './AboveTheFoldText.css'

export default class AboveTheFoldText extends Component{
    render(){
        return<div className='above-the-fold-text-container'>
            <h1>
                We make cloths that suit you
            </h1>
            <p>
            TLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis
            cursus, mi quis viverra ornare.
            </p>
            <a href="#" className='our-services-button'>Our Services</a>
        </div>
    }
}