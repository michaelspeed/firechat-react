import React, { Component } from 'react';
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

class accountNav extends Component {
  
  onGoToHome = () => { 
    this.props.history.push('/')
  }

  render() { 
    console.log(this.props)
    return (
      <div>
        <Button type='primary' onClick={this.onGoToHome}>Go to Home</Button>  
      </div>
    )
  }
}
let AccountNav = withRouter(accountNav)
export default AccountNav