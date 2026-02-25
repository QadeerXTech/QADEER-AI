const fs = require('fs');
const path = require('path');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

let _getConfig;
try {
    _getConfig = require("./lib/configdb").getConfig;
} catch(e) {
    _getConfig = () => null;
}

function cfg(key, defaultVal) {
    const val = _getConfig(key);
    
    if (val === null || val === undefined || val === '') return process.env[key] || defaultVal;
    return val;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: cfg("PREFIX", "."),
    CHATBOT: cfg("CHATBOT", "on"),
    BOT_NAME: cfg("BOT_NAME", "QADEER-AI"),
    MODE: cfg("MODE", "public"),
    REPO: process.env.REPO || "https://github.com/qadeermd/QADEER-AI",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923300005253",
    OWNER_NAME: cfg("OWNER_NAME", "QADEER-AI"),
    DEV: process.env.DEV || "923300005253",
    DEVELOPER_NUMBER: '923300005253@s.whatsapp.net',

    // ===== AUTO STATUS SETTINGS =====
    
    AUTO_STATUS_SEEN:  cfg("AUTO_STATUS_SEEN",  "false"),
    AUTO_STATUS_REACT: cfg("AUTO_STATUS_REACT", "false"),
    AUTO_STATUS_REPLY: cfg("AUTO_STATUS_REPLY", "false"),
    AUTO_STATUS_MSG:   cfg("AUTO_STATUS_MSG",   "*QADEER AI VIEWED YOUR STATUS 🤖*"),

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY:   cfg("AUTO_REPLY",   "false"),
    READ_MESSAGE: cfg("READ_MESSAGE", "false"),
    REJECT_MSG:   process.env.REJECT_MSG || "*📞 CALL NOT ALLOWED 📵*",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT:          cfg("AUTO_REACT",          "false"),
    OWNER_REACT:         cfg("OWNER_REACT",         "false"),
    CUSTOM_REACT:        cfg("CUSTOM_REACT",         "false"),
    CUSTOM_REACT_EMOJIS: cfg("CUSTOM_REACT_EMOJIS", "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍"),
    STICKER_NAME:        process.env.STICKER_NAME || "QADEER-AI",
    AUTO_STICKER:        cfg("AUTO_STICKER", "false"),

    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: cfg("AUTO_RECORDING", "false"),
    AUTO_TYPING:    cfg("AUTO_TYPING",    "false"),
    MENTION_REPLY:  cfg("MENTION_REPLY",  "false"),
    MENU_IMAGE_URL: cfg("MENU_IMAGE_URL", "https://files.catbox.moe/2ozgh8.jpg"),

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE:  process.env.ANTI_DELETE  || "true",
    ANTI_CALL:    cfg("ANTI_CALL",    "false"),
    ANTI_BAD_WORD:cfg("ANTI_BAD_WORD","false"),
    ANTI_LINK:    cfg("ANTI_LINK",    "false"),
    ANTI_VV:      process.env.ANTI_VV || "true",
    DELETE_LINKS: cfg("DELETE_LINKS", "false"),
    ANTI_DEL_PATH:process.env.ANTI_DEL_PATH || "same",
    ANTI_BOT:     cfg("ANTI_BOT",     "true"),
    PM_BLOCKER:   process.env.PM_BLOCKER || "true",

    // ===== FUCK UHHH COPY CODERSX=====
    DESCRIPTION:   process.env.DESCRIPTION || "*_© POWERED BY QADEER-AI*",
    PUBLIC_MODE:   process.env.PUBLIC_MODE  || "true",
    ALWAYS_ONLINE: cfg("ALWAYS_ONLINE", "false"),
    AUTO_BIO:      cfg("AUTO_BIO",      "false"),
    WELCOME:       cfg("WELCOME",       "false"),
    GOODBYE:       cfg("GOODBYE",       "false"),
    ADMIN_ACTION:  cfg("ADMIN_ACTION",  "false"),
};
