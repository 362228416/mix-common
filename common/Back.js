import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native'

import {Theme} from 'teaset'

export default ({onPress, style}) => <TouchableOpacity onPress={onPress}><Text style={[{paddingLeft: 8, color: Theme.btnColor,fontFamily: 'iconfont', fontSize: 25, width: 60, padding: 8}, style]}>&#xe608;</Text></TouchableOpacity>