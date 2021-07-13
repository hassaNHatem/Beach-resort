import React from 'react';
import Rooms from '../Pages/Rooms';
import Room from './Room'
const Roomslist = ({rooms}) => {
    if(rooms.length===0){
        return(
        <div className="empty-search">
            <h3>unfortunatly no rooms matched your search parameters</h3>
        </div>
        );
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((room,key)=>{
                        return <Room key={key} room={room}></Room>
                    })
                }
            </div>
        </section>
    ); 
}



export default Roomslist;