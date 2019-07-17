"use strict";

const images = {
    "0": require("../images/pic-icon/js_components_images_avatar1.png"),
    "1": require("../images/pic-icon/js_components_images_avatar2.png"),
    "2": require("../images/pic-icon/js_components_images_avatar3.png"),
    "3": require("../images/pic-icon/js_components_images_avatar4.png"),
    "4": require("../images/pic-icon/js_components_images_avatar5.png"),
    "5": require("../images/pic-icon/js_components_images_avatar6.png"),
    "6": require("../images/pic-icon/js_components_images_avatar7.png"),
    "7": require("../images/pic-icon/js_components_images_avatar8.png"),
    "8": require("../images/pic-icon/js_components_images_avatar9.png"),
    "9": require("../images/pic-icon/js_components_images_avatar10.png"),
    "10": require("../images/pic-icon/js_components_images_avatar11.png"),
    "11": require("../images/pic-icon/js_components_images_avatar12.png"),
    "12": require("../images/pic-icon/js_components_images_walletavatar.png"),
    "ethereum": require('../images/icon/ethereum.png'),
    "ethereum-token": require('../images/icon/ethereum-token.png'),
    "ifish-token": require('../images/icon/ifish.jpeg'),
    "eos": require('../images/icon/eos.png'),
}

module.exports = {
    get(key) {
        console.log(key);
        if (key && (key + '').indexOf('file://ethereum.png') !== -1) {
            return images['ethereum']
        }
        if (key && (key + '').indexOf('file://ifish-token.png') !== -1) {
            return images['ifish-token']
        }
        if (key && (key + '').indexOf('file://eos.png') !== -1) {
            return images['eos']
        }
        return images[key]
    }
}