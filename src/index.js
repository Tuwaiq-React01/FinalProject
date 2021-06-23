import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    FirebaseAuthProvider,
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
  } from "@react-firebase/auth";
  import firebase from "firebase/app";
  import "firebase/auth";
  import { firebaseConfig } from './firebase.js'


ReactDOM.render(
<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
            <React.Fragment>
              <IfFirebaseUnAuthed>
                  <div class="App">

                  <div class="float-right container">
                      <h3 class=" ">
                          login using google
                      </h3>
                    <button class="button"
                        onClick={async () => {
                        try {
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            await firebase
                            .auth()
                            .signInWithPopup(googleAuthProvider);
                        } catch (error) {
                        }
                        }}
                    >
                        Sign in with Google
                    </button>
                  </div>

                  </div>
              </IfFirebaseUnAuthed>
            </React.Fragment>
    
      <IfFirebaseAuthed>
        <App/>
      </IfFirebaseAuthed>
</FirebaseAuthProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
