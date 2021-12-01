
import React, { useState, useEffect } from 'react'
import { 
  StyleSheet, Text, TextInput, 
  View, KeyboardAvoidingView, 
  Image, TouchableOpacity, Dimensions, 
  Animated, Keyboard
} from 'react-native'

export default function App(){

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ 
    x: Dimensions.get('window').width * 0.5, 
    y: Dimensions.get('window').width * 0.5 }))

  useEffect(() => {
    keyboardDidShowListener =  Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener =  Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      })

    ]).start()

  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      
      Animated.timing(logo.x, {
        toValue: Dimensions.get('window').width * 0.3,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: Dimensions.get('window').width * 0.3,
        duration: 100,
      })

    ]).start()
  }

  function keyboardDidHide() {
    Animated.parallel([
      
      Animated.timing(logo.x, {
        toValue: Dimensions.get('window').width * 0.5,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: Dimensions.get('window').width * 0.5,
        duration: 100,
      })

    ]).start()
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.containerImageLogo}>
        <Animated.Image source={require('./assets/logo.png')} 
          style={{
            width: logo.x,
            height: logo.y,
            resizeMode: 'contain',
          }} />
      </View>

      <Animated.View 
        style={[
          styles.containerDados,
          {
            opacity: opacity,
            transform: [
              {translateY: offset.y}
            ]
          }
        ]}
      >
        <TextInput 
          placeholder='E-mail'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />

        <TextInput 
          placeholder='Senha'
          autoCorrect={false}
          onChangeText={() => {}}
          style={styles.input}
        />

        <TouchableOpacity style={styles.botaoLogin}>
          <Text style={styles.loginText}>
            Faça Login!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoRegistrar}>
          <Text style={styles.registrarText}>
            Seja Loginner!
          </Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#24425c'
  },
  containerImageLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  containerDados: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 30
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 16,
    borderRadius: 10,
    padding: 10
  },
  botaoLogin: {
    backgroundColor: '#789ac7',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  botaoRegistrar: {
    marginTop: 10
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  registrarText: {
    color: '#fff'
  }
})
