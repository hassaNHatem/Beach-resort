import React from 'react';
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
class Services extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails" ,
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elementum augue eu luctus. In lacus urna!'
                
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking" ,
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elementum augue eu luctus. In lacus urna!'
                
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle" ,
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elementum augue eu luctus. In lacus urna!'
                
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer" ,
                info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet elementum augue eu luctus. In lacus urna!'
                
            }
        ]
    };
}

    render() {
        return (<section className="services">
            <Title title="services"></Title>
            <div className="services-center">
                {this.state.services.map((item,key)=>{
                    return <article key={key} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>);
    }
}


export default Services;