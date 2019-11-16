import React, {Component} from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux'

import Store from './src/Store'
import { Header, CryptoContainer } from './src/components'


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={container}>
          <Header/>
          <CryptoContainer/>
        </View>
      </Provider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: "#FACECB"
  },
});

const { container } = styles



// AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });



