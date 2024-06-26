import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
    return (
        <TouchableOpacity
        style={[styles.switch, value ? styles.switchOn : styles.switchOff]}
        onPress={onValueChange}
        >
        <View style={[styles.thumb, value ? styles.thumbOn : styles.thumbOff]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switch: {
        width: 50,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 2,
    },
    switchOn: {
        backgroundColor: '#64f70f',
    },
    switchOff: {
        backgroundColor: '#767577',
    },
    thumb: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#f4f3f4',
        position: 'absolute',
    },
    thumbOn: {
        left: 22,
        backgroundColor: '#ffff',
    },
    thumbOff: {
        left: 2,
    },
});


export default CustomSwitch;
