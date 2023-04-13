import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Formacao = ({ navigation }) => {
    return (
        <View>
            <Text>Formação</Text>
        </View>
    );
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
          justifyContent: 'start',
        },
        titulo: {
        backgroundColor: '#ff69B4',
          padding: 10,
          borderRadius: 5
        }      
})};

export default Formacao;