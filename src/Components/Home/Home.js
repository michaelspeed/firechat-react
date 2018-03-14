import React, { Component } from 'react';
import {Input, Button, Modal, Popconfirm, message, notification, Spin} from 'antd'
import * as firebase from 'firebase'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Actions } from '../../store/actions'

const dik = 'hkhvber93felkf033r938483403840adsjfalf'
const him = 'hjdsdndwhjda7duyw87adahkdadyaabdk8wydy8'

const list = [
  {
    name: 'djskdjk',
    id:'dksdkksdklklksld'
  },{
    name: 'djskdadaddjk',
    id:'dksdkksdkdaafggvdvlklksld'
  },{
    name: 'djskdjk',
    id:'dsdsdafgdbgsgggsdkksdklklksld'
  },{
    name: 'djsrtrtrrkdjk',
    id:'dksdkksdkrglklksld'
  },{
    name: 'djsrgrrtktrdjk',
    id:'dkssgdgkktteresdklklksld'
  }
]

class home extends Component {
  state = {
    isLoginOpen: false,
    some: '',
    all: false,
    allList: []
  }

  componentDidMount() { 
    var db = firebase.database()
    var ref = db.ref('/user')
    ref.on('value', snap => { 
      this.setState({allList: snap})
    })
  }

  onSignInVisible = () => { 
    this.setState({
      isLoginOpen: true
    })
  }

  onSigncancel = () => { 
    this.setState({
      isLoginOpen: false
    })
  }

  onSignIn = () => {
    notification.config({
      placement: 'bottomLeft',
      bottom: 20,
      duration: 5,
    })
    this.setState({
      isLoginOpen: false
    })
    notification.success({
      message: 'you are now logged in',
      description:'Please proceed to your inbox'
    })
  }

  onGoToDIkAccount = id => { 
    this.props.history.push(`/account/${id}`)
  }

  render() {
    console.log(this.props) 
    return (
      <div style={{ height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}>
          <Button type='primary' onClick={() => this.onGoToDIkAccount(dik)}>Go to Dik account</Button>
          <Button type='primary' onClick={() => this.onGoToDIkAccount(him)}>Go to Him account</Button>
          {this.state.isLoginOpen ? <Spin/> : <Popconfirm title='Are you sure you want to login?' onConfirm={this.onSignInVisible} placement="leftBottom">
          <Button type='primary'>SignIn</Button>  
        </Popconfirm>}  
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
          {list.map(item => (
            <Button type='primary' style={{ margin: 10 }} onClick={() => this.onGoToDIkAccount(item.id)}>{item.name}</Button>
          ) )}
        </div>
        <Modal title='SignIn' visible={this.state.isLoginOpen} maskClosable={false} closable={true} onCancel={this.onSigncancel} onOk={this.onSignIn}>
          <div>
            <Input placeholder='Email' />
            <Input placeholder='Password'/>
          </div>  
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch)
}

let Home = compose(
  connect((state) => ({
    store: state
  }), mapDispatchToProps)
)(home)

export default Home;