import React, { Component } from 'react';
import RoundedText from '../RoundedText/RoundedText';
import AboveTheFoldImage from '../AboveTheFoldImage/AboveTheFoldImage';
import AboveTheFoldText from '../AboveTheFoldText/AboveTheFoldText';
import '../App/App.css';
import './AboveTheFold.css'

export default class AboveTheFold extends Component{
    render(){
        return<section className='above-the-fold-section'>
            <div className='container'>
                <RoundedText />
                <AboveTheFoldText />
                <AboveTheFoldImage />
            </div>
        </section>
    }
}