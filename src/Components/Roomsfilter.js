import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from'./Title'

//get unique value
const getunique = (items,value)=>{
    const temp = items;
    return[...new Set(items.map(item=>item[value]))]
}
const Roomsfilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {handlechange,type,capacity,price,minprice,maxprice,minsize,maxsize,size,breakfast,pets} = context
    let types = getunique(rooms,'type')
    types = ['all',...types]

     types = types.map((type,key)=>{return <option value={type}>{type}</option>})

     let people = getunique(rooms,'capacity')
     people = people.map((person,key)=>{return <option key={key} value={person}>{person}</option>})
    return (<section className="filter-container">
        <Title title="search Rooms"></Title>
        <form className="filter-form">
            {/* select type*/}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handlechange}>
                {types}
                </select>
                
            </div>
             {/* select guests*/}
            <div className="form-group">
                <label htmlFor="capacity">capacity</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handlechange}>
                {people}
                </select>
                
            </div>
             {/* select price*/}
            <div className="form-group">
                <label htmlFor="price">
                    room price ${price}
                </label>
                <input type="range" name="price" min={minprice} max={maxprice} id="price" value={price} onChange={handlechange} className="form-control"></input>
                
            </div>
             {/* select size*/}
            <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number" name="minsize" id="size" value={minsize} onChange={handlechange} className="size-input"></input>
                    <input type="number" name="maxsize" id="size" value={maxsize} onChange={handlechange} className="size-input"></input>

                </div>
            </div>
             {/* select extras*/}
             <div className="form-group">
                 <div className="single-extra">
                     <input type="checkbox" name="breakfast" id ="breakfast" checked={breakfast} onChange={handlechange}></input>
                     <label htmlFor="breakfast">breakefast</label>
                 </div>
                 <div className="single-extra">
                     <input type="checkbox" name="pets" id ="pets" checked={pets} onChange={handlechange}></input>
                     <label htmlFor="pets">pets</label>
                 </div>
             </div>
        </form>
    </section>);
}



export default Roomsfilter;