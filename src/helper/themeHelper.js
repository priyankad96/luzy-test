import { Platform, Dimensions, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

module.exports = {
    //API Constant
    color:{
        blackColor: '#02152a',
        white: '#ffffff',
        header:'#054993',
        text:'#054993',
        button:"#00cb6f3",
        blue:"#054993",
        lightblue:'#0cb6f3',
        facebook:"#3667b8",
        twitter:"#00a3f9",
        instragram:"#e50069",
        textInput:'#0a1d41',
        transparent:'transparent',
        lightGray:'#b5c8dd'
    },
    font:{
      linateBold: 'Linotte-Bold',
      linateHeavy: 'Linotte-Heavy',
      robotoRegular: 'Roboto-Regular',
      robotoBold: 'Roboto-Bold',

    },
    style:{
        container:{
            width: SCREEN_WIDTH * 0.85,
            alignSelf: 'center'
        }
    },
    screen: Dimensions.get('window'),
    isIOS: Platform.OS === "ios",
    isANDROID: Platform.OS === 'android',
    isiPAD: ((SCREEN_HEIGHT/SCREEN_WIDTH) < 1.6),

    screenHeight:  Platform.OS === 'ios' && SCREEN_HEIGHT || SCREEN_HEIGHT - 24,
    screenWidth:  SCREEN_WIDTH,
    fullScreenHeight:  SCREEN_HEIGHT,

    fontSize:{
        xmini: normalize(10),
        mini: normalize(12),
        small: normalize(15),
        medium: normalize(17),
        large: normalize(20),
        xlarge: normalize(30),
    },
};