import React, { useState } from 'react'
import { View, Text,StyleSheet,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SignUpScreen from './SignUpScreen'

const SignInScreen = ({navigation}) => {

    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    return (
        <View style={styles.container} >
            <Text style={styles.heading} >Welcome Back</Text>
            <Text style={styles.subtitle}> Sign in to continue </Text>
            <View style={{paddingTop:"15%",marginLeft:"15%",marginRight:"15%"}} >
                <Text style={styles.inputtitle} >EMAIL</Text>
                <TextInput style={styles.input}
                onChangeText={email => setEmail(email.trim())}
                value={email}
                />
            </View>

            <View style={{paddingTop:"15%",marginLeft:"15%",marginRight:"15%"}} >
                <Text style={styles.inputtitle} >PASSWORD</Text>
                <TextInput style={styles.input} secureTextEntry
                onChangeText={password => setPassword(password.trim())}
                value={password}
                />
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{color:"#FFF", fontSize:15}} >Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={{marginTop:"50%",alignSelf:"center"}} >
                <Text  >New to Socially ?<Text style={{color:"#51a0d5"}}  > Sign Up</Text> </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
        
    },
    heading:{
        fontSize:30,
        fontWeight:"100",
        color:"#51a0d5",
        alignSelf:"center"
        
    },
    subtitle:{
        fontSize:20,
        fontWeight:"100",
        color:"#51a0d5",
        alignSelf:"center"
    },
    inputtitle:{
        color:"#51a0d5",
    },
    input:{
        borderBottomColor:"#bcb4bc",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:30,
        fontSize:20,
        color:"#bcb4bc"
        
        
    },

    button:{
        marginTop:32,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#123966",
        height:"75%",
        width:"65%",
        borderRadius:10,
        

    }
    

})

