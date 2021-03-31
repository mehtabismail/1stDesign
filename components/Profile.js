import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import Team from './Team';

class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: ["Mehtab", "Ahmed", "Moiz", "Awais", "Yasir",
                "Zia"
            ]
        }
    }


    render() {
        return (
            <View style={styles.root}>
                <LinearGradient
                    colors={["#5182f5", "#bf266d"]}
                    style={{ height: "40%" }}
                >
                </LinearGradient>
                <View style={{ alignItems: "center" }}>
                    <View style={{padding:"2%"}}>
                        <Image
                            style={styles.img}
                            source={require('../assets/FB.png')}
                        />
                    </View>
                    
                </View>
                <View style={{ alignItems: "center", margin: 15, marginTop: -130 }}>
                    <Title>
                        Team #6
                    </Title>
                    <Text style={{ fontSize: 15 }}>
                        Lorem ipsum
                    </Text>
                </View>
                <View style={styles.participate}>
                    <Text style={styles.participateText}>
                        Participate
                    </Text>
                </View>
                

                <View>

                    <FlatList
                        style={{ alignSelf: "center", marginTop: 20, marginLeft: 20, marginRight: 20 }}
                        data={this.state.students}
                        numColumns={3}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ margin: "2%" }}>
                                    <Image
                                        style={styles.img2}
                                        source={require('../assets/mehtab.png')}
                                    />
                                    <Text style={{ fontSize: 15, textAlign: "center" }}>
                                        {item}
                                    </Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <View >
                    <TouchableOpacity style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>Got It</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

export default Profile;

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        overflow: "hidden",
        marginTop: -220,
        borderColor:"black",
        borderWidth: 1
        
    },
    participate: {
        backgroundColor: "white",
        width: "100%",
        height: 80,
        borderRadius: 80 / 2,
        marginTop: 25
    },
    participateText: {
        margin: "7%",
        fontWeight: "bold",
        fontSize: 20
    },
    img2: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2
    },
    appButtonContainer: {
        backgroundColor: "#cf5bc3",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginHorizontal:"6%",
        marginTop:30
      },
      appButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});
