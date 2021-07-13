import './App.css';
import React from 'react'
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/rooms/"  component={Rooms}></Route>
  <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
  <Route component={ErrorPage}></Route>
  </Switch>
  </>
  );
}

export default App;
