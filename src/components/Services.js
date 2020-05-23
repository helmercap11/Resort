import React, { Component } from 'react' //rcc

import {FaCocktail, FaHiking, FaShuttleVan, FaBeer}  from 'react-icons/fa';

import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocKtails",
                info:'Saiba o que fazer para cultivar saúde,se sentir bem com seu corpo e viver mais leveza e equilíbrio.'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Saiba o que fazer para cultivar saúde,se sentir bem com seu corpo e viver mais leveza e equilíbrio.'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'Saiba o que fazer para cultivar saúde,se sentir bem com seu corpo e viver mais leveza e equilíbrio.'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'Saiba o que fazer para cultivar saúde,se sentir bem com seu corpo e viver mais leveza e equilíbrio.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
