import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBpoht4UqQUVfohB2NZ41KN4KhYrUMwP0A",
  authDomain: "auth-demo-8cd73.firebaseapp.com",
  projectId: "auth-demo-8cd73",
  storageBucket: "auth-demo-8cd73.appspot.com",
  messagingSenderId: "524798790473",
  appId: "1:524798790473:web:cdefa5d112ff272f432898",
  measurementId: "G-0NWXEQKFKT"
})

export const auth = app.auth()
export default app
