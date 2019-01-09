import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import firebase from 'react-native-firebase';

export default class HomeScreen extends React.Component {
  state = { currentUser: null }

  static navigationOptions = {
    headerTitle: 'Home',
    headerRight: (
      <Button
        onPress={() => this.logout}
        title="Info"
        color="black"
      />
    ),
  };

  logout = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('Login')
  }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
    console.log(this.state)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          title="Go to Signup"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('SignUp', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
        <Button
          onPress={this.logout}
          title="Logout"
        />
      </View>
    );
  }
}