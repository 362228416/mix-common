import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native'

import {Theme} from 'teaset'

export default ({onPress, color}) => <TouchableWithoutFeedback onPress={onPress} >
    <View><Text style={{paddingLeft: 16, color: color || Theme.btnColor,fontFamily: 'iconfont', fontSize: 28, width: 50,padding: 8}}>&#xe602;</Text></View>
</TouchableWithoutFeedback>