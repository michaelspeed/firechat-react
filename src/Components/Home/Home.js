import React, { Component } from 'react';
import {Input, Button} from 'antd'
import * as firebase from 'firebase'
class Home extends Component {

  state = {
    todoText: '',
    todos: []
  }

  componentDidMount(){
    const db = firebase.database()
    const todoRef = db.ref('/todo/')
    const temp = []

    // reading once
    todoRef.once('value', snap => {
      snap.forEach(val => {
        temp.push(val.val())
      })
      this.setState({
        todos: temp
      })
    })

    //reading when child is added
    var clonedArry = this.state.todos.slice()
    todoRef.on('child_added', snap => {
      clonedArry.push(snap.val())
      this.setState({
        todos: clonedArry
      })
    })
  }

  onSaveTodo = () => {
    const db = firebase.database()
    var key = db.ref().child('todo').push().key
    //var key = db.ref('/todo').push.key  <-- same

    const todoObj = {
      text: this.state.todoText,
      complete: false,
      id: key
    }
    var setData = {}
    setData['/todo/'+ key] = todoObj
    db.ref().update(setData).then(() => {
      this.setState({
        todoText:''
      })
    })
  }

  onTodosComplete = item =>  {
    const db = firebase.database()
    const completed = {
      text: item.text,
      complete: true,
      id: item.id
    }

    var setData = {}
    setData['/todo/'+ item.id] = completed
    db.ref().update(setData)
  }
  
  render() { 
    return (
      <div style={{height: '100%'}}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', margin: 50}}>
          <Input placeholder='Write a TODO //' style={{ margin: 20 }} 
            onChange={event => this.setState({todoText: event.target.value})} value={this.state.todoText}/> 
          <div>
            <Button type='primary' style={{ margin: 20 }} onClick={this.onSaveTodo}> Submit TODO</Button>
          </div>

          {this.state.todos.map(item => (
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignContent:'flex-start', margin: 20}} key={item.id}>
              <span style={{marginRight: 10}}>{item.text}</span>
              {item.complete ? <span>Completed</span> : <Button type='primary' onClick={() => this.onTodosComplete(item)}>Mark as Complete</Button>}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Home;