import { Component } from 'react';
import './AboutUsSection.css';
import ImageOne from '../../imgs/visit_bg.png';

export default class AboutUsSection extends Component{
    render(){
        return <section className='about-us-section'>
            <div className='about-us-tailor-house'>
                <h1>About our tailor house</h1>
                <p>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Suspendisse varius enim in eros 
                    elementum tristique. Duis cursus, mi quis viverra 
                    ornare.
                </p>
                <a className='more-about-us-button'>More About us</a>
                <div className='image-one-more-about-us'>
                <img src={ImageOne}></img>
            </div>
            </div>
        </section>
    }
}