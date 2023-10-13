import React from 'react'
import { Login, PreHome, Register, Home, Scan, Like, Profile } from './screens'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='PreHome' component={PreHome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Scan' component={Scan} />
        <Stack.Screen name='Like' component={Like} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
