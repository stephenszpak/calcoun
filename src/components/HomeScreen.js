import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends React.Component {
  state = { currentUser: null }

  static navigationOptions = {
    headerTitle: 'Buts',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="black"
      />
    ),
  };

  render() {
    const { currentUser } = this.state

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
      </View>
    );
  }
}