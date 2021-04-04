import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Booking from './Screens/Booking/Booking';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Booking />
      </>
    );
  }
}
