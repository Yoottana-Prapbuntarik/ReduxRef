import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import { compose } from 'recompose';
import { connect } from 'react-redux';

class App extends Component {
constructor(props){
super(props);
// this.changeHn =  this.changeHn.bind(this); 
this.handleChange = this.handleChange.bind(this);
}
//  changeHn(){
//   this.props.dispatch({
//     type: "EditchangeHn",
//     newHn : "60080501642",
//     newfname:"Prapbuntarik",
//   })
//  }

 handleChange(event){
  this.props.dispatch({
    type:"updateValue",
    name:event.target.name,
    value :event.target.value
  })
 }
  render() {
    let {opdData} = this.props;   
    return (
      <div className="App">
        <header className="App-header">
          <img style={{height: '20vmin'}} src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         { opdData.hn }
          <p>input hn</p> 
          <input type="text" name="hn" value={opdData.hn} onChange={this.handleChange} />
        <br/>

        {opdData.fname}
        <p>input fname</p>
         <input type="text" name="fname" value={opdData.fname} onChange={this.handleChange}/>
        <br/>
        <br/>
        {/* <button onClick={this.changeHn}>change HN</button> */}
        {/* <CaboGroup/> */}
        </header>
        <Footer/>       
      </div>
    
    )}
}
const mapStateToProps = (state) => ({opdData : state})
export default compose(connect(mapStateToProps)) (App);
