import React from "react";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBqXhEfpy4muJYomRIC2FbNvrinGTGESa4",
  authDomain: "housam-chat-app.firebaseapp.com",
  projectId: "housam-chat-app",
  storageBucket: "housam-chat-app.appspot.com",
  messagingSenderId: "124461159559",
  appId: "1:124461159559:web:3112056f8616af218d1422",
  measurementId: "G-42FFH04J9Z",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState();

  return (
    <div className="App">
      <header className="App-header"></header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
