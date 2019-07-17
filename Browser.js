import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    Modal,
    StatusBar,
    ActivityIndicator,
    Alert,
    WebView,
    View
} from 'react-native';

import { NavigationPage, Theme} from 'teaset';
import NavigationBar from './NavigationBar'
import Back from './common/Back'

export default class Browser extends NavigationPage {

    leftBtn() {
        return <Back onPress={() => this.navigator.pop()}/>
    }

    renderLoading() {
        return <View style={{marginTop:10, backgroundColor: 'transparent'}}>
            <ActivityIndicator size='large' color={Theme.toastIconTintColor} style={{}}/>
        </View>
    }

    render() {
        var {title, url} = this.props
        return <View style={{flex: 1}}>
            {/*<StatusBar barStyle="default"/>*/}
            <NavigationBar title={title} left={this.leftBtn()}/>
            <View style={{height: 1, backgroundColor: '#f3f3f3',}}></View>
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
                <WebView
                    source={{uri: url}}
                    renderLoading={this.renderLoading}
                    // onLoadEnd={() => Alert.alert('onload end')}
                    // onError={() => Alert.alert('onerror')}
                    startInLoadingState={true}
                    // source={{html: '<h1>hello</h1>'}}
                    style={{}}
                />
            </View>
        </View>
    }

}

