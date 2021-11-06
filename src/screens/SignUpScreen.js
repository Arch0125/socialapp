import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container} >
            <Text style={styles.heading} >Welcome to Socially</Text>
            <Text style={styles.subtitle}> Sign up to continue </Text>
            
            <View style={{paddingTop:"15%",marginLeft:"15%",marginRight:"15%"}} >
                <Text style={styles.inputtitle} >USERNAME</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={{paddingTop:"15%",marginLeft:"15%",marginRight:"15%"}} >
                <Text style={styles.inputtitle} >EMAIL</Text>
                <TextInput style={styles.input} />
            </View>

            <View style={{paddingTop:"15%",marginLeft:"15%",marginRight:"15%"}} >
                <Text style={styles.inputtitle} >PASSWORD</Text>
                <TextInput style={styles.input} secureTextEntry />
            </View>

            <TouchableOpacity style={styles.button} >
                <Text style={{color:"#FFF", fontSize:15}} >Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("SignIn")} style={{marginTop:"50%",alignSelf:"center"}} >
                <Text  >Already an user ?<Text style={{color:"#51a0d5"}}> Sign In</Text> </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen

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
        height:"5%",
        width:"65%",
        borderRadius:10,
        

    }
    

})

