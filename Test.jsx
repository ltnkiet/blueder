import React, { Component } from 'react'
import {  Text, View } from "react-native";

export default class Test extends Component {
  render() {
    let number = 6;
    return (
      <View>
        <View style={{height: 20}}></View>
        <Text>{number > 5 ? 'Greater than 5' : 'Less than 5'}</Text>
        {[...Array(number)].map((x, i) => 
          <Text>{i+1}</Text>
        )}
      </View>
    )
  }
}
