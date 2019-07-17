import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    TextInput,
    RefreshControl,
    Button,
    TouchableOpacity,
    ScrollView,
    NavigatorIOS,
    Modal,
    Alert,
    TouchableWithoutFeedback,
    StatusBar,
    Dimensions,
    View
} from 'react-native';

import Images from './Images'

export default Icon = ({ico}) => {
    if (ico && ico.indexOf('http') !== -1) {
        return <Image source={{uri: ico, width: 29, height: 29}}></Image>
    }
    if (ico && ico.indexOf('file://ethereum.png') !== -1) {
        return <Image source={Images.get('ethereum')} style={{width: 29, height: 29}}></Image>
    }
    if (ico && ico.indexOf('file://ifish-token.png') !== -1) {
        return <Image source={Images.get('ifish-token')} style={{width: 29, height: 29}}></Image>
    }
    if (ico && ico.indexOf('file://eos.png') !== -1) {
        return <Image source={Images.get('eos')} style={{width: 29, height: 29}}></Image>
    }
    return <Image source={Images.get('ethereum-token')} style={{width: 29, height: 29}}></Image>
}