import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Transaction extends Component {
  render() {
    return (
        <View>
        <Text>
            Issue or Return
        </Text>
        <TouchableOpacity>
          Scan QR Code
        </TouchableOpacity>
    </View>
    )
  }
}