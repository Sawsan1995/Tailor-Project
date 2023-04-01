import React, { Component } from 'react';
import '../App/App.css';
import TailorImage from "../../imgs/h1_hero1.png";
import './AboveTheFoldImage.css';

export default class AboveTheFoldImage extends Component{
    render(){
        return<div className='image-wrapper'>
            <img src={TailorImage}></img>
        </div>
    }
}