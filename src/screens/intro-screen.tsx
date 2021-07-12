import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import Fade from 'react-native-fade'

export const Intro = ({ navigation }) => {
    const [fadeIn, setFadeIn] = useState(false)

useEffect(() => {
    setTimeout(() => {
        setFadeIn(true)
    }, 2000)
},[])

  return (
    <View style={styles.container}>
        <Fade duration={2000} visible={fadeIn} direction={'down'}>
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
  },
  title:{
    color:'white',
    fontSize: 58,
    marginBottom: 48
  }
});
