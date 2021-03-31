import React from 'react'
import { View, Text } from 'react-native'

const Team = () => {
    return (
        <View>
            <View style={{alignItems:"center", backgroundColor:"#1d292b"}}>
                <Image 
                    style={styles.img}
                    source={require('../assets/icon.png')}
                />
            </View>
        </View>
    )
}

export default Team
