import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ThemeContext } from '../theme/theme';

const BottomNavigation = () => {
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigation();
    const route = useRoute();

    const getColor = (page) => (route.name === page ? 'blue' : '#818182');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/home.png')} style={styles.navIcon}/>
                <Text style={{ color: getColor('Home') }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyCards')}>
                <Image source={require('../assets/myCards.png')} style={styles.navIcon}/>
                <Text style={{ color: getColor('MyCards') }}>My Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
                <Image source={require('../assets/statistics.png')} style={styles.navIcon}/>
                <Text style={{ color: getColor('Statistics') }}>Statistics</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image source={require('../assets/settings.png')} style={styles.navIcon}/>
                <Text style={{ color: getColor('Settings') }}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        marginVertical: 10
    },
    navIcon: {
        alignSelf: 'center',
        marginBottom: 4,
    },
});

export default BottomNavigation;
