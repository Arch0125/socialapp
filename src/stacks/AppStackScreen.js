import React from 'react'
import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import AuthStackScreen from './AuthStackScreen'

const AppStackScreen = () => {
    const AppStack = createStackNavigator()
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Auth" component={AuthStackScreen}/>
        </AppStack.Navigator>
        
    )
}

export default AppStackScreen
