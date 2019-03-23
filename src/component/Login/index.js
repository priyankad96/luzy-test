import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Keyboard,
    View,
    TextInput,
    Image,
    Alert
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation'
import Constant from '../../helper/themeHelper';
import {Button, Header} from "../../commonComponents";
import {heightPercentageToDP as hp} from '../../helper/responsiveUI';
import {isValidEmail} from "../../helper/appHelper";


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailID: '',
            password: '',
            rememberMe: false,
            showPassword: false,
        }
    }

    onRememberMe = () => {
        this.setState({
            rememberMe: !this.state.rememberMe
        });
    };

    onShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    };

    onSocialMedia = (type) => {

    };

    onLogin = () => {
        const {emailID, password} = this.state
        Keyboard.dismiss();
        const {handleLocalAction, localActions} = this.props;
        handleLocalAction({type: localActions.LOGIN, emailID, password})
    };

    onForgotPassword = () => {

    };

    onEmailBlur = () => {
        if (this.refs.txtPassword) {
            this.refs.txtPassword.focus();
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userData && nextProps.userData[0] && nextProps.userData[0].Token) {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Home'})]
            }));
        } else {
            Alert.alert('Login Error')
        }
    }

    render() {
        const {
            container,
            textTitle,
            subTitle,
            inputIcon,
            inputRightIcon,
            socialIcon,
            inputLabel,
            textInput,
            inputContainer,
            bottomText,
            textContainer,
            rememberMeContainer
        } = styles;

        const {emailID, password, rememberMe, showPassword} = this.state;

        return (
            <SafeAreaView style={container}>
                <Header/>
                <View style={textContainer}>
                    <Text style={textTitle}>
                        {'SIGN IN'}
                    </Text>
                    <Text style={subTitle}>
                        {'with LUZY account.'}
                    </Text>
                    <View style={{width: Constant.screenWidth * 0.85, alignSelf: 'center'}}>
                        <Text style={inputLabel}>USERNAME:</Text>
                        <View style={inputContainer}>
                            <Image source={require('../../assets/images/placeholeder_email_icon.png')}
                                   style={inputIcon} resizeMode={'contain'}/>
                            <TextInput placeholder={'Your email address'}
                                       numberOfLines={1}
                                       ref={'txtEmail'}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       returnKeyType={'next'}
                                       placeholderTextColor={Constant.color.text}
                                       style={textInput}
                                       value={emailID}
                                       onChangeText={(emailID) => this.setState({emailID})}
                                       onSubmitEditing={this.onEmailBlur}
                                       underlineColorAndroid={Constant.color.transparent}
                            />
                            {
                                isValidEmail(emailID) &&
                                <Image source={require('../../assets/images/checked_icon.png')}
                                       style={inputRightIcon} resizeMode={'contain'}/>
                            }

                        </View>
                        <Text style={inputLabel}>PASSWORD:</Text>
                        <View style={inputContainer}>
                            <Image source={require('../../assets/images/placeholeder_password_icon.png')}
                                   style={inputIcon} resizeMode={'contain'}/>
                            <TextInput placeholder={'Your password'}
                                       numberOfLines={1}
                                       ref={'txtPassword'}
                                       placeholderTextColor={Constant.color.text}
                                       style={textInput}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       value={password}
                                       onChangeText={(password) => this.setState({password})}
                                       underlineColorAndroid={Constant.color.transparent}
                                       secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={this.onShowPassword}>
                                <Image
                                    source={showPassword && require('../../assets/images/show_password_on_icon.png') || require('../../assets/images/show_password_off_icon.png')}
                                    style={inputRightIcon} resizeMode={'contain'}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row', marginTop: 3,
                            marginBottom: hp('1.5%'), alignItems: 'center', justifyContent: 'space-between'
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={this.onRememberMe}>
                                    <View style={{
                                        ...inputRightIcon, ...rememberMeContainer,
                                        backgroundColor: rememberMe && Constant.color.lightblue || Constant.color.transparent
                                    }}>
                                        {
                                            rememberMe &&
                                            <Image
                                                source={require('../../assets/images/remember_me_checkmark_icon.png')}
                                                style={{height: '100%', width: '100%'}} resizeMode={'contain'}/>
                                        }

                                    </View>
                                </TouchableOpacity>
                                <Text style={[bottomText, {
                                    color: Constant.color.white,
                                    fontFamily: Constant.font.robotoRegular
                                }]}>
                                    {'Remember me'}</Text>
                            </View>
                            <Text style={[bottomText, {
                                color: Constant.color.white,
                                fontFamily: Constant.font.robotoRegular
                            }]}>
                                {'Forgot your password'}</Text>
                        </View>
                        <Button
                            containerStyle={{backgroundColor: Constant.color.lightblue}}
                            textStyle={{color: Constant.color.white}}
                            title={'LOGIN'}
                            onPress={this.onLogin}
                        />
                    </View>
                </View>

                <View style={{backgroundColor: Constant.color.blue, alignItems: 'center', paddingVertical: hp('2.5%')}}>
                    <Text style={textTitle}>
                        {'SIGN IN'}
                    </Text>
                    <Text style={subTitle}>
                        {'with your social media account.'}
                    </Text>
                    <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: hp('1.5%')}}>
                        <Image source={require('../../assets/images/facebook_icon.png')}
                               style={socialIcon} resizeMode={'contain'}/>
                        <Image source={require('../../assets/images/twitter_icon.png')}
                               style={[socialIcon, {marginHorizontal: 20}]} resizeMode={'contain'}/>
                        <Image source={require('../../assets/images/instagram_icon.png')}
                               style={socialIcon} resizeMode={'contain'}/>
                    </View>
                </View>

                <View style={{
                    backgroundColor: Constant.color.white,
                    flex: 1, paddingVertical: hp('2.5%')
                }}>
                    <View style={{...Constant.style.container, flex: 1}}>
                        <Text style={{...textTitle, color: Constant.color.text}}>
                            {'SIGN UP'}
                        </Text>
                        <Button
                            containerStyle={{backgroundColor: Constant.color.text}}
                            textStyle={{color: Constant.color.white}}
                            title={'CREATE ACCOUNT'}
                        />
                    </View>
                    <View style={{...Constant.style.container, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/about_us_icon.png')}
                                   style={inputRightIcon} resizeMode={'contain'}/>
                            <Text style={{...bottomText, fontFamily: Constant.font.robotoBold}}>
                                {'About us'}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../../assets/images/need_help_icon.png')}
                                   style={inputRightIcon}
                                   resizeMode={'contain'}/>
                            <Text style={{...bottomText, fontFamily: Constant.font.robotoBold}}>
                                {'Need help?'}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constant.color.header
    },
    textTitle: {
        fontSize: Constant.fontSize.xlarge,
        fontFamily: Constant.font.linateBold,
        color: Constant.color.white,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: Constant.fontSize.mini,
        fontFamily: Constant.font.robotoRegular,
        color: Constant.color.white,
        textAlign: 'center'
    },
    socialIcon: {
        height: hp('6%'),
        width: hp('6%'),
    },
    inputContainer: {
        backgroundColor: Constant.color.textInput,
        padding: hp('0.5%'),
        flexDirection: 'row',
        marginTop:
            3,
        borderRadius: 5,
        marginBottom: 15,
        alignItems: 'center'
    },
    textInput: {
        fontSize: Constant.fontSize.mini,
        fontFamily: Constant.font.robotoRegular,
        padding: hp('1%'),
        color: Constant.color.white, flex: 1
    },
    inputRightIcon: {
        height: hp('3%'),
        width: hp('3%')
    },
    inputIcon: {
        height: hp('4%'),
        width: hp('4%')
    },
    inputLabel: {
        fontSize: Constant.fontSize.mini,
        color: Constant.color.white,
        fontFamily: Constant.font.linateHeavy
    },
    bottomText: {
        fontSize: Constant.fontSize.mini,
        marginLeft: 5,
        color: Constant.color.lightGray,
        fontFamily: Constant.font.robotoBold
    },
    textContainer: {
        backgroundColor: Constant.color.blackColor,
        paddingVertical: hp('2.5%')
    },
    rememberMeContainer: {
        borderRadius: 5,
        borderColor: Constant.color.white,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2
    }
});
