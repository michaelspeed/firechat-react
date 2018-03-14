import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { init as firebaseInit } from './firebase/firebase'
import Home from './Components/Home/Home'
import Auth from './Components/Auth/Auth'
import Account from './Components/Acoount/account'
import * as firebase from 'firebase'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) { 
    super(props)
    if (!firebase.apps.length) { 
      firebaseInit()
    }
  }

  state = {
    user: false
  }

  componentDidMount() { 
    firebase.auth().onAuthStateChanged(user => { 
      if (user) { 
        console.log(user)
        this.setState({
          user: true
        })
      }
    })
  }

  render() {
    const { user } = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/account/:uid' exact component={Account}/> 
        </Switch>  
      </BrowserRouter>
    )
  }
}

export default App;
