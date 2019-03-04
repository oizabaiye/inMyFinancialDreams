import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBoIQgeKDqA5IjFqbh7dcrfheSGLjHnDOY",
    authDomain: "inmyfinancialdreams.firebaseapp.com",
    databaseURL: "https://inmyfinancialdreams.firebaseio.com",
    projectId: "inmyfinancialdreams",
    storageBucket: "inmyfinancialdreams.appspot.com",
    messagingSenderId: "403923827922"
  };

firebase.initializeApp(config);

export default firebase;
