"use strict";

import cn from './cn'
import en from './en'

export default function getLang(lang) {
    if (lang === "en") {
        return en
    }
    return cn
}