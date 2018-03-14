import React, { Component } from 'react';
import { Button } from 'antd'
import AccountNav from './accountNav'

class Account extends Component {
  render() { 
    return (
      <div>
        <span>account : {this.props.match.params.uid}</span>
        <AccountNav/>
      </div>
    )
  }
}

//let Account = withRouter(account)
export default Account