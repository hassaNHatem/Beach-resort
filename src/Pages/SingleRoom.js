import React from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import Styledhero from '../Components/Styledhero'

class SingleRoom extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        slug:this.props.match.params.slug,
        defaultBcg
    };
}
    static contextType = RoomContext;
    componentDidMount(){

} 

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug);
        console.log(room)
        if(!room){
            return <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        const [mainimg,...defaultimg] = images
        return <><Styledhero  img={mainimg||this.state.defaultBcg}  >
            <Banner title={`${name} room`}>
            <Link className="btn-primary" to='/rooms'>
                back to rooms
            </Link>
            </Banner>
        </Styledhero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultimg.map((img,key)=>{
                  return  <img key={key} src={img}></img>
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                        <h3>info</h3>
                        <h6>price :${price}</h6>
                        <h6>size  :{size}SQFT</h6>
                        <h6>max capacity: {capacity>1?`${capacity} people`:`${capacity} person`}</h6>
                        <h6>{pets?'pets are allowed':'no pets allowed'}</h6>
                        <h6>{breakfast &&'free breakfast included'}</h6>
                    </article>
            </div>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((extra,key)=>{
                        return<li key={key}>-{extra}</li>
                    })}
                </ul>
        </section>
        </section>
       
        </>
    }
}



export default SingleRoom;