"use strict";

const i18n = {
    "": "",
    wallet: "Wallet",
    wait: "Waiting...",
    scan: "Scan the Qrcode",
    accountManage: "Manage Wallet",
    createWallet: "Create Wallet",
    cancel: "Cancel",
    confirm: "Yes",
    del: "Delete",
    ok: "Ok",
    copy: "Copy",
    copyAddress: "Copy Address",
    copyTxId: "Copy TxId",
    copied: "Copied",
    pwd: "Password",
    enterPwd: "Please Enter password",
    pwdError: "Incorrect password",
    netError: "Network request timeout",
    noTxs: "No Records Yet!",
    gotoDetail: "More",
    tips: "Tips",
    sign: {
        title: "Sign",
        none: "None",
        balance: "Balance",
        address: "Sign Address",
        signMessage: "Sign Message",
        message: "Message",
        signSuccess: "Sign Success!",
        signFails: "Sign Fails!",
    },
    market: {
        title: "Market",
        assertName: "Name",
        lastPrice: "Price",
        change24: "Change",
    },
    dapp: {
        title: "Dapp",
        cannotEnter: "You can't access the dapp for now.",
    },
    bak: {
        title: "Backup the purse",
        desc1: "Very important: back up your wallet immediately!",
        desc2: "Back up your wallet: export/save to a safe place. Do not save it on the Internet. Then try to roll out and start using small assets."
    },
    launch: {
        create: "CREATE WALLET",
        import: "IMPORT WALLET",
        content1: "Private & Secure",
        content2: "Private keys never leave your device.",
        content3: "ERC721 Compatible",
        content4: "Support for ERC20、ERC721 tokens by default.",
        content5: "Fully transparent",
        content6: "Code is open sourced (GPL-3.0 license) and fully audited.",
        content7: "Ultra Reliable",
        content8: "The fastest Ethereum wallet experience on mobile.",
    },
    paymentCode: {
        title: "Payment code",
        copy: "Copy Address",
    },
    transfer: {
        title: "Transfer",
        success: "Transfer success",
        fails: "Transfer fails",
        to: "Receiver's wallet address.",
        value: "Transfer amount",
        fee: "Cost of miners",
        safeFee: "Safe Fee",
        slow: "Slow",
        fast: "Fast",
        currentBalance: "Balance：",
        gas: "Custom Gas",
        gasPrice: "Custom Gas Price",
        hex: "hex",
        advanced: "Advanced",
        next: "Next",
        detail: "Payment details",
        info: "Order information",
        toAddress: "To address",
        payAddress: "Payment wallet",
        amount: "Amount",
        pwd: "The wallet password",
        chooseToken: "Choose Token",
    },
    create: {
        title: "Create Wallet",
        name: "Wallet Name",
        pwd: "Password",
        pwdTips: "Password tips（option）",
        tips1: "Password users protect the private key and transaction authorization, the strength is very important.",
        tips2: "",
        enterName: "Please enter wallet name",
        pwdShort: "Password too short",
        walletMax: "You can only add up to 13 wallet addresses.",
    },
    import: {
        selectType: "Select Wallet Type",
        title: "Import Wallet",
        keystoreContent: "Keystore text content.",
        officialWallet: "Official Wallet",
        mnemonic: "Mnemonic",
        mnemonicContent: "Mnemonic, separated by space.",
        privKey: "Private key",
        privKey2: "Private key",
        tips0: "Directly copy and paste the mnemonic content to the input box. Or by generating a qr code for the content of the mnemonic, the scan is recorded.",
        tips: "Directly copy and paste the keystore file contents of the official wallet in yitai square to the input box. Or by generating a qr code for the keystore content, scanning the entry.",
        beginImport: "Begin import",
        error0: "The mnemonic format is not correct.",
        error1: "The import failed and the password was incorrect.",
        error2: "The import failed and the private key format was not correct.",
    },
    manage: {
        name: "Wallet Name",
        tips: "Password Tips",
        exportPrivKey: "Export Private key",
        exportKeystore: "Export Keystore",
        exportMnemonic: "Export Mnemonic",
        delWallet: "Delete Wallet",
        exporting: "Exporting...",
        delTips: "Confirm delete？",
        safeTips: "Security warning: the private key is not encrypted, the export is risky, and it is recommended to use mnemonic and Keystore for backup.",
        closeBakTips: "The wallet will not save the mnemonic, it will not be recovered after closing, please confirm that it has been backed up.",
    },
    txs: {
        send: "Send",
        receive: "Receive",
        title: "Transactions",
        detail: "Transaction Details",
        fails: "Transaction Fails",
        padding: "Padding",
        success: "Success",
    },
    tokens: {
        title: "Tokens",
        addToken: "Add Token",
        addFails: "Add Fails.",
        done: "Done",
        inputAddress: "Please enter a valid contract address.",
        inputName: "Please enter a Token name.",
        inputSymbol: "Please enter a Token symbol.",
        inputDecimals: "Decimals must be Numbers.",
        unread: "Unable to read Token, you can add it manually.",
    },
    settings: {
        account: "My Wallet",
        title: "Settings",
        network: "Network",
        language: "Language",
        support: "SUPPORT",
        share: "Share With Friends",
        email: "Email Us",
        learn: "LEARN MORE",
        faq: "FAQ",
        privacy: "Privacy Policy",
        service: "Terms of Service",
        version: "Version",
        selectLang: "Select Language",
        selectAccount: "Select Account",
        selectNetwork: "Select Network",
        cloudBackup: "Cloud Backup",
        backup1: "Backed up to iCloud.",
        backup2: "Not Backup",
        backup: "Backup",

    }
}

module.exports = i18n