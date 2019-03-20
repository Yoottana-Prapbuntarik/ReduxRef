import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'recompose';
 class Footer extends Component {
  

  render() {
    return (
      <div style={{background:'#333',color:'#fff',paddingTop:'20px',paddingBottom:'20px'}}>
    {this.props.getState.footer}

      </div>
    )
  }
}
const mapStateToProps =  (state) =>({
    getState : state
});
export default compose(connect(mapStateToProps))(Footer);

