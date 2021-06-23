import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyAg-z_Ez0gy2Hv1DPywYQw1J4FtJWKhLqI",
    authDomain: "robotcall-2aeaa.firebaseapp.com",
    projectId: "robotcall-2aeaa",
    storageBucket: "robotcall-2aeaa.appspot.com",
    messagingSenderId: "24691628948",
    appId: "1:24691628948:web:cafd0801fa1e41abee8d81",
    measurementId: "G-9B81T1H578"
};
export const app = firebase.initializeApp(firebaseConfig);
export const firebasedb = app.database().ref();

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user)
    }).catch((error) => {
        console.log(error.message)
    })
}
// Initialize Firebase


