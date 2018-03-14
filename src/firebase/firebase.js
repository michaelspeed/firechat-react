import * as firebase from 'firebase'
let database
export const init = () => { 
  var config = {
    apiKey: "AIzaSyDsEpBWWg4dFYfQD_PnBaBaQhSQxaV6ANk",
    authDomain: "atmyo-oncall.firebaseapp.com",
    databaseURL: "https://atmyo-oncall.firebaseio.com",
    projectId: "atmyo-oncall",
    storageBucket: "atmyo-oncall.appspot.com",
    messagingSenderId: "123899756677"
  };
  firebase.initializeApp(config)
  database = firebase.database()
}