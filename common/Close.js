import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native'

import {Theme} from 'teaset'

export default ({onPress, style}) => <TouchableWithoutFeedback onPress={onPress} >
    <View style={{height: 26, width: 26}}><Text style={[{paddingLeft: 16, color: Theme.btnColor,fontFamily: 'iconfont', fontSize: 25, width: 50,}, style]}>&#xe849;</Text></View>
</TouchableWithoutFeedback>