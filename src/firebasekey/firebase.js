import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDVFfLQoAVa1DfNvKWvQIAdwqgOuVNxgLo',
  authDomain: 'webmap-18f07.firebaseapp.com',
  databaseURL: 'https://webmap-18f07.firebaseio.com',
  projectId: 'webmap-18f07',
  storageBucket: 'webmap-18f07.appspot.com',
  messagingSenderId: '1069585918532',
  appId: '1:1069585918532:web:01554544731df2e7b16a11'
}
// Initialize Firebaseeport
export default () => {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
  firebase.firestore()
}
// let database = firebase.database();
