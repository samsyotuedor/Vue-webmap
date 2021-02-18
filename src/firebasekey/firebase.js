import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
// Your web app's Firebase configuration

// Initialize Firebaseeport
export default () => {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}
// let database = firebase.database();
