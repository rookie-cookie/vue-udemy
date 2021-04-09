import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBAhLsQopW9jdlkuGPp2HVhyoVknH4CzaU",
  authDomain: "turnout-a517c.firebaseapp.com",
  projectId: "turnout-a517c",
  storageBucket: "turnout-a517c.appspot.com",
  messagingSenderId: "959665258500",
  appId: "1:959665258500:web:2b691a531c2621b4853551",
  measurementId: "G-J25Y8E6HNC"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
