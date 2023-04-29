import React, {Component} from 'react';
import InstagramCard from '../InstagramCard/InstagramCard';
import InstaOne from '../../imgs/instra1.png';
import InstaTwo from '../../imgs/instra2.png';
import './FollowUsSection.css';

export default class FollowUsSection extends Component{
    render(){
        return(
            <section className='follow-instagram-section'>
                <div className='follow-instgram-section-title'>
                    <h1>Follow us on Instagram</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros.
                    </p>
                </div>
                <div className='instagaram-images-container'>
                    <InstagramCard InstaOne={InstaOne}/>
                    <InstagramCard InstaOne={InstaTwo}/>
                </div>    
            </section>
        )
    }
}