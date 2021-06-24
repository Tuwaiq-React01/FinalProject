import React, { Component } from 'react'
import firebase from 'firebase'
import { StyledFirebaseAuth } from 'react-firebaseui'
import QuotesAxios from './QuotesAxios'


export default class App extends Component {
  state = { isSingedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSingedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        
        {this.state.isSingedIn? ( <div> <QuotesAxios/> </div>) : <div> ( <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          /> ) 
          </div> }
        
      </div>
    )
  }
}


