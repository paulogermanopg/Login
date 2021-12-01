
import React from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Image, TouchableOpacity, Dimensions } from 'react-native'

export default function App(){

  return (
    <KeyboardAvoidingView style={styles.container}>

      <View style={styles.containerImageLogo}>
        <Image source={require('./assets/logo.png')} style={styles.imageLogo} />
      </View>

      <View style={styles.containerDados}>
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

      </View>

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
  imageLogo: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width *0.5,
    alignItems: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
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
