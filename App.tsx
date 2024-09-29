import { View, Text, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const value=useState(new Animated.ValueXY({x:0,y:0}))[0]

  function moveBall(){
    Animated.timing(value,{
      toValue:{x:100,y:100},
      duration:1000,
      useNativeDriver:false
    }).start()
  }
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View style={{height:100,width:100,backgroundColor:'#00704a',borderRadius:50}}/>
      </Animated.View>
      <TouchableOpacity onPress={moveBall}>
          <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App