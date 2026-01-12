const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: getConfig("PREFIX") || process.env.PREFIX || ".",
    CHATBOT: getConfig("CHATBOT") || "on",
    BOT_NAME: getConfig("BOT_NAME") || process.env.BOT_NAME || "QADEER-AI",
    MODE: getConfig("MODE") || process.env.MODE || "public",
    REPO: process.env.REPO || "https://github.com/qadeermd/QADEER-AI",
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923300005253",
    OWNER_NAME: getConfig("OWNER_NAME") || process.env.OWNER_NAME || "QADEER-AI",
    DEV: process.env.DEV || "923300005253",
    DEVELOPER_NUMBER: '923300005253@s.whatsapp.net',

    // ===== AUTO STATUS SETTINGS (FIXED - NOW FROM DB) =====
    AUTO_STATUS_SEEN: getConfig("AUTO_STATUS_SEEN") || process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REACT: getConfig("AUTO_STATUS_REACT") || process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_REPLY: getConfig("AUTO_STATUS_REPLY") || process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_MSG: getConfig("AUTO_STATUS_MSG") || process.env.AUTO_STATUS_MSG || "*QADEER AI VIEWED YOUR STATUS 🤖*",

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: getConfig("AUTO_REPLY") || process.env.AUTO_REPLY || "false",
    READ_MESSAGE: getConfig("READ_MESSAGE") || process.env.READ_MESSAGE || "false",
    REJECT_MSG: process.env.REJECT_MSG || "*📞 CALL NOT ALLOWED 📵*",

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: getConfig("AUTO_REACT") || process.env.AUTO_REACT || "false",
    OWNER_REACT: getConfig("OWNER_REACT") || process.env.OWNER_REACT || "false",
    CUSTOM_REACT: getConfig("CUSTOM_REACT") || process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    STICKER_NAME: process.env.STICKER_NAME || "QADEER-AI",
    AUTO_STICKER: getConfig("AUTO_STICKER") || process.env.AUTO_STICKER || "false",

    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: getConfig("AUTO_RECORDING") || process.env.AUTO_RECORDING || "false",
    AUTO_TYPING: getConfig("AUTO_TYPING") || process.env.AUTO_TYPING || "false",
    MENTION_REPLY: getConfig("MENTION_REPLY") || process.env.MENTION_REPLY || "false",
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/2ozgh8.jpg",

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true",
    ANTI_CALL: getConfig("ANTI_CALL") || process.env.ANTI_CALL || "false",
    ANTI_BAD_WORD: getConfig("ANTI_BAD_WORD") || process.env.ANTI_BAD_WORD || "false",
    ANTI_LINK: getConfig("ANTI_LINK") || process.env.ANTI_LINK || "false",
    ANTI_VV: process.env.ANTI_VV || "true",
    DELETE_LINKS: getConfig("DELETE_LINKS") || process.env.DELETE_LINKS || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",
    ANTI_BOT: getConfig("ANTI_BOT") || process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*_© POWERED BY QADEER-AI*",
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    ALWAYS_ONLINE: getConfig("ALWAYS_ONLINE") || process.env.ALWAYS_ONLINE || "false",
    AUTO_BIO: getConfig("AUTO_BIO") || process.env.AUTO_BIO || "false",
    WELCOME: getConfig("WELCOME") || process.env.WELCOME || "false",
    GOODBYE: getConfig("GOODBYE") || process.env.GOODBYE || "false",
    ADMIN_ACTION: getConfig("ADMIN_ACTION") || process.env.ADMIN_ACTION || "false",
};
