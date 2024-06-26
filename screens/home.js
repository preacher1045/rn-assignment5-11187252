import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { ThemeContext } from '../theme/theme';

const Home = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                {/* profile */}
            <View style={styles.profileHeader}>
                <View style={styles.profileFlex}>
                    <Image source={require('../assets/profile.png')} style={styles.profileImage}/>
                    <View>
                        <Text style={styles.headerText}>Welcome Back</Text>
                        <Text style={[styles.subText, { color: theme.colors.text }]}>Eric Atsu</Text>
                    </View>
                </View>
                <View style={styles.search}>
                    <Image source={require('../assets/search.png')} style={styles.searchBtn}/>
                </View>
            </View>

                {/* Master__card__image */}
                <Image source={require('../assets/Card.png')} style={styles.masterCard}/>

                {/* processess */}
            <View style={styles.transFlex}>
                <View>
                    <View style={styles.processIcons}>
                        <Image source={require('../assets/send.png')} style={styles.centerIcon}/>
                    </View>
                    <Text style={[styles.centerIcon, { color: theme.colors.text }]}>Sent</Text>
                </View>
                <View>
                    <View style={styles.processIcons}>
                        <Image source={require('../assets/recieve.png')} style={styles.centerIcon}/>
                    </View>
                    <Text style={[styles.centerIcon,{ color: theme.colors.text }]}>Recieved</Text>
                </View>
                <View>
                    <View style={styles.processIcons}>
                        <Image source={require('../assets/loan.png')} style={styles.centerIcon}/>
                    </View>
                    <Text style={[styles.centerIcon,{ color: theme.colors.text }]}>Loan</Text>
                </View>
                <View>
                    <View style={styles.processIcons}>
                        <Image source={require('../assets/topUp.png')} style={styles.centerIcon}/>
                    </View>
                    <Text style={[styles.centerIcon,{ color: theme.colors.text }]}>Topup</Text>
                </View>
            </View>

                {/* transactions */}
            <View>
                <View style={styles.sectionFlex}>
                    <Text style={[styles.navText, { color: theme.colors.text }]}>Transactions</Text>
                    <Text style={styles.subText}>See All</Text>
                </View>

                {/* <FlatList
                data={transactions}
                renderItem={rendertransactions}
                keyExtractor={item => item.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 60,
        marginHorizontal: 20
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    profileFlex: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    headerText: {
        color: '#818182'
    },
    subText: {
        fontSize: 20,
        fontWeight: '500'
    },
    search: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#edeff2'
    },
    searchBtn: {
        alignSelf: 'center',
        marginVertical: 10
    },
    masterCard: {
        alignSelf: 'center'
    },
    transFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 30
    },
    sectionFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    processIcons: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#edeff2'
    },
    centerIcon: {
        alignSelf: 'center',
        marginVertical: 15
    }
});

export default Home;
