import React from 'react';
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Roomscontainer from '../Components/Roomscontainer';
const Rooms = () => {

    return( 
        <>
       <Hero hero="roomsHero">
           <Banner title="Our Rooms">
               <Link to="/" className="btn-primary">Return Home</Link>
           </Banner>
       </Hero>
       <Roomscontainer></Roomscontainer>
       </>
    ); 
}



export default Rooms;