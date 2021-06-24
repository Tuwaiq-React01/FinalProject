import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyABlghUzQps611KxHsyjRannqNBUJyu7a8",
    authDomain: "photo-gallery-801af.firebaseapp.com",
    databaseURL: "https://photo-gallery-801af.firebaseapp.com",
    projectId: "photo-gallery-801af",
    storageBucket: "photo-gallery-801af.appspot.com",
    messagingSenderId: "980455418105",
    appId: "1:980455418105:web:ea4b9109b7fa9029eada28"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;