import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, Text,
    TouchableOpacity,Keyboard,
    View, TextInput, Image} from 'react-native';
import Constant from '../../helper/themeHelper';
import {Header} from "../../commonComponents";

export default class Home extends Component {
    render() {
        const {textTitle} = style
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: Constant.color.blue}}>
                <Header/>
                <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: Constant.color.blackColor}}>
                    <Text style={textTitle}>Welcome to Luzy</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    textTitle:{
        fontSize:Constant.fontSize.xlarge,
        fontFamily:Constant.font.linateBold,
        color:Constant.color.white,
        textAlign: 'center'
    }
});