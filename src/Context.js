import React from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends React.Component {
    state={
        rooms:[],
        sortedrooms:[],
        featuredrooms:[],
        size:0,
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minprice:0,
        maxprice:0,
        minsize:0,
        maxsize:0,
        breakefast:false,
        pets:false
    }
    //getdata
    componentDidMount(){
        let rooms= this.formatData(items)
        let featuredrooms = rooms.filter(room =>room.featured===true);
        let maxprice = Math.max(...rooms.map(item=>item.price))
        let maxsize = Math.max(...rooms.map(item=>item.size))
        this.setState({
            rooms,
            featuredrooms,
            sortedrooms:rooms,
            loading:false,
            maxprice:maxprice,
            maxsize:maxsize
        })
    }

    formatData(items){
        let tempitems = items.map(item=>{
            let id    = item.sys.id
            let images= item.fields.images.map(image =>image.fields.file.url)
            let room={...item.fields,images,id} 
            return room
        })
        return tempitems
    }

    getRoom = (slug)=>{
        let temprooms =[...this.state.rooms]
        const room = temprooms.find(room =>room.slug===slug)
        return room;
    }
    handlechange = (e)=>{
        const target  = e.target
        const value = target.type==='checkbox'?target.checked:target.value
        const name = target.name
        this.setState({
            [name]:value
        },this.filterroom)
    }
    filterroom = ()=>{
        let {rooms,type,capacity,price,minsize,maxsize,breakfast,pets} = this.state
        let temprooms = [...rooms]
        //parsing values
        capacity = parseInt(capacity)
        price = parseInt(price)
        minsize = parseInt(minsize)
        maxsize= parseInt(maxsize)
        if(type!=='all'){
            temprooms = temprooms.filter(room=>room.type===type)
        }
        //capacity filter
        if(capacity!==1){
            temprooms= temprooms.filter(room=>room.capacity>=capacity)
        }
        //filter price
        if(price!==0){
            temprooms = temprooms.filter(room=>room.price<=price)
        }
        //filter size
        if(minsize!==0){
            temprooms= temprooms.filter(room=>room.size>=minsize&&room.size<=maxsize)
        }
        //filter breakfast
        if(breakfast){
            temprooms= temprooms.filter(room=>room.breakfast===breakfast)
        }
        //filter pets
        if(pets){
            temprooms= temprooms.filter(room=>room.pets===pets)
        }
        this.setState({
            sortedrooms:temprooms
        })
    }
    render() {
        return <RoomContext.Provider value={{
            ...this.state,
            getRoom:this.getRoom,
            handlechange:this.handlechange
            }}>
            {this.props.children}
        </RoomContext.Provider>;
    }
}
const RoomConsumer = RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};