import React, { Component } from 'react'

class Home extends Component {
    //above render function
    constructor(props){
        super(props);

        this.state = {
            username: this.props.username
        }
    }

  render() {
    return (
      <div>Home {this.state.username}</div>
    )
  }
}

export default Home