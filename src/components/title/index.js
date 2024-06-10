import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Title(){
    return(
        <View style={styles.first}>
            <Text>All Right</Text>
        </View>
    );

}
const styles = StyleSheet.create({
    first:{
        textAlign: 'center'
    }
})