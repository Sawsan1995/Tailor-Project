import React, {Component} from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import ServiceImage1 from '../../imgs/offers1.png';
import ServiceImage2 from '../../imgs/offers2.png';
import ServiceImage3 from '../../imgs/offers3.png';
import './ServicesSection.css';

export default class ServicesSection extends Component{
    render(){
        return <section className='Services-section-wrapper'>
            <ServicesCard serviceImage={ServiceImage1} serviceNumber="1" serviceTitle="Tailor Sweing" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
            <ServicesCard serviceImage={ServiceImage2} serviceNumber="2" serviceTitle="Mesurement" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
            <ServicesCard serviceImage={ServiceImage3} serviceNumber="3" serviceTitle="Ready-made" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
        </section>
    }
}