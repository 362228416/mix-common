import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    Text,
    View,
} from 'react-native'

import {Theme} from 'teaset'

export default ({onPress, style}) => <TouchableWithoutFeedback onPress={onPress} >
    <View><Text style={[{paddingLeft: 16, color: Theme.btnColor,fontFamily: 'iconfont', fontSize: 28, width: 50,padding: 8}, style]}>&#xe632;</Text></View>
</TouchableWithoutFeedback>