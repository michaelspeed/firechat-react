import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { Input, Button, message } from 'antd'
import { init as firebaseInit } from './firebase/firebase'
import * as firebase from 'firebase'

class App extends Component {
  constructor(props) { 
    super(props)
    if (!firebase.apps.length) { 
      firebaseInit()
    }
  }

  state = {
    email: '',
    password:''
  }

  handleChangeEmail = (event) => { 
    this.setState({
      email: event.target.value
    })
  }

  handleChangePassword = event => { 
    this.setState({
      password: event.target.value
    })
  }

  handleCreateAccount = () => { 
    const { email, password } = this.state
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => { 
      message.success('Create account successful')
    }).catch(error => { 
      message.error(error.message)
    })
  }

  handleSignIn = () => { 
    const { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => { 
      message.success("You are now logged in")
    }).catch(error => { 
      message.error(error.message)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div style={{height: '100%'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin: 50}}>
          <Input placeholder='email' style={{ margin: 20 }} onChange={(event) => this.handleChangeEmail(event)}/> 
          <Input placeholder='password' style={{ margin: 20 }} onChange={event => this.handleChangePassword(event)}/>
          <div>
            <Button type='primary' style={{ margin: 20 }} onClick={this.handleSignIn}>Login</Button>
            <Button type='primary' style={{ margin: 20 }} onClick={this.handleCreateAccount}>Create Account</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
