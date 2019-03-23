import React from 'react';
import {View, Image, StatusBar, StyleSheet} from 'react-native';
import Constant from "../helper/themeHelper";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "../helper/responsiveUI";

const Header = () => {
    return (
        <View>
            <StatusBar backgroundColor={Constant.color.header} barStyle="light-content" />
            <View style={{...Constant.style.container, ...styles.container }}>
                <Image source={require('../assets/images/luzy_logo.png')}
                       style={{height: hp('5%'), // 70% of height device screen
                           width: wp('30%') }}
                       resizeMode={'contain'}/>
                <Image source={require('../assets/images/menu_icon.png')}
                       style={{height:hp('5%'), width:30}} resizeMode={'contain'}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constant.color.header,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: hp('0.5%'),
        paddingBottom: hp('2.3%')
    }
});

export {Header}