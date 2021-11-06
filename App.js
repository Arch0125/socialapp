import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppStackScreen from './src/stacks/AppStackScreen'

import firebase from 'firebase';


const firebaseConfig = {

  apiKey: "AIzaSyBgeslu1p8fs3k5mF6jBdaAb0euSNEknNE",

  authDomain: "socialapp-442d7.firebaseapp.com",

  projectId: "socialapp-442d7",

  storageBucket: "socialapp-442d7.appspot.com",

  messagingSenderId: "907131624813",

  appId: "1:907131624813:web:342a8657f1194905fa8e64"

};

firebase.initializeApp(firebaseConfig)



const App = () => {
  return (
    <NavigationContainer>
      <AppStackScreen/>
    </NavigationContainer>
  )
}

export default App


