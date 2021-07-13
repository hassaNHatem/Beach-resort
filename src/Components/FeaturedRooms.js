import React from 'react';
import {RoomContext} from '../Context'
import Loading from './Loading';
import Room from './Room';
import Title from '../Components/Title'
class FeaturedRooms extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}
static contextType = RoomContext

    render() {
        let {loading,featuredrooms:rooms} = this.context; 
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}></Room>
        })
        return <section className="featured-rooms">
            <Title title="featured rooms"></Title>
            <div className="featured-rooms-center">
                {loading?<Loading></Loading>:rooms}
            </div>
            
        </section>;
    }
}

export default FeaturedRooms;