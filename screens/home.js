import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { ThemeContext } from '../theme/theme';
import transaction from "../constants/data";

const Home = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    const renderItems = ({ item }) => (
        <View style={styles.popularcard}>
            <View style={[styles.background,{ backgroundColor: theme.colors.imageBackground }]}>
                <Image source={item.image} style={styles.logo} />
            </View>
        <View style={styles.flexInfo}>
            <View style={styles.textInfo}>
                <Text style={[styles.headerText, { color: theme.colors.text }]}>{item.company}</Text>
                <Text style={styles.subText}>{item.category}</Text>
            </View>
            <View style={styles.popularInfo}>
                <Text style={[styles.salaryText, { color: theme.colors.text }]}>{item.transaction}</Text>
            </View>
        </View>
    </View>
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                {/* profile */}
            <View style={styles.profileHeader}>
                <View style={styles.profileFlex}>
                    <Image source={require('../assets/profile.png')} style={styles.profileImage}/>
                    <View>
                        <Text style={styles.headText}>Welcome Back</Text>
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

                <FlatList
                data={transaction}
                renderItem={renderItems}
                keyExtractor={item => item.id.toString()}
                horizontal={false}
                showsVerticalScrollIndicator={false}

                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginVertical: 60,
        marginHorizontal: 20,
        paddingBottom: 450
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
    headText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
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
    },
    flexItems: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
    },
    flexItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 120
    },
    popularcard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        gap: 17
    },
    logo: {
        width: 20,
        height: 20,
        // marginRight: 10,
        marginTop: 10,
        alignSelf: 'center',
        paddingVertical: 10
    },
    flexInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    textInfo: {
        flexDirection: 'column',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    subText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
    },
    popularInfo: {
        alignItems: 'flex-end',
    },
    salaryText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    listContentContainer: {
        paddingBottom: 100, 
    },

    background: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default Home;
