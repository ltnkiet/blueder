import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Profile from './Profile'
import Like from './Like'
import Scan from './Scan'

// Import Icon
import { Foundation, FontAwesome } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator()

export default function Home() {
  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName='Scan'
      activeColor='#000AFFE0'
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name='Like'
        component={Like}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <Foundation name='heart' size={30} color={'#F55858'} />
            }
            return <Foundation name='heart' size={28} />
          }

        }}
      />
      <Tab.Screen
        name='Scan'
        component={Scan}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome name='home' size={32} color={color} />
            }
            return <FontAwesome name='home' size={30} />
          }
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, focused }) => {
            if (focused) {
              return <FontAwesome name='user' size={32} color={'#FFEC40'} />

            }
            return <FontAwesome name='user' size={30} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
