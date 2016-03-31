import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native';

import {Motion, spring} from 'react-motion';

var Icon = require('react-native-vector-icons/FontAwesome');
var myIcon = (<Icon name="rocket" size={20} color="#900" />);

export default class App extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  _onPress() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome  React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        {myIcon}

        <TouchableWithoutFeedback>
          <View style={{backgroundColor: 'blue', height: 20, width: 100}}>
            <View style={{backgroundColor: 'red', height: 20, width: 20, left: 80 }}></View>
          </View>
        </TouchableWithoutFeedback>

        <Motion defaultStyle={{x: 0}} style={{x: spring(this.state.open? 80 : 0, {stiffness: 150, damping: 20})}}>
          {
            ({x}) =>
              <TouchableHighlight onPress={this._onPress.bind(this)}>
                <View style={{backgroundColor: 'blue', height: 20, width: 100}}>
                  <View style={{
                    backgroundColor: 'red',
                    height: 20,
                    width: 20,
                    left: x,
                  }}/>
                </View>
              </TouchableHighlight>
          }
        </Motion>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
