import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import Fade from 'react-native-fade'
import  bg  from '../assets/img/bg.jpg'

export const Intro = ({ navigation }) => {
    const [fadeIn, setFadeIn] = useState(false)

useEffect(() => {
    setTimeout(() => {
        setFadeIn(true)
    }, 2000)
})

  return (
    <View style={styles.container}>
        <Image style={styles.bg} source={bg} />
        <Fade duration={2000} visible={fadeIn} direction={'up'}>
            <Text style={styles.title}>My App</Text>
        </Fade>
      
      <TouchableOpacity onPress={() =>
            navigation.navigate('Home')
          }>
            <ActivityIndicator color="white" size={42} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c4ff1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex:2
  },
  title:{
    color:'white',
    fontSize: 58,
    marginBottom: 48,
  },
  bg:{
      position: 'absolute',
      opacity: 0.5,
      width: '100%',
      height: '100%',
      left:0,
      top:0,
      zIndex: 0
  }
});
