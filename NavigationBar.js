"use strict";

import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    View
} from 'react-native';

import {
    NavigationBar,
    Theme
} from 'teaset'

import DarkTheme from './common/DarkTheme'

Theme.set ({fitIPhoneX: true});
Theme.set(DarkTheme)

export default class _NavigationBar extends Component<{}> {

    static propTypes = {
        // title: PropTypes.string,
        showBottomBorder: PropTypes.bool,
        left: PropTypes.element,
        right: PropTypes.element,
    }

    constructor() {
        super()
    }

    render() {
        var {title, left, right, showBottomBorder, style, titleColor} = this.props
        return <NavigationBar leftView={left} rightView={right} title={title} style={[{position: 'relative', borderBottomWidth: showBottomBorder ? 1: 0 }, style]} titleStyle={{color: titleColor || '#fff'}}/>
    }
}
