import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import { ThemeContext } from '../theme/theme';
import CustomSwitch from "../components/custom.Switch";

const Settings = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(theme.dark);

    useEffect(() => {
        setIsEnabled(theme.dark);
    }, [theme]);

    const toggleSwitch = () => {
        toggleTheme();
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.header,{ color: theme.colors.text }]}>Settings</Text>

            <View style={styles.subContainer}>
                <View style={styles.settingsFlex}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>Languages</Text>
                    <Image source={require("../assets/arrow-right.png")} style={styles.arrowIcon}/>
                </View>
                <View style={styles.settingsFlex}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>My Profile</Text>
                    <Image source={require("../assets/arrow-right.png")} style={styles.arrowIcon}/>
                </View>
                <View style={styles.settingsFlex}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>Contact Us</Text>
                    <Image source={require("../assets/arrow-right.png")} style={styles.arrowIcon}/>
                </View>
                <View style={styles.settingsFlex}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>Change Password</Text>
                    <Image source={require("../assets/arrow-right.png")} style={styles.arrowIcon}/>
                </View>
                <View style={styles.settingsFlex}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>Privacy Policy</Text>
                    <Image source={require("../assets/arrow-right.png")} style={styles.arrowIcon}/>
                </View>

                <View style={styles.toggle}>
                    <Text style={[styles.linkText,{ color: theme.colors.text }]}>Theme</Text>
                    <CustomSwitch value={isEnabled} onValueChange={toggleSwitch} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 50,
        marginHorizontal: 20
    },
    header: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '500'
    },
    subContainer: {
        marginVertical: 20
    },
    settingsFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 17,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    arrowIcon: {
        width: 25,
        height: 25
    },
    linkText: {
        fontSize: 20,
        fontWeight: '600'
    },
    toggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
});

export default Settings;
