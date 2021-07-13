import React from 'react';
import Roomsfilter from './Roomsfilter'
import Roomslist from './Roomslist'
import {RoomConsumer} from '../Context'
import Loading from './Loading'
const Roomscontainer = () => {
    return (<>
    <RoomConsumer>
        {
            (value)=>{
                const {loading,sortedrooms,rooms}=value
                if(loading){
                    return <Loading></Loading>
                }
                return  (
                <div>
                <Roomsfilter rooms={rooms}></Roomsfilter>
                <Roomslist rooms={sortedrooms}></Roomslist>
                </div>
                )}
        }
    </RoomConsumer>
   
    </>);
}



export default Roomscontainer;