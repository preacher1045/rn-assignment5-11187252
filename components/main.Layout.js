import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigation from '../components/bottom.Navigation';

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {children}
            </View>
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});

export default MainLayout;
