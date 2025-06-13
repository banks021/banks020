const {
  default: makeWASocket,
  fetchLatestBaileysVersion,
  downloadContentFromMessage,
  useMultiFileAuthState,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("baileys");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const axios = require("axios");
const fetch = require("node-fetch");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./system/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./system/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require("./system/myfunc");
let afk = require("./system/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser
} = require("./system/premiun");
const {
  fetchBuffer,
  buffergif
} = require("./system/myfunc2");
let premium = JSON.parse(fs.readFileSync("./system/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./system/owner.json"));
let owner = JSON.parse(fs.readFileSync("./system/owner.json"));
let _afk = JSON.parse(fs.readFileSync("./system/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./system/total-hit-user.json"));
const VoiceNoteXeon = JSON.parse(fs.readFileSync("./system/autoreply/vn.json"));
const StickerXeon = JSON.parse(fs.readFileSync("./system/autoreply/sticker.json"));
const ImageXeon = JSON.parse(fs.readFileSync("./system/autoreply/image.json"));
const VideoXeon = JSON.parse(fs.readFileSync("./system/autoreply/video.json"));
const DocXeon = JSON.parse(fs.readFileSync("./system/autoreply/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync("./system/autoreply/zip.json"));
const ApkXeon = JSON.parse(fs.readFileSync("./system/autoreply/apk.json"));
const xtime = moment.tz("Asia/Karachi").format("HH:mm:ss");
const xdate = moment.tz("Asia/Karachi").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Karachi").format("HH:mm:ss");
if (time2 < "23:59:00") {
  var timewisher = "Good Night 🌌";
}
if (time2 < "19:00:00") {
  var timewisher = "Good Evening 🌃";
}
if (time2 < "18:00:00") {
  var timewisher = "Good Evening 🌃";
}
if (time2 < "15:00:00") {
  var timewisher = "Good Afternoon 🌅";
}
if (time2 < "11:00:00") {
  var timewisher = "Good Morning 🌄";
}
if (time2 < "05:00:00") {
  var timewisher = "Good Morning 🌄";
}
module.exports = IconicTechInc = async (_0x4acc2b, _0xcac50f, _0x38c6a7, _0x2f9763, _0x34a436) => {
  try {
    const {
      type: _0x47641f,
      quotedMsg: _0x2bd4c0,
      mentioned: _0x304ea4,
      now: _0x17ac4b,
      fromMe: _0x521759
    } = _0xcac50f;
    var _0x3c4c7a = _0xcac50f.mtype === "conversation" ? _0xcac50f.message.conversation : _0xcac50f.mtype == "imageMessage" ? _0xcac50f.message.imageMessage.caption : _0xcac50f.mtype == "videoMessage" ? _0xcac50f.message.videoMessage.caption : _0xcac50f.mtype == "extendedTextMessage" ? _0xcac50f.message.extendedTextMessage.text : _0xcac50f.mtype == "buttonsResponseMessage" ? _0xcac50f.message.buttonsResponseMessage.selectedButtonId : _0xcac50f.mtype == "listResponseMessage" ? _0xcac50f.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : _0xcac50f.mtype == "templateButtonreplyglobalMessage" ? _0xcac50f.message.templateButtonreplyglobalMessage.selectedId : _0xcac50f.mtype === "messageContextInfo" ? _0xcac50f.message.buttonsResponseMessage?.selectedButtonId || _0xcac50f.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || _0xcac50f.text : "";
    var _0x13ab46 = typeof _0xcac50f.text == "string" ? _0xcac50f.text : "";
    var _0x2b6114 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x3c4c7a) ? _0x3c4c7a.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix;
    const _0x59dd4b = _0x3c4c7a.replace(_0x2b6114, "").trim().split(/ +/).shift().toLowerCase();
    const _0x55fa2c = _0x3c4c7a.trim().split(/ +/).slice(1);
    const _0x1f435e = _0xcac50f.pushName || "No Name";
    const _0x27f14a = await _0x4acc2b.decodeJid(_0x4acc2b.user.id);
    const _0x29b327 = _0xcac50f.sender;
    const _0x3ed79d = q = _0x55fa2c.join(" ");
    const _0x704fdd = _0xcac50f.key.remoteJid;
    const _0x59cc4e = _0xcac50f.quoted || _0xcac50f;
    const _0x34c37d = _0x59cc4e.mtype == "buttonsMessage" ? _0x59cc4e[Object.keys(_0x59cc4e)[1]] : _0x59cc4e.mtype == "templateMessage" ? _0x59cc4e.hydratedTemplate[Object.keys(_0x59cc4e.hydratedTemplate)[1]] : _0x59cc4e.mtype == "product" ? _0x59cc4e[Object.keys(_0x59cc4e)[0]] : _0xcac50f.quoted ? _0xcac50f.quoted : _0xcac50f;
    const _0x2c1069 = (_0x34c37d.msg || _0x34c37d).mimetype || "";
    const _0x2da85d = _0x34c37d.msg || _0x34c37d;
    const _0x18bc87 = _0x47641f == "videoMessage";
    const _0x44142f = afk.checkAfkUser(_0xcac50f.sender, _afk);
    const _0x580b5d = _0xcac50f.isGroup ? await _0x4acc2b.groupMetadata(_0xcac50f.chat).catch(_0x1c2206 => {}) : "";
    const _0x2892e9 = _0xcac50f.isGroup ? _0x580b5d.subject : "";
    const _0x3fb304 = _0xcac50f.isGroup ? await _0x580b5d.participants : "";
    const _0x2c1e37 = _0xcac50f.isGroup ? await getGroupAdmins(_0x3fb304) : "";
    const _0x92a98a = _0xcac50f.isGroup ? _0x2c1e37.includes(_0x27f14a) : false;
    const _0x5f33dd = _0xcac50f.isGroup ? _0x2c1e37.includes(_0xcac50f.sender) : false;
    const _0x295fd4 = _0xcac50f.isGroup ? _0x580b5d.owner : "";
    const _0x16ab21 = _0xcac50f.isGroup ? (_0x295fd4 ? _0x295fd4 : _0x2c1e37).includes(_0xcac50f.sender) : false;
    const _0x1b25de = [ownernumber, ..._owner].map(_0x37def9 => _0x37def9.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0xcac50f.sender);
    const _0x26473a = _0x1b25de || _0x1b25de || checkPremiumUser(_0xcac50f.sender, premium);
    expiredCheck(_0x4acc2b, _0xcac50f, premium);
    const _0x694d65 = _0x15c8e1 => {
      _0x4acc2b.sendMessage(_0xcac50f.chat, {
        text: _0x15c8e1,
        contextInfo: {
          mentionedJid: [_0x29b327],
          forwardingScore: 9999999,
          isForwarded: true,
          externalAdReply: {
            showAdAttribution: true,
            containsAutoReply: true,
            title: " " + global.botname,
            body: "" + ownername,
            previewType: "PHOTO",
            thumbnailUrl: "",
            thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
            sourceUrl: "" + link
          }
        }
      }, {
        quoted: _0xcac50f
      });
    };
    async function _0x48635a(_0x5c15a5) {
      return new Promise(async (_0x135347, _0x3af3e4) => {
        if (!_0x5c15a5.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
          return _0x694d65("Enther your url telegram sticker link");
        }
        packName = _0x5c15a5.replace("https://t.me/addstickers/", "");
        data = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=" + encodeURIComponent(packName), {
          method: "GET",
          headers: {
            "User-Agent": "GoogleBot"
          }
        });
        const _0x757809 = [];
        for (let _0x4c127e = 0; _0x4c127e < data.data.result.stickers.length; _0x4c127e++) {
          fileId = data.data.result.stickers[_0x4c127e].thumb.file_id;
          data2 = await axios("https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=" + fileId);
          result = {
            status: 200,
            author: "DGXeon",
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
          };
          _0x757809.push(result);
        }
        _0x135347(_0x757809);
      });
    }
    async function _0x2d43c1() {
      var _0x24db47 = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."];
      let {
        key: _0x393140
      } = await _0x4acc2b.sendMessage(_0x704fdd, {
        text: "ʟᴏᴀᴅɪɴɢ..."
      });
      for (let _0x14b644 = 0; _0x14b644 < _0x24db47.length; _0x14b644++) {
        await _0x4acc2b.sendMessage(_0x704fdd, {
          text: _0x24db47[_0x14b644],
          edit: _0x393140
        });
      }
    }
    if (!_0x4acc2b.public) {
      if (!_0x1b25de && !_0xcac50f.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x4acc2b.readMessages([_0xcac50f.key]);
    }
    if (global.autoTyping) {
      _0x4acc2b.sendPresenceUpdate("composing", _0x704fdd);
    }
    if (global.autoRecording) {
      _0x4acc2b.sendPresenceUpdate("recording", _0x704fdd);
    }
    _0x4acc2b.sendPresenceUpdate("uavailable", _0x704fdd);
    if (global.autorecordtype) {
      let _0x454f41 = ["recording", "composing"];
      let _0x45c73a = _0x454f41[Math.floor(Math.random() * _0x454f41.length)];
      _0x4acc2b.sendPresenceUpdate(_0x45c73a, _0x704fdd);
    }
    if (autobio) {
      try {
        const {
          data: _0x78e192
        } = await axios.get("https://api.popcat.xyz/fact");
        const _0x125352 = _0x78e192?.fact || "Technology connects us all";
        await _0x4acc2b.updateProfileStatus("Fact: " + _0x125352 + " ~ Queen Ruva AI Beta").catch(_0x41a46f => _0x41a46f);
      } catch {
        await _0x4acc2b.updateProfileStatus("Active WhatsApp Bot | Created by " + ownername + " ~ Queen Ruva AI Beta").catch(_0x2f4ebe => _0x2f4ebe);
      }
    }
    if (_0xcac50f.sender.startsWith("91") && global.anti91 === true) {
      return _0x4acc2b.updateBlockStatus(_0xcac50f.sender, "block");
    }
    let _0xf4f160 = [];
    for (let _0x1ace94 of owner) {
      _0xf4f160.push({
        displayName: await _0x4acc2b.getName(_0x1ace94),
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x4acc2b.getName(_0x1ace94)) + "\nFN:" + (await _0x4acc2b.getName(_0x1ace94)) + "\nitem1.TEL;waid=" + _0x1ace94 + ":" + _0x1ace94 + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    if (_0xcac50f.message && _0xcac50f.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x13ab46 || _0xcac50f.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x1f435e), chalk.yellow(_0xcac50f.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x2892e9, _0xcac50f.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x13ab46 || _0xcac50f.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0x1f435e), chalk.yellow(_0xcac50f.sender));
    }
    if (_0x59dd4b) {
      const _0x4fa83d = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./system/total-hit-user.json", JSON.stringify(hit));
      };
      _0x4fa83d();
    }
    for (let _0x26578b of VoiceNoteXeon) {
      if (_0x13ab46 === _0x26578b) {
        let _0x51d84c = fs.readFileSync("./BanksMedia/audio/" + _0x26578b + ".mp3");
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          audio: _0x51d84c,
          mimetype: "audio/mp4",
          ptt: true
        }, {
          quoted: _0xcac50f
        });
      }
    }
    for (let _0x3cbcd9 of StickerXeon) {
      if (_0x13ab46 === _0x3cbcd9) {
        let _0x434baf = fs.readFileSync("./BanksMedia/sticker/" + _0x3cbcd9 + ".webp");
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          sticker: _0x434baf
        }, {
          quoted: _0xcac50f
        });
      }
    }
    for (let _0x514a92 of ImageXeon) {
      if (_0x13ab46 === _0x514a92) {
        let _0x5aa1bd = fs.readFileSync("./BanksMedia/image/" + _0x514a92 + ".jpg");
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          image: _0x5aa1bd
        }, {
          quoted: _0xcac50f
        });
      }
    }
    for (let _0x144b0b of VideoXeon) {
      if (_0x13ab46 === _0x144b0b) {
        let _0x144c9f = fs.readFileSync("./BanksMedia/video/" + _0x144b0b + ".mp4");
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          video: _0x144c9f
        }, {
          quoted: _0xcac50f
        });
      }
    }
    const _0x3ba222 = _0x85c901 => {
      _0x4acc2b.sendMessage(_0x704fdd, {
        document: _0x85c901,
        mimetype: "application/vnd.android.package-archive"
      }, {
        quoted: _0xcac50f
      });
    };
    for (let _0x568226 of ApkXeon) {
      if (_0x13ab46 === _0x568226) {
        let _0x38b4f5 = fs.readFileSync("./BanksMedia/apk/" + _0x568226 + ".apk");
        _0x3ba222(_0x38b4f5);
      }
    }
    const _0xd0f036 = _0x3b3bf5 => {
      _0x4acc2b.sendMessage(_0x704fdd, {
        document: _0x3b3bf5,
        mimetype: "application/zip"
      }, {
        quoted: _0xcac50f
      });
    };
    for (let _0xd45db0 of ZipXeon) {
      if (_0x13ab46 === _0xd45db0) {
        let _0x609a0b = fs.readFileSync("./BanksMedia/zip/" + _0xd45db0 + ".zip");
        _0xd0f036(_0x609a0b);
      }
    }
    const _0x46ad3c = _0x30d4dd => {
      haikal.sendMessage(_0x704fdd, {
        document: _0x30d4dd,
        mimetype: "application/pdf"
      }, {
        quoted: _0xcac50f
      });
    };
    for (let _0x16b1bc of DocXeon) {
      if (_0x13ab46 === _0x16b1bc) {
        let _0x31f694 = fs.readFileSync("./BanksMedia/doc/" + _0x16b1bc + ".pdf");
        _0x46ad3c(_0x31f694);
      }
    }
    if (_0xcac50f.isGroup && !_0xcac50f.key.fromMe) {
      let _0x554b5c = [...new Set([...(_0xcac50f.mentionedJid || []), ...(_0xcac50f.quoted ? [_0xcac50f.quoted.sender] : [])])];
      for (let _0x1e32e8 of _0x554b5c) {
        if (afk.checkAfkUser(_0x1e32e8, _afk)) {
          let _0x1b323b = afk.getAfkId(_0x1e32e8, _afk);
          let _0x32d932 = afk.getAfkReason(_0x1b323b, _afk);
          _0x694d65("Don't tag him, he's afk\n\n*Reason :* " + _0x32d932);
        }
      }
      if (afk.checkAfkUser(_0xcac50f.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0xcac50f.sender, _afk), 1);
        fs.writeFileSync("./system/afk-user.json", JSON.stringify(_afk));
        _0x4acc2b.sendTextWithMentions(_0xcac50f.chat, "@" + _0xcac50f.sender.split("@")[0] + " have returned from afk", _0xcac50f);
      }
    }
    switch (_0x59dd4b) {
      case "addprem":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 2) {
          return _0x694d65("Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d");
        }
        if (_0xcac50f.mentionedJid.length !== 0) {
          for (let _0x1c3fd8 = 0; _0x1c3fd8 < _0xcac50f.mentionedJid.length; _0x1c3fd8++) {
            addPremiumUser(_0xcac50f.mentionedJid[0], _0x55fa2c[1], premium);
          }
          _0x694d65("Premium Success");
        } else {
          addPremiumUser(_0x55fa2c[0] + "@s.whatsapp.net", _0x55fa2c[1], premium);
          _0x694d65("Success");
        }
        break;
      case "delprem":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Use :\n*#delprem* @tag\n*#delprem* number");
        }
        if (_0xcac50f.mentionedJid.length !== 0) {
          for (let _0x3778a5 = 0; _0x3778a5 < _0xcac50f.mentionedJid.length; _0x3778a5++) {
            premium.splice(getPremiumPosition(_0xcac50f.mentionedJid[_0x3778a5], premium), 1);
            fs.writeFileSync("./system/premium.json", JSON.stringify(premium));
          }
          _0x694d65("Delete success");
        } else {
          premium.splice(getPremiumPosition(_0x55fa2c[0] + "@s.whatsapp.net", premium), 1);
          fs.writeFileSync("./system/premium.json", JSON.stringify(premium));
          _0x694d65("Success");
        }
        break;
      case "listprem":
        {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          let _0x666758 = require("./system/premium.json");
          let _0x50ce00 = "*------「 LIST PREMIUM 」------*\n\n";
          for (let _0x58a7b4 of _0x666758) {
            _0x50ce00 += "Number : " + _0x58a7b4.id + "\n";
            _0x50ce00 += "Expired : " + _0x58a7b4.expired + " Second\n";
          }
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            text: _0x50ce00,
            mentions: i
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "delete":
        {
          if (!_0xcac50f.quoted) {
            return _0x694d65("👑 *BANKS MD BOT Delete System*\n\nPlease reply to a bot message you want to delete\n\nExample:\nReply to a message with *" + (_0x2b6114 + _0x59dd4b) + "*");
          }
          try {
            const _0x5b3744 = _0xcac50f.quoted.message;
            const _0x1f6634 = _0x4acc2b.user.id.split(":")[0] + "@s.whatsapp.net";
            if (_0xcac50f.quoted.key.fromMe || _0x5b3744?.extendedTextMessage?.contextInfo?.participant === _0x1f6634) {
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                react: {
                  text: "🗑️",
                  key: _0xcac50f.key
                }
              });
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                delete: {
                  remoteJid: _0xcac50f.chat,
                  fromMe: true,
                  id: _0xcac50f.quoted.id,
                  participant: _0xcac50f.quoted.key.fromMe ? _0x1f6634 : undefined
                }
              });
              return _0x694d65("✅ *Message successfully deleted*");
            } else {
              return _0x694d65("❌ *You can only delete messages sent by this bot*");
            }
          } catch (_0x432307) {
            console.error("Delete Error:", _0x432307);
            return _0x694d65("👑 *POWERED BY Banks Official*\n\nFailed to delete message!\n\nReason: " + _0x432307.message);
          }
          break;
        }
      case "deletesession":
      case "delsession":
      case "clearsession":
        {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          fs.readdir("./session", async function (_0x5e6d12, _0x444688) {
            if (_0x5e6d12) {
              console.log("Unable to scan directory: " + _0x5e6d12);
              return _0x694d65("Unable to scan directory: " + _0x5e6d12);
            }
            let _0x2ee47b = await _0x444688.filter(_0xfdfd90 => _0xfdfd90.startsWith("pre-key") || _0xfdfd90.startsWith("sender-key") || _0xfdfd90.startsWith("session-") || _0xfdfd90.startsWith("app-state"));
            console.log(_0x2ee47b.length);
            let _0x294906 = "Detected " + _0x2ee47b.length + " junk files\n\n";
            if (_0x2ee47b.length == 0) {
              return _0x694d65(_0x294906);
            }
            _0x2ee47b.map(function (_0x5e1cff, _0x5adc07) {
              _0x294906 += _0x5adc07 + 1 + (". " + _0x5e1cff + "\n");
            });
            _0x694d65(_0x294906);
            await sleep(2000);
            _0x694d65("Delete junk files...");
            await _0x2ee47b.forEach(function (_0x525a56) {
              fs.unlinkSync("./session/" + _0x525a56);
            });
            await sleep(2000);
            _0x694d65("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case "join":
        try {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          if (!_0x3ed79d) {
            return _0x694d65("Enter Group Link!");
          }
          if (!isUrl(_0x55fa2c[0]) && !_0x55fa2c[0].includes("whatsapp.com")) {
            return _0x694d65("Link Invalid!");
          }
          _0x694d65(mess.wait);
          let _0x5c2a1b = _0x55fa2c[0].split("https://chat.whatsapp.com/")[1];
          await _0x4acc2b.groupAcceptInvite(_0x5c2a1b).then(_0x15965a => _0x694d65(json(_0x15965a))).catch(_0x249077 => _0x694d65(json(_0x249077)));
        } catch {
          _0x694d65("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        _0x694d65("Wait a moment, currently retrieving your session file");
        let _0x525d39 = await fs.readFileSync("./session/creds.json");
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          document: _0x525d39,
          mimetype: "application/json",
          fileName: "creds.json"
        }, {
          quoted: _0xcac50f
        });
        break;
      case "shutdown":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        _0x694d65("Goodbye🖐");
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        _0x694d65("In Process....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        if (q === "on") {
          autoread = true;
          _0x694d65("Successfully changed autoread to " + q);
        } else if (q === "off") {
          autoread = false;
          _0x694d65("Successfully changed autoread to " + q);
        }
        break;
      case "autotyping":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        if (q === "on") {
          autoTyping = true;
          _0x694d65("Successfully changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x694d65("Successfully changed auto-typing to " + q);
        }
        break;
      case "autorecording":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        if (q === "on") {
          autoRecording = true;
          _0x694d65("Successfully changed auto-recording to " + q);
        } else if (q === "off") {
          autoRecording = false;
          _0x694d65("Successfully changed auto-recording to " + q);
        }
        break;
      case "autorecordtyp":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        if (q === "on") {
          autorecordtype = true;
          _0x694d65("Successfully changed auto recording and typing to " + q);
        } else if (q === "off") {
          autorecordtype = false;
          _0x694d65("Successfully changed auto recording and typing to " + q);
        }
        break;
      case "autoswview":
      case "autostatusview":
        {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("on/off?");
          }
          if (_0x55fa2c[0] === "on") {
            autoswview = true;
            _0x694d65(_0x59dd4b + " is enabled");
          } else if (_0x55fa2c[0] === "off") {
            autoswview = false;
            _0x694d65(_0x59dd4b + " is disabled");
          }
        }
        break;
      case "autobio":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        if (q == "on") {
          autobio = true;
          _0x694d65("Successfully Changed AutoBio To " + q);
        } else if (q == "off") {
          autobio = false;
          _0x694d65("Successfully Changed AutoBio To " + q);
        }
        break;
      case "mode":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0x55fa2c.length < 1) {
          return _0x694d65("Example " + (_0x2b6114 + _0x59dd4b) + " public/self");
        }
        if (q == "public") {
          _0x4acc2b.public = true;
          _0x694d65(mess.done);
        } else if (q == "self") {
          _0x4acc2b.public = false;
          _0x694d65(mess.done);
        }
        break;
      case "setexif":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0x3ed79d) {
          return _0x694d65("Example : " + (_0x2b6114 + _0x59dd4b) + " packname|author");
        }
        global.packname = _0x3ed79d.split("|")[0];
        global.author = _0x3ed79d.split("|")[1];
        _0x694d65("Exif successfully changed to\n\n• Packname : " + global.packname + "\n• Author : " + global.author);
        break;
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0x34c37d) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        if (!/image/.test(_0x2c1069)) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        if (/webp/.test(_0x2c1069)) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        var _0x56200e = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d, "ppbot.jpeg");
        if (_0x55fa2c[0] == "full") {
          var {
            img: _0x54c54c
          } = await generateProfilePicture(_0x56200e);
          await _0x4acc2b.query({
            tag: "iq",
            attrs: {
              to: _0x27f14a,
              type: "set",
              xmlns: "w:profile:picture"
            },
            content: [{
              tag: "picture",
              attrs: {
                type: "image"
              },
              content: _0x54c54c
            }]
          });
          fs.unlinkSync(_0x56200e);
          _0x694d65(mess.done);
        } else {
          var _0x1a88fd = await _0x4acc2b.updateProfilePicture(_0x27f14a, {
            url: _0x56200e
          });
          fs.unlinkSync(_0x56200e);
          _0x694d65(mess.done);
        }
        break;
      case "block":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        let _0x4f8c31 = _0xcac50f.mentionedJid[0] ? _0xcac50f.mentionedJid[0] : _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.updateBlockStatus(_0x4f8c31, "block").then(_0x297b8e => _0x694d65(json(_0x297b8e))).catch(_0x77d0c2 => _0x694d65(json(_0x77d0c2)));
        break;
      case "unblock":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        let _0x49e58c = _0xcac50f.mentionedJid[0] ? _0xcac50f.mentionedJid[0] : _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.updateBlockStatus(_0x49e58c, "unblock").then(_0x152587 => _0x694d65(json(_0x152587))).catch(_0x25b575 => _0x694d65(json(_0x25b575)));
        break;
      case "leave":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        _0x694d65("Bye Everyone 🥺");
        await _0x4acc2b.groupLeave(_0xcac50f.chat);
        break;
      case "backup":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (_0xcac50f.isGroup) {
          return _0x694d65(mess.private);
        }
        _0x694d65(mess.wait);
        exec("zip backup.zip *");
        let _0x5b602a = await fs.readFileSync("./backup.zip");
        await _0x4acc2b.sendMessage(_0xcac50f.chat, {
          document: _0x5b602a,
          mimetype: "application/zip",
          fileName: "backup.zip"
        }, {
          quoted: _0xcac50f
        });
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          if (!_0x3ed79d) {
            return _0x694d65("Which text?\n\nExample : " + (_0x2b6114 + _0x59dd4b) + " It's holiday tomorrow ");
          }
          let _0x1e093a = await _0x4acc2b.groupFetchAllParticipating();
          let _0x516da5 = Object.entries(_0x1e093a).slice(0).map(_0x26fb9b => _0x26fb9b[1]);
          let _0x248c5c = _0x516da5.map(_0x5785a6 => _0x5785a6.id);
          _0x694d65("Send Broadcast To " + _0x248c5c.length + " Group Chat, End Time " + _0x248c5c.length * 1.5 + " second");
          for (let _0x187dba of _0x248c5c) {
            await sleep(1500);
            let _0x1562d6 = "```\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ" + ("\n\n" + _0x3ed79d + "\n\n") + "```\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            _0x4acc2b.sendMessage(_0x187dba, {
              text: _0x1562d6,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Broadcast By Owner",
                  body: "Sent " + _0x187dba.length + " Group",
                  thumbnailUrl: "",
                  thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                  sourceUrl: "https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r",
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            });
          }
          _0x694d65("Successfully Sent Broadcast To " + _0x248c5c.length + " Group");
        }
        break;
      case "getcase":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        _0x694d65("" + ("case" + ("'" + q + "'") + fs.readFileSync("banks.js").toString().split("case '" + q + "'")[1].split("break")[0] + "break"));
        break;
      case "closetime":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (_0x55fa2c[1] == "detik") {
          var _0x544adf = _0x55fa2c[0] * "1000";
        } else if (_0x55fa2c[1] == "menit") {
          var _0x544adf = _0x55fa2c[0] * "60000";
        } else if (_0x55fa2c[1] == "jam") {
          var _0x544adf = _0x55fa2c[0] * "3600000";
        } else if (_0x55fa2c[1] == "hari") {
          var _0x544adf = _0x55fa2c[0] * "86400000";
        } else {
          return _0x694d65("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
        }
        _0x694d65("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "announcement");
          _0x694d65("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x544adf);
        break;
      case "opentime":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (_0x55fa2c[1] == "second") {
          var _0x544adf = _0x55fa2c[0] * "1000";
        } else if (_0x55fa2c[1] == "minute") {
          var _0x544adf = _0x55fa2c[0] * "60000";
        } else if (_0x55fa2c[1] == "hour") {
          var _0x544adf = _0x55fa2c[0] * "3600000";
        } else if (_0x55fa2c[1] == "day") {
          var _0x544adf = _0x55fa2c[0] * "86400000";
        } else {
          return _0x694d65("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
        }
        _0x694d65("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "not_announcement");
          _0x694d65("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x544adf);
        break;
      case "kick":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x54e791 = _0xcac50f.mentionedJid[0] ? _0xcac50f.mentionedJid[0] : _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.groupParticipantsUpdate(_0xcac50f.chat, [_0x54e791], "remove").then(_0x40a204 => _0x694d65(json(_0x40a204))).catch(_0xce4817 => _0x694d65(json(_0xce4817)));
        break;
      case "add":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x48d15b = _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.groupParticipantsUpdate(_0xcac50f.chat, [_0x48d15b], "add").then(_0x3ecc2b => _0x694d65(json(_0x3ecc2b))).catch(_0x5e3114 => _0x694d65(json(_0x5e3114)));
        break;
      case "promote":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x15a659 = _0xcac50f.mentionedJid[0] ? _0xcac50f.mentionedJid[0] : _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.groupParticipantsUpdate(_0xcac50f.chat, [_0x15a659], "promote").then(_0x1b8f4d => _0x694d65(json(_0x1b8f4d))).catch(_0x49edbd => _0x694d65(json(_0x49edbd)));
        break;
      case "demote":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x263244 = _0xcac50f.mentionedJid[0] ? _0xcac50f.mentionedJid[0] : _0xcac50f.quoted ? _0xcac50f.quoted.sender : _0x3ed79d.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await _0x4acc2b.groupParticipantsUpdate(_0xcac50f.chat, [_0x263244], "demote").then(_0x49fb58 => _0x694d65(json(_0x49fb58))).catch(_0x4e114e => _0x694d65(json(_0x4e114e)));
        break;
      case "setname":
      case "setsubject":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (!_0x3ed79d) {
          return "Text ?";
        }
        await _0x4acc2b.groupUpdateSubject(_0xcac50f.chat, _0x3ed79d).then(_0x32f891 => _0x694d65(mess.success)).catch(_0xe77978 => _0x694d65(json(_0xe77978)));
        break;
      case "setdesc":
      case "setdesk":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (!_0x3ed79d) {
          return "Text ?";
        }
        await _0x4acc2b.groupUpdateDescription(_0xcac50f.chat, _0x3ed79d).then(_0x8daba1 => _0x694d65(mess.success)).catch(_0x321195 => _0x694d65(json(_0x321195)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (!_0x34c37d) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        if (!/image/.test(_0x2c1069)) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        if (/webp/.test(_0x2c1069)) {
          return _0x694d65("Send/Reply Image With Caption " + (_0x2b6114 + _0x59dd4b));
        }
        var _0x56200e = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d, "ppbot.jpeg");
        if (_0x55fa2c[0] == "full") {
          var {
            img: _0x54c54c
          } = await generateProfilePicture(_0x56200e);
          await _0x4acc2b.query({
            tag: "iq",
            attrs: {
              to: _0xcac50f.chat,
              type: "set",
              xmlns: "w:profile:picture"
            },
            content: [{
              tag: "picture",
              attrs: {
                type: "image"
              },
              content: _0x54c54c
            }]
          });
          fs.unlinkSync(_0x56200e);
          _0x694d65(mess.done);
        } else {
          var _0x1a88fd = await _0x4acc2b.updateProfilePicture(_0xcac50f.chat, {
            url: _0x56200e
          });
          fs.unlinkSync(_0x56200e);
          _0x694d65(mess.done);
        }
        break;
      case "tagall":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x38ac7d = "*👥 Tag All*\n \n                 🗞️ *Message : " + (q ? q : "blank") + "*\n\n";
        for (let _0x52154b of _0x3fb304) {
          _0x38ac7d += "• @" + _0x52154b.id.split("@")[0] + "\n";
        }
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          text: _0x38ac7d,
          mentions: _0x3fb304.map(_0x3e53b7 => _0x3e53b7.id)
        }, {
          quoted: _0xcac50f
        });
        break;
      case "hidetag":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.botAdmin);
        }
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          text: q ? q : "",
          mentions: _0x3fb304.map(_0x4c8d1c => _0x4c8d1c.id)
        }, {
          quoted: _0xcac50f
        });
        break;
      case "totag":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x92a98a && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.botAdmin);
        }
        if (!_0x5f33dd && !_0x1b25de && !_0x26473a) {
          return _0x694d65(mess.admin);
        }
        if (!_0xcac50f.quoted) {
          return _0x694d65("Reply messages with captions " + (_0x2b6114 + _0x59dd4b));
        }
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          forward: _0xcac50f.quoted.fakeObj,
          mentions: _0x3fb304.map(_0x308949 => _0x308949.id)
        });
        break;
      case "group":
      case "grup":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (_0x55fa2c[0] === "close") {
          await _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "announcement").then(_0x2b1806 => _0x694d65("Success In Closing The Group 🕊️")).catch(_0x2b42af => _0x694d65(json(_0x2b42af)));
        } else if (_0x55fa2c[0] === "open") {
          await _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "not_announcement").then(_0x5d8b77 => _0x694d65("Success In Opening The Group 🕊️")).catch(_0x3f4222 => _0x694d65(json(_0x3f4222)));
        } else {
          _0x694d65("Mode " + _0x59dd4b + "\n\n\nType " + (_0x2b6114 + _0x59dd4b) + "open/close");
        }
        break;
      case "editinfo":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        if (_0x55fa2c[0] === "open") {
          await _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "unlocked").then(_0x323d27 => _0x694d65("Successfully Opened Group Edit Info 🕊️")).catch(_0xd5f82f => _0x694d65(json(_0xd5f82f)));
        } else if (_0x55fa2c[0] === "close") {
          await _0x4acc2b.groupSettingUpdate(_0xcac50f.chat, "locked").then(_0x1a99aa => _0x694d65("Successfully Closed Group Edit Info🕊️")).catch(_0x38db4a => _0x694d65(json(_0x38db4a)));
        } else {
          _0x694d65("Mode " + _0x59dd4b + "\n\n\nType " + (_0x2b6114 + _0x59dd4b) + "on/off");
        }
        break;
      case "linkgroup":
      case "grouplink":
      case "linkgrup":
      case "linkgc":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        let _0x180a71 = await _0x4acc2b.groupInviteCode(_0xcac50f.chat);
        _0x4acc2b.sendText(_0xcac50f.chat, "👥 *GROUP LINK INFO*\n📛 *Name :* " + _0x580b5d.subject + "\n👤 *Group Owner :* " + (_0x580b5d.owner !== undefined ? "@" + _0x580b5d.owner.split`@`[0] : "Not known") + "\n🌱 *ID :* " + _0x580b5d.id + "\n🔗 *Chat Link :* https://chat.whatsapp.com/" + _0x180a71 + "\n👥 *Member :* " + _0x580b5d.participants.length + "\n", _0xcac50f, {
          detectLink: true
        });
        break;
      case "revoke":
      case "resetlink":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (!_0x5f33dd && !_0x16ab21 && !_0x1b25de) {
          return _0x694d65(mess.admin);
        }
        if (!_0x92a98a) {
          return _0x694d65(mess.botAdmin);
        }
        await _0x4acc2b.groupRevokeInvite(_0xcac50f.chat).then(_0x77c4be => {
          _0x694d65("Successful Reset, Group Invite Link " + _0x580b5d.subject);
        }).catch(_0x1102c9 => _0x694d65(json(_0x1102c9)));
        break;
      case "p":
      case "ping":
        {
          const _0x3e7851 = Date.now();
          await new Promise(_0x4d9a94 => setTimeout(_0x4d9a94, 10));
          const _0x3a1092 = (Date.now() - _0x3e7851) / 1000;
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            text: "🏓 pong (" + _0x3a1092.toFixed(3) + "s)"
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "buypremium":
      case "buyprem":
      case "premium":
        {
          let _0x36bba5 = "Hi " + _0x1f435e + "👋\nWant to Buy Premium? Just chat with the owner😉";
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            text: _0x36bba5,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "BANKS MD BOT powered by Banks Official",
                body: "" + ownername,
                thumbnailUrl: "",
                thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                sourceUrl: "https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r",
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "runtime":
        let _0x2491e8 = runtime(process.uptime()) + "ms";
        _0x4acc2b.sendMessage(_0xcac50f.chat, {
          text: _0x2491e8
        }, {
          quoted: _0xcac50f
        });
        break;
      case "owner":
        {
          const _0x44c2f7 = await _0x4acc2b.sendMessage(_0x704fdd, {
            contacts: {
              displayName: _0xf4f160.length + " Contact",
              contacts: _0xf4f160
            },
            mentions: [_0x29b327]
          }, {
            quoted: _0xcac50f
          });
          _0x4acc2b.sendMessage(_0x704fdd, {
            text: "Hi @" + _0x29b327.split("@")[0] + ", Here is my handsome owner😇",
            mentions: [_0x29b327]
          }, {
            quoted: _0x44c2f7
          });
        }
        break;
      case "slap":
        {
          try {
            const _0x3828a6 = await fetch("https://api.waifu.pics/sfw/slap");
            const _0x488977 = await _0x3828a6.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              sticker: {
                url: _0x488977.url
              },
              caption: "👋 *Slap!*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x550771) {
            _0x694d65("❌ Failed to fetch slap sticker\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "cuddle":
        {
          try {
            const _0x424708 = await fetch("https://api.waifu.pics/sfw/cuddle");
            const _0x20cd1c = await _0x424708.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              sticker: {
                url: _0x20cd1c.url
              },
              caption: "💞 *Cuddle!*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x469d6d) {
            _0x694d65("❌ Failed to fetch cuddle sticker\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "pat":
        {
          try {
            const _0x3e1891 = await fetch("https://api.waifu.pics/sfw/pat");
            const _0x48ac0c = await _0x3e1891.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              sticker: {
                url: _0x48ac0c.url
              },
              caption: "🥺 *Pat Pat!*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x376916) {
            _0x694d65("❌ Failed to fetch pat sticker\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "kiss":
        {
          try {
            const _0x16198c = await fetch("https://api.waifu.pics/sfw/kiss");
            const _0x46ae3c = await _0x16198c.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              sticker: {
                url: _0x46ae3c.url
              },
              caption: "💋 *Kiss!*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x1d0995) {
            _0x694d65("❌ Failed to fetch kiss sticker\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "sticker":
      case "stiker":
      case "s":
        {
          if (!_0x34c37d) {
            return _0x694d65("Reply to Video/Image With Caption " + (_0x2b6114 + _0x59dd4b));
          }
          if (/image/.test(_0x2c1069)) {
            let _0x30b703 = await _0x34c37d.download();
            let _0x81cbaf = await _0x4acc2b.sendImageAsSticker(_0xcac50f.chat, _0x30b703, _0xcac50f, {
              packname: packname,
              author: author
            });
            await fs.unlinkSync(_0x81cbaf);
          } else if (_0x18bc87 || /video/.test(_0x2c1069)) {
            if ((_0x34c37d.msg || _0x34c37d).seconds > 11) {
              return _0x694d65("Maximum 10 seconds!");
            }
            let _0x412178 = await _0x34c37d.download();
            let _0x296c37 = await _0x4acc2b.sendVideoAsSticker(_0xcac50f.chat, _0x412178, _0xcac50f, {
              packname: packname,
              author: author
            });
            await fs.unlinkSync(_0x296c37);
          } else {
            return _0x694d65("Send Images/Videos With Captions " + (_0x2b6114 + _0x59dd4b) + "\nVideo Duration 1-9 Seconds");
          }
        }
        break;
      case "smeme":
        {
          let _0x5c7099 = "Send/Reply image/sticker with caption " + (_0x2b6114 + _0x59dd4b) + " text1|text2";
          if (!/image/.test(_0x2c1069)) {
            return _0x694d65(_0x5c7099);
          }
          if (!_0x3ed79d) {
            return _0x694d65(_0x5c7099);
          }
          _0x694d65(mess.wait);
          atas = _0x3ed79d.split("|")[0] ? _0x3ed79d.split("|")[0] : "-";
          bawah = _0x3ed79d.split("|")[1] ? _0x3ed79d.split("|")[1] : "-";
          let _0x13a13a = await _0x4acc2b.downloadAndSaveMediaMessage(_0x2da85d);
          let _0x12242f = await TelegraPh(_0x13a13a);
          let _0x408398 = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + "/" + encodeURIComponent(atas) + ".png?background=" + _0x12242f;
          let _0x5ae6be = await _0x4acc2b.sendImageAsSticker(_0xcac50f.chat, _0x408398, _0xcac50f, {
            packname: packname,
            author: author
          });
          fs.unlinkSync(_0x5ae6be);
        }
        break;
      case "swm":
      case "steal":
      case "stickerwm":
      case "take":
        {
          if (!_0x55fa2c.join(" ")) {
            return _0x694d65("Where is the text?");
          }
          if (_0xcac50f.quoted.isAnimated === true) {
            _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d, "gifee");
            _0x4acc2b.sendMessage(_0x704fdd, {
              sticker: fs.readFileSync("gifee.webp")
            }, {
              quoted: _0xcac50f
            });
          } else if (/image/.test(_0x2c1069)) {} else if (/video/.test(_0x2c1069)) {
            if ((_0x34c37d.msg || _0x34c37d).seconds > 11) {
              return _0x694d65("Maximum 10 Seconds!");
            }
          } else {
            _0x694d65("Photo/Video?");
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x2c1069)) {
            return _0x694d65("Reply sticker with caption *" + (_0x2b6114 + _0x59dd4b) + "*");
          }
          _0x694d65(mess.wait);
          let _0x150bc8 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x2da85d);
          let _0x56c3dc = await getRandom(".png");
          exec("ffmpeg -i " + _0x150bc8 + " " + _0x56c3dc, _0x2f2a0b => {
            fs.unlinkSync(_0x150bc8);
            if (_0x2f2a0b) {
              return _0x2f2a0b;
            }
            let _0x3d06fe = fs.readFileSync(_0x56c3dc);
            _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: _0x3d06fe
            }, {
              quoted: _0xcac50f
            });
            fs.unlinkSync(_0x56c3dc);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(_0x2c1069)) {
            return _0x694d65("Reply sticker with caption *" + (_0x2b6114 + _0x59dd4b) + "*");
          }
          _0x694d65(mess.wait);
          let _0x36cec6 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x2da85d);
          let _0xed8704 = await webp2mp4File(_0x36cec6);
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            video: {
              url: _0xed8704.result,
              caption: "Convert Webp To Video"
            }
          }, {
            quoted: _0xcac50f
          });
          await fs.unlinkSync(_0x36cec6);
        }
        break;
      case "toaud":
      case "toaudio":
        {
          if (!/video/.test(_0x2c1069) && !/audio/.test(_0x2c1069)) {
            return _0x694d65("Send/Reply Video/Audio that you want to make into audio with caption " + (_0x2b6114 + _0x59dd4b));
          }
          _0x694d65(mess.wait);
          let _0x22ce16 = await _0x4acc2b.downloadMediaMessage(_0x2da85d);
          let _0x45d9cf = await toAudio(_0x22ce16, "mp4");
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            audio: _0x45d9cf,
            mimetype: "audio/mpeg"
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "tomp3":
        {
          if (!/video/.test(_0x2c1069) && !/audio/.test(_0x2c1069)) {
            return _0x694d65("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x2b6114 + _0x59dd4b));
          }
          _0x694d65(mess.wait);
          let _0x4403bc = await _0x4acc2b.downloadMediaMessage(_0x2da85d);
          let _0x5ecd02 = await toAudio(_0x4403bc, "mp4");
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            document: _0x5ecd02,
            mimetype: "audio/mp3",
            fileName: "dgxeon.mp3"
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(_0x2c1069) && !/audio/.test(_0x2c1069)) {
            return _0x694d65("Reply Video/Audio that you want to make into a VN with caption " + (_0x2b6114 + _0x59dd4b));
          }
          _0x694d65(mess.wait);
          let _0xdf5531 = await _0x4acc2b.downloadMediaMessage(_0x2da85d);
          let {
            toPTT: _0x4f91da
          } = require("./system/converter");
          let _0x4fac0b = await _0x4f91da(_0xdf5531, "mp4");
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            audio: _0x4fac0b,
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: _0xcac50f
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x2c1069)) {
            return _0x694d65("Reply sticker with caption *" + (_0x2b6114 + _0x59dd4b) + "*");
          }
          _0x694d65(mess.wait);
          let _0x28ce77 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x2da85d);
          let _0x5728b9 = await webp2mp4File(_0x28ce77);
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            video: {
              url: _0x5728b9.result,
              caption: "Convert Webp To Video"
            },
            gifPlayback: true
          }, {
            quoted: _0xcac50f
          });
          await fs.unlinkSync(_0x28ce77);
        }
        break;
      case "tourl":
        {
          _0x694d65(mess.wait);
          let _0x507cdd = await _0x4acc2b.downloadAndSaveMediaMessage(_0x2da85d);
          if (/image/.test(_0x2c1069)) {
            let _0x34f8bf = await TelegraPh(_0x507cdd);
            _0x694d65(util.format(_0x34f8bf));
          } else if (!/image/.test(_0x2c1069)) {
            let _0x36c274 = await UploadFileUgu(_0x507cdd);
            _0x694d65(util.format(_0x36c274));
          }
          await fs.unlinkSync(_0x507cdd);
        }
        break;
      case "emojimix":
        {
          let [_0x55592d, _0x4503cd] = _0x3ed79d.split`+`;
          if (!_0x55592d) {
            return _0x694d65("Example : " + (_0x2b6114 + _0x59dd4b) + " 😅+🤔");
          }
          if (!_0x4503cd) {
            return _0x694d65("Example : " + (_0x2b6114 + _0x59dd4b) + " 😅+🤔");
          }
          _0x694d65(mess.wait);
          let _0x5413df = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x55592d) + "_" + encodeURIComponent(_0x4503cd));
          for (let _0x2627c2 of _0x5413df.results) {
            let _0x5e5e94 = await _0x4acc2b.sendImageAsSticker(_0xcac50f.chat, _0x2627c2.url, _0xcac50f, {
              packname: global.packname,
              author: global.author,
              categories: _0x2627c2.tags
            });
            await fs.unlinkSync(_0x5e5e94);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!_0x34c37d) {
            return _0x694d65("Reply Image/Video");
          }
          if (/image/.test(_0x2c1069)) {
            anuan = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
            _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: anuan
              },
              caption: "Here you go!",
              fileLength: "999",
              viewOnce: true
            }, {
              quoted: _0xcac50f
            });
          } else if (/video/.test(_0x2c1069)) {
            anuanuan = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
            _0x4acc2b.sendMessage(_0xcac50f.chat, {
              video: {
                url: anuanuan
              },
              caption: "Here you go!",
              fileLength: "99999999",
              viewOnce: true
            }, {
              quoted: _0xcac50f
            });
          }
        }
        break;
      case "toqr":
        {
          if (!q) {
            return _0x694d65(" Please include link or text!");
          }
          const _0x261c36 = require("qrcode");
          let _0x2968da = await _0x261c36.toDataURL(q, {
            scale: 35
          });
          let _0x102fa6 = new Buffer.from(_0x2968da.replace("data:image/png;base64,", ""), "base64");
          let _0x5cfe90 = getRandom(".jpg");
          await fs.writeFileSync("./" + _0x5cfe90, _0x102fa6);
          let _0x2a6620 = fs.readFileSync("./" + _0x5cfe90);
          await _0x4acc2b.sendMessage(_0x704fdd, {
            image: _0x2a6620,
            caption: "Here you go!"
          }, {
            quoted: _0xcac50f
          });
          setTimeout(() => {
            fs.unlinkSync(_0x5cfe90);
          }, 10000);
        }
        break;
      case "fliptext":
        {
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Example:\n" + _0x2b6114 + "fliptext Xeony");
          }
          quere = _0x55fa2c.join(" ");
          flipe = quere.split("").reverse().join("");
          _0x694d65("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "listvn":
        {
          let _0xb758a2 = "┌──⭓「 *List Vn* 」\n│\n";
          for (let _0x5cd4ea of VoiceNoteXeon) {
            _0xb758a2 += "│⭔ " + _0x5cd4ea + "\n";
          }
          _0xb758a2 += "│\n└────────────⭓\n\n*Total : " + VoiceNoteXeon.length + "*";
          _0x694d65(_0xb758a2);
        }
        break;
      case "liststicker":
        {
          let _0x22b97d = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let _0x265e0b of StickerXeon) {
            _0x22b97d += "│⭔ " + _0x265e0b + "\n";
          }
          _0x22b97d += "│\n└────────────⭓\n\n*Total : " + StickerXeon.length + "*";
          _0x694d65(_0x22b97d);
        }
        break;
      case "listimage":
        {
          let _0x13fb38 = "┌──⭓「 *List Image* 」\n│\n";
          for (let _0x185703 of ImageXeon) {
            _0x13fb38 += "│⭔ " + _0x185703 + "\n";
          }
          _0x13fb38 += "│\n└────────────⭓\n\n*Total : " + ImageXeon.length + "*";
          _0x694d65(_0x13fb38);
        }
        break;
      case "listvideo":
        {
          let _0x480c20 = "┌──⭓「 *List Video* 」\n│\n";
          for (let _0x1c0bd5 of VideoXeon) {
            _0x480c20 += "│⭔ " + _0x1c0bd5 + "\n";
          }
          _0x480c20 += "│\n└────────────⭓\n\n*Total : " + VideoXeon.length + "*";
          _0x694d65(_0x480c20);
        }
        break;
      case "addowner":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0x55fa2c[0]) {
          return _0x694d65("Use " + (_0x2b6114 + _0x59dd4b) + " number\nExample " + (_0x2b6114 + _0x59dd4b) + " " + ownernumber);
        }
        bnnd = q.split("|")[0].replace(/[^0-9]/g, "");
        let _0x506124 = await _0x4acc2b.onWhatsApp(bnnd);
        if (_0x506124.length == 0) {
          return _0x694d65("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs.writeFileSync("./system/owner.json", JSON.stringify(owner));
        _0x694d65("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case "delowner":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0x55fa2c[0]) {
          return _0x694d65("Use " + (_0x2b6114 + _0x59dd4b) + " nomor\nExample " + (_0x2b6114 + _0x59dd4b) + " 923444844060");
        }
        ya = q.split("|")[0].replace(/[^0-9]/g, "");
        unp = owner.indexOf(ya);
        owner.splice(unp, 1);
        fs.writeFileSync("./system/owner.json", JSON.stringify(owner));
        _0x694d65("The Numbrr " + ya + " Has been deleted from owner list by the owner!!!");
        break;
      case "addvideo":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Video Name?");
          }
          if (VideoXeon.includes(q)) {
            return _0x694d65("The name you entered already exists");
          }
          let _0x3afb11 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
          VideoXeon.push(q);
          await fsx.copy(_0x3afb11, "./BanksMedia/video/" + q + ".mp4");
          fs.writeFileSync("./system/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync(_0x3afb11);
          _0x694d65("Success Adding VideoTo View Type " + _0x2b6114 + "listvideo");
        }
        break;
      case "delvideo":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the Video Name");
          }
          if (!VideoXeon.includes(q)) {
            return _0x694d65("Name Does Not Exist in Database");
          }
          let _0x2af29b = VideoXeon.indexOf(q);
          VideoXeon.splice(_0x2af29b, 1);
          fs.writeFileSync("./system/autoreply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync("./BanksMedia/video/" + q + ".mp4");
          _0x694d65("Successfully Deleted Video " + q);
        }
        break;
      case "addimage":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("The name of the image?");
          }
          if (ImageXeon.includes(q)) {
            return _0x694d65("The name you entered is already registered in the system");
          }
          let _0x3bb7c9 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
          ImageXeon.push(q);
          await fsx.copy(_0x3bb7c9, "./BanksMedia/image/" + q + ".jpg");
          fs.writeFileSync("./system/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync(_0x3bb7c9);
          _0x694d65("Success In Adding Image\nTo Check Type " + _0x2b6114 + "listimage");
        }
        break;
      case "delimage":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the Image Name");
          }
          if (!ImageXeon.includes(q)) {
            return _0x694d65("The image name you entered is not registered");
          }
          let _0x2854c0 = ImageXeon.indexOf(q);
          ImageXeon.splice(_0x2854c0, 1);
          fs.writeFileSync("./system/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync("./BanksMedia/image/" + q + ".jpg");
          _0x694d65("Successfully Deleted Image " + q);
        }
        break;
      case "addsticker":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the name of the sticker?");
          }
          if (StickerXeon.includes(q)) {
            return _0x694d65("Name Already In Use");
          }
          let _0x214a51 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
          StickerXeon.push(q);
          await fsx.copy(_0x214a51, "./BanksMedia/sticker/" + q + ".webp");
          fs.writeFileSync("./system/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync(_0x214a51);
          _0x694d65("Successfully Adding StickerTo Check Type " + _0x2b6114 + "liststicker");
        }
        break;
      case "delsticker":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the name of the sticker");
          }
          if (!StickerXeon.includes(q)) {
            return _0x694d65("Name Not Registered in Database");
          }
          let _0x47d25b = StickerXeon.indexOf(q);
          StickerIconicTechInc.splice(_0x47d25b, 1);
          fs.writeFileSync("./system/autoreply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync("./BanksMedia/sticker/" + q + ".webp");
          _0x694d65("Successfully Removed Sticker " + q);
        }
        break;
      case "addvn":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the Name?");
          }
          if (VoiceNoteXeon.includes(q)) {
            return _0x694d65("Name Already In Use");
          }
          let _0x34c182 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
          VoiceNoteXeon.push(q);
          await fsx.copy(_0x34c182, "./BanksMedia/audio/" + q + ".mp3");
          fs.writeFileSync("./system/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync(_0x34c182);
          _0x694d65("Success Adding Audio\nTo Check Type " + _0x2b6114 + "listvn");
        }
        break;
      case "delvn":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the Name");
          }
          if (!VoiceNoteXeon.includes(q)) {
            return _0x694d65("Name Not Registered in Database");
          }
          let _0x4cf06e = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(_0x4cf06e, 1);
          fs.writeFileSync("./system/autoreply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync("./BanksMedia/audio/" + q + ".mp3");
          _0x694d65("Successfully Deleted Audio " + q);
        }
        break;
      case "addzip":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("What's the zip name?");
          }
          let _0x3d35b6 = "" + _0x3ed79d;
          {
            if (ZipXeon.includes(_0x3d35b6)) {
              return _0x694d65("This name is already in use");
            }
            let _0x50d1a2 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
            ZipXeon.push(_0x3d35b6);
            await fsx.copy(_0x50d1a2, "./BanksMedia/zip/" + _0x3d35b6 + ".zip");
            fs.writeFileSync("./system/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync(_0x50d1a2);
            _0x694d65("Success Adding zip\nTo check type " + _0x2b6114 + "listzip");
          }
        }
        break;
      case "ask":
        {
          if (!_0x3ed79d) {
            _0x694d65("❓ *Please ask me something!*\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x3ff0ef = "https://api.siputzx.my.id/api/ai/blackboxai-pro?content=" + encodeURIComponent(_0x3ed79d);
            console.log("Sending request to API:", _0x3ff0ef);
            const _0xa51c25 = await fetch(_0x3ff0ef);
            console.log("API Response Status:", _0xa51c25.status);
            if (!_0xa51c25.ok) {
              throw new Error("API request failed with status " + _0xa51c25.status);
            }
            const _0x1971c6 = await _0xa51c25.json();
            console.log("Parsed JSON Data:", _0x1971c6);
            if (_0x1971c6.status === true && _0x1971c6.data) {
              const _0x29b40e = _0x1971c6.data.replace(/<think>\n\n<\/think>/g, "").trim();
              _0x694d65(_0x29b40e + "\n\n*Powered by Banks Official*");
            } else {
              _0x694d65("❌ *Failed to fetch response from the API. Please try again later.*\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x5e1190) {
            console.error("Error fetching API response:", _0x5e1190);
            _0x694d65("❌ *An error occurred while fetching the AI response. Please try again later.*\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "openai":
        {
          if (!_0x3ed79d) {
            _0x694d65("❓ *Please ask me something!*\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x1db78a = "https://api.siputzx.my.id/api/ai/dbrx-instruct?content=" + encodeURIComponent(_0x3ed79d);
            console.log("Sending request to API:", _0x1db78a);
            const _0x3704a2 = await fetch(_0x1db78a);
            console.log("API Response Status:", _0x3704a2.status);
            if (!_0x3704a2.ok) {
              throw new Error("API request failed with status " + _0x3704a2.status);
            }
            const _0x284d8d = await _0x3704a2.json();
            console.log("Parsed JSON Data:", _0x284d8d);
            if (_0x284d8d.status === true && _0x284d8d.data) {
              const _0x25413b = _0x284d8d.data.length > 300 ? _0x284d8d.data.substring(0, 300) + "..." : _0x284d8d.data;
              _0x694d65(_0x25413b + "\n\n*Powered by Banks Official*");
            } else {
              _0x694d65("❌ *Failed to fetch response from the API. Please try again later.*\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x599e46) {
            console.error("Error fetching API response:", _0x599e46);
            _0x694d65("❌ *An error occurred while fetching the AI response. Please try again later.*\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "8ball":
        {
          if (!_0x3ed79d) {
            _0x694d65("🎱 *Magic 8-Ball* 🎱\n\nAsk me a yes/no question!\nExample: " + (_0x2b6114 + _0x59dd4b) + " Will I win the lottery today?\n\n*Powered by BANKS MD BOT*");
            return;
          }
          if (!_0x3ed79d.trim().endsWith("?")) {
            _0x694d65("🎱 *That doesn't look like a question!*\n\nPlease ask a proper question ending with \"?\"\nExample: " + (_0x2b6114 + _0x59dd4b) + " Is today my lucky day?\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x175d65 = await fetch("https://api.popcat.xyz/8ball");
            if (!_0x175d65.ok) {
              throw new Error("API error: " + _0x175d65.status);
            }
            const _0x545605 = await _0x175d65.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              text: "🎱 *Magic 8-Ball* 🎱\n\n" + ("*Your Question:* \"" + _0x3ed79d + "\"\n\n") + ("*Mystical Answer:* _" + _0x545605.answer + "_\n\n") + "*Powered by Banks Official*",
              contextInfo: {
                externalAdReply: {
                  title: "BANKS MD BOT Oracle",
                  body: "The magic 8-ball has spoken!",
                  thumbnail: fs.readFileSync("./path/to/your/8ball-image.jpg"),
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x13611c) {
            console.error("8Ball Error:", _0x13611c);
            const _0x2f02ef = ["Signs point to yes", "Don't count on it", "Reply hazy, try again", "Cannot predict now", "Outlook good"];
            const _0xbb033e = _0x2f02ef[Math.floor(Math.random() * _0x2f02ef.length)];
            _0x694d65("🎱 *The cosmic energies are disturbed!*\n\nBut I sense... _" + _0xbb033e + "_\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "weather":
        {
          if (!_0x3ed79d) {
            _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " Bulawayo");
            return;
          }
          try {
            const _0x1d9697 = "https://api.popcat.xyz/weather?q=" + encodeURIComponent(_0x3ed79d);
            console.log("Fetching weather data from:", _0x1d9697);
            const _0x1256bd = await fetch(_0x1d9697);
            const _0x18d06c = await _0x1256bd.json();
            if (_0x18d06c && _0x18d06c.length > 0) {
              const _0x3dc477 = _0x18d06c.find(_0x336f8b => _0x336f8b.location.name.toLowerCase().includes(_0x3ed79d.toLowerCase()));
              if (_0x3dc477) {
                const {
                  current: _0x40707c,
                  forecast: _0x40f1c4,
                  location: _0xc16d5e
                } = _0x3dc477;
                let _0xf3f162 = "📍 *Weather in " + _0xc16d5e.name + "* 🌍\n\n";
                _0xf3f162 += "🌦️ Weather: " + _0x40707c.skytext + "\n";
                _0xf3f162 += "🌡️ Temperature: " + _0x40707c.temperature + "°C\n";
                _0xf3f162 += "🥶 Feels Like: " + _0x40707c.feelslike + "°C\n";
                _0xf3f162 += "💧 Humidity: " + _0x40707c.humidity + "%\n";
                _0xf3f162 += "💨 Wind Speed: " + _0x40707c.winddisplay + "\n";
                _0xf3f162 += "📆 Date: " + _0x40707c.date + "\n\n";
                _0xf3f162 += "⚡️ *Today’s Weather Summary:*\n";
                _0xf3f162 += "> 🌦️ *Condition*: " + _0x40707c.skytext + "\n";
                _0xf3f162 += "> 🌡️ *Current Temperature*: " + _0x40707c.temperature + "°C\n";
                _0xf3f162 += "> 💧 *Humidity*: " + _0x40707c.humidity + "%\n";
                _0xf3f162 += "> 💨 *Wind Speed*: " + _0x40707c.winddisplay + "\n\n";
                if (_0x40f1c4 && _0x40f1c4.length > 0) {
                  _0xf3f162 += "*🔮 Forecast:*\n";
                  _0x40f1c4.forEach(_0x105aa4 => {
                    _0xf3f162 += "> " + _0x105aa4.day + " (" + _0x105aa4.date + "): " + _0x105aa4.skytextday + ", High: " + _0x105aa4.high + "°C, Low: " + _0x105aa4.low + "°C, Precip: " + _0x105aa4.precip + "%\n";
                  });
                }
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  text: _0xf3f162,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "Weather Info for " + _0xc16d5e.name,
                      body: "Get the latest weather updates for your location.",
                      thumbnailUrl: "",
                      thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                      sourceUrl: "https://whatsapp.com/channel/0029ValX2Js9RZAVtDgMYj0r",
                      mediaType: 1,
                      renderLargerThumbnail: true
                    }
                  }
                }, {
                  quoted: _0xcac50f
                });
              } else {
                _0x694d65("Could not find weather information for \"" + _0x3ed79d + "\". Try another location.");
              }
            } else {
              _0x694d65("Failed to fetch weather data for \"" + _0x3ed79d + "\". Please try again later.");
            }
          } catch (_0x12ddcf) {
            console.error("Error fetching weather data:", _0x12ddcf);
            _0x694d65("An error occurred while fetching the weather data. Please try again later.");
          }
          break;
        }
      case "tr":
        {
          const _0x5d4e31 = _0x55fa2c[0];
          const _0x4bab19 = _0xcac50f.quoted?.text || _0x55fa2c.slice(1).join(" ");
          if (!_0x5d4e31 || !_0x4bab19) {
            return _0x694d65("🌍 *Translation Help*\n\nPlease specify a language code and text to translate\n" + ("*Example:* `" + (_0x2b6114 + _0x59dd4b) + " en Hola`\n\n") + "*Powered by BANKS MD BOT*");
          }
          try {
            await _0x2d43c1();
            const _0x2b9559 = "https://api.popcat.xyz/translate?to=" + _0x5d4e31 + "&text=" + encodeURIComponent(_0x4bab19);
            const _0x877fd2 = await fetch(_0x2b9559);
            const _0x255f3a = await _0x877fd2.json();
            console.log("Translation Response:", _0x255f3a);
            if (!_0x255f3a.translated) {
              return _0x694d65("❌ *Translation Failed*\n\nPlease check the language code and try again\n\n*Powered by BANKS MD BOT*");
            }
            _0x694d65("*🔄 Translation Result*\n\n" + ("```" + _0x255f3a.translated + "```\n\n") + "*Powered by Banks Official*");
          } catch (_0x4d2141) {
            console.error("Error in translate case:", _0x4d2141);
            _0x694d65("❌ *Translation Error*\n\nPlease try again later\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "fact":
        {
          try {
            await _0x694d65(_0xcac50f.chat, {
              react: {
                text: "🤓",
                key: _0xcac50f.key
              }
            });
            const _0x485114 = await axios.get("https://api.popcat.xyz/fact");
            if (_0x485114.data && _0x485114.data.fact) {
              const _0x3bf476 = _0x485114.data.fact;
              _0x694d65("*Did you know?* 🤔\n\n" + _0x3bf476 + "\n\n*Powered by Banks Official*");
            } else {
              _0x694d65("❌ Failed to fetch a random fact. Please try again later.\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x116764) {
            console.error("Error during /fact command:", _0x116764);
            _0x694d65("❌ An error occurred while processing your request. Please try again later.\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "book":
        {
          if (!_0x3ed79d) {
            _0x694d65("📖 *Please provide a Book reference (e.g., John 3:16 or Genesis 1:1-3).*\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x123e9b = "https://bible-api.com/" + encodeURIComponent(_0x3ed79d) + "?translation=kjv";
            const _0x294bf9 = await fetch(_0x123e9b);
            const _0x34e714 = await _0x294bf9.json();
            if (_0x34e714.verses?.length > 0) {
              let _0x14ee08 = "📖 *Bible (" + _0x34e714.translation + ")* ✝️\n";
              _0x14ee08 += "*" + _0x34e714.reference + "*\n\n";
              _0x34e714.verses.forEach(_0x52d9d8 => {
                _0x14ee08 += "*" + _0x52d9d8.verse + "*: " + _0x52d9d8.text + "\n\n";
              });
              _0x14ee08 += "*Powered by Banks Official*";
              _0x694d65(_0x14ee08.trim());
            } else {
              _0x694d65("❌ *Verse not found. Try: John 3:16*\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x4c1992) {
            console.error("Book API Error:", _0x4c1992);
            _0x694d65("❌ *Failed to fetch. Check the reference or try later.*\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "quran":
        {
          if (!_0x3ed79d) {
            _0x694d65("🕌 *Please provide a Surah:Ayah (e.g., 2:255).*\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x5e9377 = "https://api.alquran.cloud/v1/ayah/" + _0x3ed79d + "/en.sahih";
            const _0x50cf91 = await fetch(_0x5e9377);
            const _0x391903 = await _0x50cf91.json();
            if (_0x391903.data) {
              const {
                surah: _0x926ad5,
                numberInSurah: _0x5042be,
                text: _0x6fbfd1
              } = _0x391903.data;
              _0x694d65("🕌 *Quran (Sahih International)* 📿\n" + ("*Surah " + _0x926ad5.englishName + " " + _0x926ad5.number + ":" + _0x5042be + "*\n\n") + (_0x6fbfd1 + "\n\n") + "*Powered by Banks Official*");
            } else {
              _0x694d65("❌ *Ayah not found. Try: 1:1*\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x4fe10c) {
            console.error("Quran API Error:", _0x4fe10c);
            _0x694d65("❌ *Failed to fetch. Check the reference.*\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animeaid":
        {
          try {
            const _0x26b793 = await fetch("https://api.waifu.im/random/?selected_tags=maid");
            const {
              images: [_0x15e60d]
            } = await _0x26b793.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x15e60d.url
              },
              caption: "👗 *Random Anime Maid*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x285245) {
            _0x694d65("❌ Couldn't fetch maid\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "foxgirl":
        {
          try {
            const _0x3479b8 = await fetch("https://api.waifu.im/random/?selected_tags=fox_girl");
            const {
              images: [_0x48e14e]
            } = await _0x3479b8.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x48e14e.url
              },
              caption: "🦊 *Random Foxgirl*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x53936d) {
            _0x694d65("❌ Couldn't fetch foxgirl\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "catgirl":
        {
          try {
            const _0x3afc02 = await fetch("https://nekos.life/api/v2/img/neko");
            const {
              url: _0x1fc090
            } = await _0x3afc02.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x1fc090
              },
              caption: "🐱 *Random Catgirl*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x54919e) {
            _0x694d65("❌ Couldn't fetch catgirl\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animegif":
        {
          try {
            const _0xa44993 = ["wave", "blush", "dance", "cuddle"];
            const _0x5b9f2e = _0xa44993[Math.floor(Math.random() * _0xa44993.length)];
            const _0x3af4d5 = await fetch("https://nekos.best/api/v2/" + _0x5b9f2e);
            const {
              results: [_0x3ab734]
            } = await _0x3af4d5.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              video: {
                url: _0x3ab734.url
              },
              caption: "🎭 *Anime " + (_0x5b9f2e.charAt(0).toUpperCase() + _0x5b9f2e.slice(1)) + "*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3cd0c3) {
            _0x694d65("❌ Couldn't fetch anime gif\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animeme":
        {
          try {
            const _0x5e2521 = await fetch("https://api.waifu.pics/sfw/meme");
            const {
              url: _0x5e506a
            } = await _0x5e2521.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x5e506a
              },
              caption: "😂 *Anime Meme*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0xe86fdf) {
            _0x694d65("❌ Couldn't fetch anime meme\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animewall":
        {
          try {
            const _0x77b26d = await fetch("https://api.waifu.im/random/?selected_tags=wallpaper");
            const {
              images: [_0x35c8c3]
            } = await _0x77b26d.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x35c8c3.url
              },
              caption: "🖼️ *Anime Wallpaper*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x2a58e5) {
            _0x694d65("❌ Couldn't fetch wallpaper\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animecouple":
        {
          try {
            const _0xb2d603 = await fetch("https://shiro.gg/api/images/nsfw?type=waifu");
            const _0x3923c4 = await _0xb2d603.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x3923c4.url
              },
              caption: "💑 *Random Anime Couple*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0xe16e34) {
            _0x694d65("❌ Couldn't fetch anime couple\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animeboy":
        {
          try {
            const _0x52d55f = await fetch("https://api.waifu.im/random/?selected_tags=husbando");
            const {
              images: [_0x32eb59]
            } = await _0x52d55f.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x32eb59.url
              },
              caption: "👦 *Random Anime Boy*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x1413a4) {
            _0x694d65("❌ Couldn't fetch anime boy\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "animegirl":
        {
          try {
            const _0x4a994e = await fetch("https://nekos.best/api/v2/neko");
            const {
              results: [_0x49b47a]
            } = await _0x4a994e.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x49b47a.url
              },
              caption: "👧 *Random Anime Girl*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x543388) {
            _0x694d65("❌ Couldn't fetch anime girl\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "waifu":
        {
          try {
            const _0x1dffe1 = await fetch("https://api.waifu.im/random/?selected_tags=waifu");
            const {
              images: [_0x5d90b0]
            } = await _0x1dffe1.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x5d90b0.url
              },
              caption: "🌸 *Random Waifu*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x5efc7f) {
            _0x694d65("❌ Couldn't fetch waifu\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "urltitle":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🏷️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0xd864d1 = await fetch(_0x3ed79d);
            const _0x97ca34 = await _0xd864d1.text();
            const _0x200316 = _0x97ca34.match(/<title>(.*?)<\/title>/i)?.[1] || "No title found";
            _0x694d65("🏷️ *Page Title*\n\n" + _0x200316 + "\n\n*Powered by Banks Official*");
          } catch (_0x4b0b9f) {
            _0x694d65("❌ Couldn't fetch page title\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "wayback":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🕰️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x437e96 = await fetch("https://archive.org/wayback/available?url=" + encodeURIComponent(_0x3ed79d));
            const {
              archived_snapshots: _0x5a1353
            } = await _0x437e96.json();
            if (_0x5a1353.closest) {
              _0x694d65("🕰️ *Wayback Machine*\n\n" + ("URL: " + _0x3ed79d + "\n") + ("Last Archived: " + _0x5a1353.closest.timestamp + "\n") + ("View: " + _0x5a1353.closest.url + "\n\n") + "*Powered by Banks Official*");
            } else {
              _0x694d65("❌ No archive found for this URL\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x2d0050) {
            _0x694d65("❌ Wayback check failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "virustotal":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🛡️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x30e4b4 = await fetch("https://www.virustotal.com/vtapi/v2/url/report?apikey=YOUR_API_KEY&resource=" + encodeURIComponent(_0x3ed79d));
            const _0x2a3152 = await _0x30e4b4.json();
            let _0x59c18b = "";
            if (_0x2a3152.positives > 0) {
              _0x59c18b = "⚠️ *DANGEROUS* (" + _0x2a3152.positives + "/" + _0x2a3152.total + " scanners detected threats)";
            } else {
              _0x59c18b = "✅ *SAFE* (0/" + _0x2a3152.total + " threats detected)";
            }
            _0x694d65("🛡️ *VirusTotal Scan*\n\n" + ("URL: " + _0x3ed79d + "\n") + ("Status: " + _0x59c18b + "\n") + ("Scan Date: " + _0x2a3152.scan_date + "\n\n") + "*Powered by Banks Official*");
          } catch (_0x5afedc) {
            _0x694d65("❌ Scan failed. Get API key from virustotal.com\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "urlinfo":
        {
          if (!_0x3ed79d) {
            return _0x694d65("📊 Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x265dd3 = await fetch("https://api.urlmeta.org/?url=" + encodeURIComponent(_0x3ed79d));
            const {
              meta: _0x49a158
            } = await _0x265dd3.json();
            _0x694d65("📊 *URL Information*\n\n" + ("Title: " + (_0x49a158.title || "None") + "\n") + ("Description: " + (_0x49a158.description?.substring(0, 100) || "None") + "\n") + ("Domain: " + _0x49a158.domain + "\n") + ("Country: " + (_0x49a158.country || "Unknown") + "\n") + ("SSL Secure: " + (_0x49a158.secure ? "✅" : "❌") + "\n\n") + "*Powered by Banks Official*");
          } catch (_0x47cddf) {
            _0x694d65("❌ Couldn't fetch URL info\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "screenshot":
        {
          if (!_0x3ed79d) {
            return _0x694d65("📸 Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x4da248 = "https://image.thum.io/get/width/1024/crop/800/noanimate/" + _0x3ed79d;
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x4da248
              },
              caption: "📸 *Screenshot of*\n" + _0x3ed79d + "\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x48f2f1) {
            _0x694d65("❌ Screenshot failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "urlqr":
        {
          if (!_0x3ed79d) {
            return _0x694d65("〽️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x3f7689 = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + encodeURIComponent(_0x3ed79d);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x3f7689
              },
              caption: "〽️ *QR Code for URL*\n\n" + _0x3ed79d + "\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x44d247) {
            _0x694d65("❌ QR generation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "blur":
        {
          const _0x2f4247 = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x2f4247) {
            return _0x694d65("🌀 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x1c04e6 = "https://some-random-api.ml/canvas/filter/blur?avatar=" + encodeURIComponent(_0x2f4247);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x1c04e6
              },
              caption: "🌀 *Blurred Image*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x2279e5) {
            _0x694d65("❌ Blur effect failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "pixelate":
        {
          const _0x60465c = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x60465c) {
            return _0x694d65("🧊 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0xaa6981 = "https://some-random-api.ml/canvas/filter/pixelate?avatar=" + encodeURIComponent(_0x60465c);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0xaa6981
              },
              caption: "🧊 *Pixelated Image*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3d89e8) {
            _0x694d65("❌ Pixelation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "colorify":
        {
          const [_0x313a8f, _0xee3603] = _0x3ed79d.split("|");
          const _0x4cbc44 = _0xcac50f.quoted?.image?.url || _0x313a8f;
          if (!_0x4cbc44) {
            return _0x694d65("🌈 Usage: Reply to image or " + (_0x2b6114 + _0x59dd4b) + " [image]|[hex color]\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]|#FF0000\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x3ebcd3 = "https://some-random-api.ml/canvas/filter/color?avatar=" + encodeURIComponent(_0x4cbc44) + "&color=" + encodeURIComponent(_0xee3603 || "#FF0000");
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x3ebcd3
              },
              caption: "🌈 *Colorified Image*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x376cda) {
            _0x694d65("❌ Colorify failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "triggered":
        {
          const _0x333e4b = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x333e4b) {
            return _0x694d65("🔴 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x40c141 = "https://some-random-api.ml/canvas/misc/triggered?avatar=" + encodeURIComponent(_0x333e4b);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              video: {
                url: _0x40c141
              },
              caption: "🔴 *Triggered GIF*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x2664b2) {
            _0x694d65("❌ Triggered effect failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "wanted":
        {
          const _0x217700 = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x217700) {
            return _0x694d65("🚨 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0xe455dd = "https://some-random-api.ml/canvas/misc/wanted?avatar=" + encodeURIComponent(_0x217700);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0xe455dd
              },
              caption: "🚨 *Wanted Poster*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x44ec0a) {
            _0x694d65("❌ Wanted poster failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "jail":
        {
          const _0x19f01f = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x19f01f) {
            return _0x694d65("🚔 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0xd52e15 = "https://some-random-api.ml/canvas/misc/jail?avatar=" + encodeURIComponent(_0x19f01f);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0xd52e15
              },
              caption: "🚔 *Jailed Image*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x311f4c) {
            _0x694d65("❌ Jail effect failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "missionpassed":
        {
          const [_0x72166, _0x6946b8] = _0x72166.split("|");
          if (!_0x72166) {
            return _0x694d65("✅ Usage: " + (_0x2b6114 + _0x59dd4b) + " text|reward\nExample: " + (_0x2b6114 + _0x59dd4b) + " Completed Task|$100\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x1fc0f0 = "https://some-random-api.ml/canvas/misc/gta?avatar=" + encodeURIComponent(ppUrl) + "&username=" + encodeURIComponent(pushName) + "&comment=" + encodeURIComponent(_0x72166) + "&reward=" + encodeURIComponent(_0x6946b8 || "100");
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x1fc0f0
              },
              caption: "✅ *Mission Passed!*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3d14b8) {
            _0x694d65("❌ Mission passed generation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "deepfry":
        {
          const _0x174cbe = _0xcac50f.quoted?.image?.url || _0x3ed79d;
          if (!_0x174cbe) {
            return _0x694d65("🍟 Usage: Reply to image or provide URL\nExample: " + (_0x2b6114 + _0x59dd4b) + " [image]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x376ef4 = "https://some-random-api.ml/canvas/filter/deepfry?avatar=" + encodeURIComponent(_0x174cbe);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x376ef4
              },
              caption: "🍟 *Deepfried Image*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x1c339f) {
            _0x694d65("❌ Deepfry failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "fox":
        {
          try {
            const _0x373b5d = await fetch("https://randomfox.ca/floof/");
            const _0x4f364a = await _0x373b5d.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x4f364a.image
              },
              caption: "🦊 *Random Fox*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0xbbff53) {
            _0x694d65("❌ Couldn't fetch fox\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "panda":
        {
          try {
            const _0x3c5d87 = await fetch("https://some-random-api.ml/img/panda");
            const _0x38461d = await _0x3c5d87.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x38461d.link
              },
              caption: "🐼 *Random Panda*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x34c251) {
            _0x694d65("❌ Couldn't fetch panda\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "redpanda":
        {
          try {
            const _0x596c38 = await fetch("https://some-random-api.ml/img/red_panda");
            const _0x3cd51c = await _0x596c38.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x3cd51c.link
              },
              caption: "🐾 *Random Red Panda*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x5ad39e) {
            _0x694d65("❌ Couldn't fetch red panda\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "bird":
        {
          try {
            const _0x589ac3 = await fetch("https://some-random-api.ml/img/birb");
            const _0x22e1f5 = await _0x589ac3.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x22e1f5.link
              },
              caption: "🐦 *Random Bird*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x2f90b7) {
            _0x694d65("❌ Couldn't fetch bird\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "koala":
        {
          try {
            const _0x331148 = await fetch("https://some-random-api.ml/img/koala");
            const _0x42a818 = await _0x331148.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x42a818.link
              },
              caption: "🐨 *Random Koala*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x20048e) {
            _0x694d65("❌ Couldn't fetch koala\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "duck":
        {
          try {
            const _0x5eb964 = await fetch("https://random-d.uk/api/v2/random");
            const _0x2252e6 = await _0x5eb964.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x2252e6.url
              },
              caption: "🦆 *Random Duck*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x5ac85e) {
            _0x694d65("❌ Couldn't fetch duck\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "kangaroo":
        {
          try {
            const _0x26a022 = await fetch("https://some-random-api.ml/img/kangaroo");
            const _0x5c394f = await _0x26a022.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x5c394f.link
              },
              caption: "🦘 *Random Kangaroo*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x2de538) {
            _0x694d65("❌ Couldn't fetch kangaroo\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "raccoon":
        {
          try {
            const _0x4b7095 = await fetch("https://some-random-api.ml/img/raccoon");
            const _0x2addf1 = await _0x4b7095.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x2addf1.link
              },
              caption: "🦝 *Random Raccoon*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x481e2a) {
            _0x694d65("❌ Couldn't fetch raccoon\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "shorten-url":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🔗 Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://example.com\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x342d43 = ["https://is.gd/create.php?format=simple&url=" + encodeURIComponent(_0x3ed79d), "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(_0x3ed79d), "https://api.shrtco.de/v2/shorten?url=" + encodeURIComponent(_0x3ed79d)];
            let _0x7c0347;
            for (const _0x22db5a of _0x342d43) {
              try {
                const _0x521adc = await fetch(_0x22db5a);
                _0x7c0347 = await _0x521adc.text();
                if (_0x7c0347.startsWith("http")) {
                  break;
                }
              } catch {}
            }
            if (!_0x7c0347) {
              throw new Error();
            }
            _0x694d65("🔗 *Shortened URL*\n\nOriginal: " + _0x3ed79d + "\nShort: " + _0x7c0347 + "\n\n*Powered by Banks Official*");
          } catch (_0x14b382) {
            _0x694d65("❌ URL shortening failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "torah":
        {
          if (!_0x3ed79d) {
            _0x694d65("✡ *Please provide a reference (e.g., Genesis 1:1).*\n\n*Powered by BANKS MD BOT*");
            return;
          }
          try {
            const _0x562979 = "https://www.sefaria.org/api/texts/" + _0x3ed79d.replace(/\s/g, ".");
            const _0x435291 = await fetch(_0x562979);
            const _0x1d0978 = await _0x435291.json();
            if (_0x1d0978.text) {
              _0x694d65("✡ *Torah* 🔯\n" + ("*" + _0x3ed79d + "*\n\n") + ((Array.isArray(_0x1d0978.text) ? _0x1d0978.text.join("\n") : _0x1d0978.text) + "\n\n") + "*Powered by Banks Official*");
            } else {
              _0x694d65("❌ *Verse not found. Try: Genesis 1:1*\n\n*Powered by BANKS MD BOT*");
            }
          } catch (_0x2ab549) {
            console.error("Torah API Error:", _0x2ab549);
            _0x694d65("❌ *Failed to fetch. Check the reference.*\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "pet":
        {
          let _0x49df9c = _0x3ed79d?.trim();
          if (!_0x49df9c && _0xcac50f.quoted?.image) {
            _0x49df9c = await _0x4acc2b.downloadAndSaveMediaMessage(_0xcac50f.quoted);
          }
          if (!_0x49df9c) {
            _0x694d65("🐾 *Pet Pixel Generator* 🐶\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [image URL]\n") + ("OR reply to an image with " + (_0x2b6114 + _0x59dd4b) + "\n\n") + "");
            return;
          }
          if (!_0x49df9c.startsWith("http") && !fs.existsSync(_0x49df9c)) {
            _0x694d65("❌ *Invalid Image Source*\n\nPlease provide either:\n1. A valid http/https image URL\n2. Reply to an image message\n\n*Powered by BANKS MD BOT*Provide either:\n1. Two valid image URLs\n2. One quoted image + one URL\n3. Both images in quoted message\n\n");
            return;
          }
          try {
            const _0x5affb7 = "https://api.popcat.xyz/pet?image=" + encodeURIComponent(_0x49df9c);
            const _0xd93b23 = await fetch(_0x5affb7, {
              method: "HEAD"
            });
            if (!_0xd93b23.ok) {
              throw new Error("API returned " + _0xd93b23.status + " status");
            }
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x5affb7
              },
              caption: "🐾 *Who's a good pixel pet?* 🐶\n\n*Powered by Banks Official*",
              mimetype: "image/jpeg"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x5981b3) {
            console.error("Pet API Error:", _0x5981b3);
            let _0x152928 = "❌ *Pet Generation Failed*\n\n";
            if (_0x5981b3.message.includes("404")) {
              _0x152928 += "Image not found or inaccessible";
            } else if (_0x5981b3.message.includes("image")) {
              _0x152928 += "Invalid image format detected";
            } else {
              _0x152928 += "API service unavailable";
            }
            _0x694d65(_0x152928 + "\n\n*Powered by BANKS MD BOT*");
          } finally {
            if (_0x49df9c && fs.existsSync(_0x49df9c)) {
              fs.unlinkSync(_0x49df9c);
            }
          }
          break;
        }
      case "fight":
      case "whowouldwin":
        {
          let [_0x5d3d23, _0x17b939] = _0x3ed79d ? _0x3ed79d.split(/ +/) : [];
          if (!_0x5d3d23 && _0xcac50f.quoted?.image) {
            _0x5d3d23 = await _0x4acc2b.downloadAndSaveMediaMessage(_0xcac50f.quoted);
            const _0x40450c = _0xcac50f.quoted.text || "";
            const _0x4af196 = _0x40450c.split(/ +/)[0];
            if (_0x4af196 && _0x4af196.match(/^https?:\/\//)) {
              _0x17b939 = _0x4af196;
            }
          }
          if (!_0x5d3d23 || !_0x17b939) {
            _0x694d65("⚔️ *Battle Arena* ⚔️\n\n" + ("Usage:\n1. " + (_0x2b6114 + _0x59dd4b) + " [image1] [image2]\n") + ("2. Reply to image + " + (_0x2b6114 + _0x59dd4b) + " [other_image]\n") + "3. Reply to message with 2 image URLs\n\n" + ("Example: " + (_0x2b6114 + _0x59dd4b) + " https://i.imgur.com/cat.jpg https://i.imgur.com/dog.jpg\n\n") + "");
            return;
          }
          if (!(_0x5d3d23.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i) || fs.existsSync(_0x5d3d23)) || !(_0x17b939.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i) || fs.existsSync(_0x17b939))) {
            _0x694d65("❌ *Invalid Image Source*\n\nPlease provide either:\n1. A valid http/https image URL\n2. Reply to an image message\n\n*Powered by BANKS MD BOT*Provide either:\n1. Two valid image URLs\n2. One quoted image + one URL\n3. Both images in quoted message\n\n");
            return;
          }
          try {
            const _0x4506c0 = "https://api.popcat.xyz/whowouldwin?image1=" + encodeURIComponent(_0x5d3d23) + "&image2=" + encodeURIComponent(_0x17b939);
            const _0x45c1b1 = await fetch(_0x4506c0, {
              method: "HEAD"
            });
            if (!_0x45c1b1.ok) {
              throw new Error("API returned " + _0x45c1b1.status);
            }
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x4506c0
              },
              caption: "⚔️ *WHO WOULD WIN?* ⚔️\n\n🥊 *Contestants:*\n" + ("1️⃣ " + (_0x5d3d23.length > 30 ? _0x5d3d23.substring(0, 30) + "..." : _0x5d3d23) + "\n") + ("2️⃣ " + (_0x17b939.length > 30 ? _0x17b939.substring(0, 30) + "..." : _0x17b939) + "\n\n") + "*Powered by Banks Official*",
              mimetype: "image/jpeg"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0xecec04) {
            console.error("Battle API Error:", _0xecec04);
            let _0x34b00b = "❌ *Battle Failed*\n\n";
            if (_0xecec04.message.includes("404")) {
              _0x34b00b += "One image not found";
            } else if (_0xecec04.message.includes("50")) {
              _0x34b00b += "Arena temporarily closed";
            } else {
              _0x34b00b += "Invalid image format";
            }
            _0x694d65(_0x34b00b + "\n\n*Powered by BANKS MD BOT*");
          } finally {
            [_0x5d3d23, _0x17b939].forEach(_0x45c993 => {
              if (_0x45c993 && fs.existsSync(_0x45c993)) {
                fs.unlinkSync(_0x45c993);
              }
            });
          }
          break;
        }
      case "vcf":
        {
          if (!_0xcac50f.isGroup) {
            return _0x694d65("🚫 *This command can only be used in groups!*");
          }
          let _0x14e043 = await _0x4acc2b.groupMetadata(_0xcac50f.chat);
          let _0x5a6370 = _0x14e043.subject || "Unknown Group";
          let _0x42b1e6 = _0x14e043.participants;
          let _0x1a46c4 = _0x42b1e6.length;
          if (!_0x42b1e6 || _0x42b1e6.length === 0) {
            return _0x694d65("⚠️ *No members found in this group!*");
          }
          let _0x7a85a5 = "BEGIN:VCARD\nVERSION:3.0\n";
          for (let _0x2172e1 of _0x42b1e6) {
            let _0x239f59 = _0x2172e1.id.replace(/@s.whatsapp.net/, "");
            let _0x2cb9d7 = _0x2172e1.notify || "Unknown Contact";
            _0x7a85a5 += "FN:" + _0x2cb9d7 + "\n";
            _0x7a85a5 += "TEL;TYPE=CELL:+" + _0x239f59 + "\n";
            _0x7a85a5 += "END:VCARD\n";
          }
          let _0x59386c = _0x5a6370 + "_Contacts.vcf";
          _0x694d65("📂 *Generating vCard for " + _0x1a46c4 + " members in '" + _0x5a6370 + "'...*");
          setTimeout(() => {
            _0x4acc2b.sendMessage(_0xcac50f.chat, {
              document: Buffer.from(_0x7a85a5),
              mimetype: "text/vcard",
              fileName: _0x59386c
            }, {
              quoted: _0xcac50f
            });
            _0x694d65("✅ *vCard file for '" + _0x5a6370 + "' has been generated successfully!* 📄");
          }, 3000);
          break;
        }
      case "url":
        {
          try {
            const _0x4ba111 = require("axios");
            const _0xe4c202 = require("form-data");
            const _0x474c22 = require("fs-extra");
            async function _0x4bdb65(_0x3c3a63) {
              if (!_0x474c22.existsSync(_0x3c3a63)) {
                throw new Error("File does not exist");
              }
              try {
                const _0xa5d82b = new _0xe4c202();
                _0xa5d82b.append("reqtype", "fileupload");
                _0xa5d82b.append("userhash", "");
                _0xa5d82b.append("fileToUpload", _0x474c22.createReadStream(_0x3c3a63));
                const _0x2f59f0 = {
                  method: "POST",
                  url: "https://catbox.moe/user/api.php",
                  headers: {
                    ..._0xa5d82b.getHeaders()
                  },
                  data: _0xa5d82b
                };
                const _0x11d461 = await _0x4ba111.request(_0x2f59f0);
                return _0x11d461.data.trim();
              } catch (_0x42c42c) {
                console.error("Error uploading to Catbox:", _0x42c42c.message);
                throw new Error("Failed to upload to Catbox");
              }
            }
            if (!_0xcac50f.quoted) {
              return _0x694d65("📌 *Please reply to an image, video, or audio file to upload!*");
            }
            let _0x657db6;
            try {
              _0x657db6 = await _0x4acc2b.downloadAndSaveMediaMessage(_0xcac50f.quoted);
            } catch (_0x510152) {
              console.error("❌ Error while downloading media:", _0x510152);
              return _0x694d65("❌ *Unable to download the media file. Please try again!*");
            }
            if (!_0x657db6) {
              return _0x694d65("⚠️ *No media file detected. Please reply to an image, video, or audio message.*");
            }
            _0x694d65("⏳ *Uploading your file, please wait...*");
            const _0x4c5298 = await _0x4bdb65(_0x657db6);
            _0x474c22.unlinkSync(_0x657db6);
            _0x694d65("✅ *Successfully uploaded!*\n🌐 *Here is your URL:* " + _0x4c5298 + "\n\n*Powered by Banks Official*");
          } catch (_0x527a15) {
            console.error("❌ Error while uploading to Catbox:", _0x527a15);
            _0x694d65("❌ *Oops, something went wrong while creating your URL. Please try again!*\n\n*Powered by Banks Official*");
          }
          break;
        }
      case "shorten":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🔗 Usage: " + (_0x2b6114 + _0x59dd4b) + " [url]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x1e0a6b = await fetch("https://is.gd/create.php?format=simple&url=" + encodeURIComponent(_0x3ed79d));
            const _0xd8777b = await _0x1e0a6b.text();
            _0x694d65("🔗 *Shortened URL*\n\nOriginal: " + _0x3ed79d + "\nShort: " + _0xd8777b + "\n\n*Powered by Banks Official*");
          } catch (_0x53c650) {
            _0x694d65("❌ Invalid URL\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "qr":
        {
          if (!_0x3ed79d) {
            return _0x694d65("〽️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [text]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x1c05b3 = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(_0x3ed79d);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x1c05b3
              },
              caption: "〽️ *QR Code Generated*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3097b0) {
            _0x694d65("❌ QR generation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "bunny":
        {
          try {
            const _0x2fff81 = await fetch("https://api.bunnies.io/v2/loop/random/?media=gif,png");
            const _0x184f64 = await _0x2fff81.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x184f64.media.poster
              },
              caption: "🐰 *Random Bunny*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x4b7f14) {
            _0x694d65("❌ Couldn't fetch bunny\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "goat":
        {
          try {
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: "https://placegoat.com/400/400"
              },
              caption: "🐐 *Random Goat*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x228ef7) {
            _0x694d65("❌ Couldn't fetch goat\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "horse":
        {
          try {
            const _0x3aefb5 = await fetch("https://api-ninjas.com/api/horse");
            const _0x32053f = await _0x3aefb5.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x32053f.image
              },
              caption: "🐴 *Random Horse*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x48cc6b) {
            _0x694d65("❌ Couldn't fetch horse\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "dog":
        {
          try {
            const _0x405c26 = await fetch("https://dog.ceo/api/breeds/image/random");
            const _0x493e40 = await _0x405c26.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x493e40.message
              },
              caption: "🐶 *Random Dog*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3288f6) {
            _0x694d65("❌ Couldn't fetch dog\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "cat":
        {
          try {
            const _0xcd8d1e = await fetch("https://api.thecatapi.com/v1/images/search");
            const [_0x4b389e] = await _0xcd8d1e.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x4b389e.url
              },
              caption: "🐱 *Random Cat*\n\n*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x541dbd) {
            _0x694d65("❌ Couldn't fetch cat\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "fakeuser":
        {
          try {
            const _0x43ab60 = await fetch("https://randomuser.me/api/");
            const {
              results: [_0x143fa0]
            } = await _0x43ab60.json();
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x143fa0.picture.large
              },
              caption: "👤 *Fake Identity*\n\n" + ("Name: " + _0x143fa0.name.first + " " + _0x143fa0.name.last + "\n") + ("Email: " + _0x143fa0.email + "\n") + ("Phone: " + _0x143fa0.phone + "\n") + ("Location: " + _0x143fa0.location.city + ", " + _0x143fa0.location.country + "\n\n") + "*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x12e8d1) {
            _0x694d65("❌ Generation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "ascii":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🖼️ Usage: " + (_0x2b6114 + _0x59dd4b) + " [text]\nExample: " + (_0x2b6114 + _0x59dd4b) + " XMD\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x443a48 = await fetch("http://artii.herokuapp.com/make?text=" + encodeURIComponent(_0x3ed79d));
            const _0x3a4a24 = await _0x443a48.text();
            _0x694d65("```" + _0x3a4a24 + "```\n\n*Powered by Banks Official*");
          } catch (_0x223513) {
            _0x694d65("❌ ASCII generation failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "iplookup":
        {
          const _0x22f1d2 = _0x3ed79d || _0xcac50f.sender.split("@")[0];
          try {
            const _0xe98b3f = await fetch("https://ipapi.co/" + _0x22f1d2 + "/json/");
            const _0xee8790 = await _0xe98b3f.json();
            _0x694d65("🌐 *IP Information*\n\n" + ("IP: " + _0xee8790.ip + "\n") + ("City: " + _0xee8790.city + "\n") + ("Region: " + _0xee8790.region + "\n") + ("Country: " + _0xee8790.country_name + "\n") + ("ISP: " + _0xee8790.org + "\n\n") + "*Powered by Banks Official*");
          } catch (_0x1e473c) {
            _0x694d65("❌ IP lookup failed\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "opinion":
        {
          const [_0x7ef246, _0x338c67] = _0x3ed79d.split("|").map(_0x3324ff => _0x3324ff?.trim());
          if (!_0x7ef246 || !_0x338c67) {
            _0x694d65("🗣️ *Opinion Meme Generator*\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [image_url]|[your_opinion]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " https://i.imgur.com/abc123.jpg|This is my opinion\n") + "• Max 60 characters for opinion\n• Image must be direct URL\n\n");
            return;
          }
          if (!/^https?:\/\/.+\..+/.test(_0x7ef246)) {
            _0x694d65("❌ *Invalid Image URL*\n\nPlease provide a valid direct image URL\nExample: https://i.imgur.com/abc123.jpg\n\n");
            return;
          }
          if (_0x338c67.length > 60) {
            _0x694d65("❌ *Opinion Too Long*\n\n" + (_0x338c67.length + "/60 characters\n") + "Keep your opinion concise!\n\n");
            return;
          }
          const _0x104f61 = [/fuck|shit|asshole|bitch|cunt/i, /n[i1!]+gg[e3r]*/i, /popcatdev.+sucks|api.+bad/i];
          if (_0x104f61.some(_0x3651cc => _0x3651cc.test(_0x338c67))) {
            _0x694d65("❌ *Inappropriate Opinion*\n\nPlease express your thoughts respectfully\n\n");
            return;
          }
          try {
            const _0x346b65 = "https://api.popcat.xyz/opinion?image=" + encodeURIComponent(_0x7ef246) + "&text=" + encodeURIComponent(_0x338c67);
            const _0x2792e5 = new AbortController();
            const _0x1490eb = setTimeout(() => _0x2792e5.abort(), 8000);
            const _0x525083 = await fetch(_0x7ef246, {
              method: "HEAD",
              signal: _0x2792e5.signal
            });
            if (!_0x525083.ok) {
              throw new Error("Image URL inaccessible");
            }
            const _0x36030e = await fetch(_0x346b65, {
              method: "HEAD",
              signal: _0x2792e5.signal
            });
            clearTimeout(_0x1490eb);
            if (!_0x36030e.ok) {
              throw new Error("API returned " + _0x36030e.status);
            }
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x346b65
              },
              caption: "🗣️ *Hot Take*\n\n" + ("\"" + _0x338c67 + "\"\n\n") + "*Powered by Banks Official*",
              mimetype: "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  title: "Opinion Meme",
                  body: "What do YOU think?",
                  thumbnail: await (await fetch("https://i.imgur.com/JQLz4KX.png")).buffer(),
                  mediaType: 1,
                  mediaUrl: "",
                  sourceUrl: ""
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x309312) {
            console.error("Opinion API Error:", _0x309312);
            const _0x132eb0 = ["Couldn't generate your opinion meme...", "The opinion machine broke!", "🚫 Error expressing this opinion"];
            _0x694d65("⚠️ *Opinion Failed*\n\n" + (_0x132eb0[Math.floor(Math.random() * _0x132eb0.length)] + "\n") + ("Error: " + _0x309312.message + "\n\n") + "");
          }
          break;
        }
      case "react":
        {
          if (_0x55fa2c[0] === "on" || _0x55fa2c[0] === "off") {
            if (!_0x1b25de) {
              return _0x694d65("👑 *Royal Guard Block*\nOnly advisors may modify reactions!");
            }
            global.reactSettings.enabled = _0x55fa2c[0] === "on";
            return _0x694d65("♻️ Auto-reactions " + (global.reactSettings.enabled ? "ENABLED" : "DISABLED"));
          }
          if (!_0xcac50f.quoted) {
            return _0x694d65("🔍 *Usage:* Reply to a message with:\n.react [emoji?]");
          }
          const _0x3f9d02 = _0x55fa2c[0]?.match(/\p{Emoji}/u)?.[0] || global.reactSettings.emojis[Math.floor(Math.random() * global.reactSettings.emojis.length)];
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            react: {
              text: _0x3f9d02,
              key: _0xcac50f.quoted.key
            }
          });
          break;
        }
      case "ig":
      case "instagram":
        {
          if (!_0x3ed79d) {
            _0x694d65("📷 *Instagram Downloader*\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [instagram_url]\n") + ("Examples:\n" + (_0x2b6114 + _0x59dd4b) + " https://www.instagram.com/reel/DD6q97IuzxD\n" + (_0x2b6114 + _0x59dd4b) + " https://www.instagram.com/p/Cu9UJOjNQ4X\n\n") + "Supports Reels, Posts, and Stories\n\n");
            return;
          }
          if (!/(instagram\.com\/(reel|p|stories)|instagr\.am)/i.test(_0x3ed79d)) {
            _0x694d65("❌ *Invalid Instagram URL*\n\nPlease provide a valid Instagram link\nFormats supported:\n• Reels: https://www.instagram.com/reel/...\n• Posts: https://www.instagram.com/p/...\n• Stories: https://www.instagram.com/stories/...\n\n");
            return;
          }
          try {
            const _0x5458fd = "https://apis.davidcyriltech.my.id/instagram?url=" + encodeURIComponent(_0x3ed79d);
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            const _0x3fa7ec = await fetch(_0x5458fd);
            const _0x2c4d03 = await _0x3fa7ec.json();
            if (!_0x2c4d03.status || !_0x2c4d03.result) {
              throw new Error(_0x2c4d03.message || "No media found");
            }
            const {
              type: _0x45ec48,
              url: _0x26d1a9,
              caption: _0x44fc63,
              username: _0x71278c
            } = _0x2c4d03.result;
            const _0x47e470 = _0x45ec48 === "reel" || _0x45ec48 === "video";
            const _0x4a86ba = _0x45ec48 === "story";
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              [_0x47e470 ? "video" : "image"]: {
                url: _0x26d1a9
              },
              caption: "📷 *Instagram " + _0x45ec48.toUpperCase() + "* " + (_0x4a86ba ? " (Story)" : "") + "\n\n" + (_0x44fc63 ? _0x44fc63 + "\n\n" : "") + ("👤 @" + (_0x71278c || "unknown") + "\n\n") + "*Powered by Banks Official*",
              mimetype: _0x47e470 ? "video/mp4" : "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  title: "Instagram " + (_0x45ec48.charAt(0).toUpperCase() + _0x45ec48.slice(1)),
                  body: _0x44fc63 ? _0x44fc63.substring(0, 50) + (_0x44fc63.length > 50 ? "..." : "") : "Downloaded Content",
                  thumbnail: await (await fetch("https://i.imgur.com/JQLz4KX.png")).buffer(),
                  mediaType: _0x47e470 ? 2 : 1,
                  sourceUrl: _0x3ed79d
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x527528) {
            console.error("Instagram Download Error:", _0x527528);
            _0x694d65("❌ *Failed to download Instagram content*\n\n" + ("Error: " + _0x527528.message + "\n\n") + "Possible reasons:\n• Private account\n• Invalid URL format\n• API limit reached\n\n");
          }
          break;
        }
      case "tiktok":
        {
          if (!_0x3ed79d) {
            _0x694d65("🎵 *TikTok Downloader*\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [tiktok_url]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " https://vm.tiktok.com/ZMkMuEmmd\n\n") + "");
            return;
          }
          if (!/(vm\.tiktok\.com|tiktok\.com|www\.tiktok\.com)/.test(_0x3ed79d)) {
            _0x694d65("❌ *Invalid TikTok URL*\n\nPlease provide a valid TikTok link\nExample: https://vm.tiktok.com/ZMkMuEmmd\n\n");
            return;
          }
          try {
            const _0x1509b5 = "https://apis.davidcyriltech.my.id/download/tiktok?url=" + encodeURIComponent(_0x3ed79d);
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            const _0x272cc4 = await fetch(_0x1509b5);
            const _0x547799 = await _0x272cc4.json();
            if (!_0x547799.status || !_0x547799.result) {
              throw new Error(_0x547799.message || "Invalid API response");
            }
            const {
              video: _0x3110df,
              caption: _0x2d2673,
              author: _0x4346a2,
              audio: _0x56fd72
            } = _0x547799.result;
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              video: {
                url: _0x3110df
              },
              caption: "🎬 *" + (_0x2d2673 || "TikTok Video") + "*\n\n" + ("👤 Author: " + (_0x4346a2?.username || "Unknown") + "\n") + ("🎵 Audio: " + (_0x56fd72?.title || "Original Sound") + "\n\n") + "*Powered by Banks Official*",
              mimetype: "video/mp4",
              contextInfo: {
                externalAdReply: {
                  title: "TikTok Download",
                  body: "Downloaded via API",
                  thumbnail: await (await fetch(_0x4346a2?.avatar || "https://i.imgur.com/JQLz4KX.png")).buffer(),
                  mediaType: 2,
                  mediaUrl: _0x3ed79d,
                  sourceUrl: _0x3ed79d
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x4c92a1) {
            console.error("TikTok Download Error:", _0x4c92a1);
            _0x694d65("❌ *Failed to download TikTok*\n\n" + ("Error: " + _0x4c92a1.message + "\n\n") + "");
          }
          break;
        }
      case "groupfinder":
        {
          if (!_0x3ed79d) {
            return _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " Bulawayo");
          }
          try {
            await _0x694d65(_0xcac50f.chat, {
              react: {
                text: "🔍",
                key: _0xcac50f.key
              }
            });
            const _0x48dde4 = "https://iconictech-apisfree.vercel.app/api/search-whatsapp?q=" + encodeURIComponent(_0x3ed79d);
            const _0x27adb5 = await axios.get(_0x48dde4);
            if (!_0x27adb5.data || !_0x27adb5.data.status || !_0x27adb5.data.result || !_0x27adb5.data.result.length) {
              return _0x694d65("No WhatsApp groups found for \"" + _0x3ed79d + "\". Try another search term.");
            }
            const _0xf4ac62 = _0x27adb5.data.result.slice(0, 10);
            let _0x573fc3 = "🔍 *WhatsApp Groups Found for \"" + _0x3ed79d + "\"*\n\n";
            _0x573fc3 += "*Creator:* " + (_0x27adb5.data.creator || "Banks Official") + "\n";
            _0x573fc3 += "*Total Groups Found:* " + _0x27adb5.data.result.length + "\n\n";
            _0x573fc3 += "*Top " + _0xf4ac62.length + " Groups:*\n\n";
            _0xf4ac62.forEach((_0x268924, _0xf53866) => {
              _0x573fc3 += "*" + (_0xf53866 + 1) + ". " + (_0x268924.title || "Untitled Group") + "*\n";
              _0x573fc3 += "🔗 " + _0x268924.link + "\n\n";
            });
            _0x573fc3 += "ℹ️ Click on any link above to join a group.\n";
            _0x573fc3 += "📌 *Note:* Be cautious when joining unknown groups.\n\n";
            _0x573fc3 += "*Powered by Banks Official*";
            await _0x694d65(_0x573fc3);
            for (const _0x1b79ad of _0xf4ac62.slice(0, 3)) {
              if (_0x1b79ad.thumb) {
                try {
                  await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                    image: {
                      url: _0x1b79ad.thumb
                    },
                    caption: "*" + _0x1b79ad.title + "*\n" + _0x1b79ad.link
                  }, {
                    quoted: _0xcac50f
                  });
                } catch (_0x344466) {
                  console.error("Error sending group thumbnail:", _0x344466);
                }
              }
            }
          } catch (_0x19350f) {
            console.error("Error in groupfinder command:", _0x19350f);
            _0x694d65("An error occurred while searching for groups. Please try again later.");
          }
          break;
        }
      case "meme":
        {
          try {
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            const _0x2738d4 = ["https://api.popcat.xyz/meme", "https://meme-api.herokuapp.com/gimme", "https://api.imgflip.com/get_memes"];
            let _0x2072da;
            let _0x4887b8 = 0;
            while (_0x4887b8 < _0x2738d4.length) {
              try {
                const _0x364b9e = await fetch(_0x2738d4[_0x4887b8]);
                const _0x1c158f = await _0x364b9e.json();
                if (_0x2738d4[_0x4887b8].includes("meme-api")) {
                  if (_0x1c158f.url) {
                    _0x2072da = {
                      url: _0x1c158f.url,
                      title: _0x1c158f.title || "Random Meme",
                      subreddit: _0x1c158f.subreddit || ""
                    };
                    break;
                  }
                } else if (_0x2738d4[_0x4887b8].includes("imgflip")) {
                  if (_0x1c158f.success && _0x1c158f.data.memes.length > 0) {
                    const _0x173738 = _0x1c158f.data.memes[Math.floor(Math.random() * _0x1c158f.data.memes.length)];
                    _0x2072da = {
                      url: _0x173738.url,
                      title: _0x173738.name || "ImgFlip Meme",
                      subreddit: ""
                    };
                    break;
                  }
                }
              } catch (_0x46fe1f) {
                console.error("Meme API " + (_0x4887b8 + 1) + " failed:", _0x46fe1f.message);
              }
              _0x4887b8++;
            }
            if (!_0x2072da) {
              throw new Error("All meme APIs failed");
            }
            const _0x847ca8 = await fetch(_0x2072da.url, {
              method: "HEAD"
            });
            if (!_0x847ca8.ok) {
              throw new Error("Image URL not accessible");
            }
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x2072da.url
              },
              caption: "🎲 *Random Meme*\n\n" + ("📛 *Title:* " + _0x2072da.title + "\n") + (_0x2072da.subreddit ? "📌 *Subreddit:* r/" + _0x2072da.subreddit + "\n\n" : "\n") + "*Powered by BANKS MD BOT*",
              mimetype: "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Fresh Meme Delivery",
                  body: "Powered by Reddit API",
                  thumbnail: await (await fetch("https://i.imgur.com/8Km9tLL.jpg")).arrayBuffer(),
                  sourceUrl: _0x2072da.url,
                  mediaType: 1
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x56bb01) {
            console.error("Meme Error:", _0x56bb01);
            const _0x434156 = ["https://i.imgflip.com/4/1bij.jpg", "https://i.imgflip.com/4/1bgw.jpg", "https://i.imgflip.com/4/1bhf.jpg"];
            const _0x2f387a = _0x434156[Math.floor(Math.random() * _0x434156.length)];
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x2f387a
              },
              caption: "🎲 *Classic Meme (Fallback)*\n\n🔧 Original meme service unavailable\nEnjoy this classic instead!\n\n*Powered by BANKS MD BOT*"
            }, {
              quoted: _0xcac50f
            });
          }
          break;
        }
      case "anime-search":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🌸 Usage: " + (_0x2b6114 + _0x59dd4b) + " [anime title]\n\n*Powered by BANKS MD BOT*");
          }
          try {
            const _0x1e9eb3 = await fetch("https://api.jikan.moe/v4/anime?q=" + encodeURIComponent(_0x3ed79d));
            const {
              data: _0x5ed8fe
            } = await _0x1e9eb3.json();
            const _0x5d4e79 = _0x5ed8fe[0];
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x5d4e79.images.jpg.image_url
              },
              caption: "🎌 *" + _0x5d4e79.title + "*\n\n" + ("⭐ Score: " + (_0x5d4e79.score || "N/A") + "\n") + ("📺 Episodes: " + _0x5d4e79.episodes + "\n") + ("📖 Synopsis: " + _0x5d4e79.synopsis.substring(0, 100) + "...\n\n") + "*Powered by Banks Official*"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x36b960) {
            _0x694d65("❌ Anime not found\n\n*Powered by BANKS MD BOT*");
          }
          break;
        }
      case "lyrics":
        {
          if (!_0x3ed79d) {
            _0x694d65("Please provide the artist and song name!\nExample: .lyrics Taylor Swift | Blank Space");
            return;
          }
          try {
            const [_0x5969b4, _0x248535] = _0x3ed79d.split("|").map(_0x5443fc => _0x5443fc.trim());
            if (!_0x5969b4 || !_0x248535) {
              _0x694d65("Please provide both artist and song name in the format: \"artist | song\"\nExample: .lyrics Taylor Swift | Blank Space");
              return;
            }
            const _0xb4f03a = "https://api.lyrics.ovh/v1/" + encodeURIComponent(_0x5969b4) + "/" + encodeURIComponent(_0x248535);
            console.log("Fetching lyrics from:", _0xb4f03a);
            const _0x4647fe = await fetch(_0xb4f03a);
            if (!_0x4647fe.ok) {
              if (_0x4647fe.status === 404) {
                _0x694d65("Sorry, I couldn't find lyrics for \"" + _0x248535 + "\" by " + _0x5969b4 + ".");
              } else {
                throw new Error("API request failed with status " + _0x4647fe.status);
              }
              return;
            }
            const _0x1b48b1 = await _0x4647fe.json();
            if (_0x1b48b1.lyrics) {
              const _0x2c3caf = _0x1b48b1.lyrics.replace(/\n{3,}/g, "\n\n").trim();
              if (_0x2c3caf.length > 1500) {
                const _0xa33f53 = [];
                for (let _0x1b7977 = 0; _0x1b7977 < _0x2c3caf.length; _0x1b7977 += 1500) {
                  _0xa33f53.push(_0x2c3caf.substring(_0x1b7977, _0x1b7977 + 1500));
                }
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  text: "*Lyrics for \"" + _0x248535 + "\" by " + _0x5969b4 + ":*\n\n" + _0xa33f53[0],
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: _0x5969b4 + " - " + _0x248535,
                      body: "Part 1 of " + _0xa33f53.length + " | Lyrics",
                      thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                      sourceUrl: "https://lyrics.ovh",
                      mediaType: 1
                    }
                  }
                }, {
                  quoted: _0xcac50f
                });
                for (let _0x38c271 = 1; _0x38c271 < _0xa33f53.length; _0x38c271++) {
                  await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                    text: "*[Continued]*\n\n" + _0xa33f53[_0x38c271],
                    contextInfo: {
                      externalAdReply: {
                        showAdAttribution: true,
                        title: _0x5969b4 + " - " + _0x248535,
                        body: "Part " + (_0x38c271 + 1) + " of " + _0xa33f53.length + " | Lyrics",
                        thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                        sourceUrl: "https://lyrics.ovh",
                        mediaType: 1
                      }
                    }
                  });
                }
              } else {
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  text: "*Lyrics for \"" + _0x248535 + "\" by " + _0x5969b4 + ":*\n\n" + _0x2c3caf,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: _0x5969b4 + " - " + _0x248535,
                      body: "Full lyrics",
                      thumbnail: fs.readFileSync("./BanksMedia/banks1.jpg"),
                      sourceUrl: "https://lyrics.ovh",
                      mediaType: 1
                    }
                  }
                }, {
                  quoted: _0xcac50f
                });
              }
            } else {
              _0x694d65("Sorry, no lyrics found for \"" + _0x248535 + "\" by " + _0x5969b4 + ".");
            }
          } catch (_0x2c5413) {
            console.error("Lyrics fetch error:", _0x2c5413);
            _0x694d65("An error occurred while fetching lyrics. Please try again later.");
          }
          break;
        }
      case "mediafire":
        {
          if (!_0x3ed79d) {
            return _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " https://www.mediafire.com/file/q88nws2a11elzug/%F0%9F%92%BBQueen-RUVA+AI+official.zip/file");
          }
          try {
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              react: {
                text: "📥",
                key: _0xcac50f?.key
              }
            });
            const _0x2d9649 = "https://apis.davidcyriltech.my.id/mediafire?url=" + encodeURIComponent(_0x3ed79d);
            const _0x125746 = await axios.get(_0x2d9649);
            if (_0x125746.data && _0x125746.data.downloadLink) {
              const {
                fileName: _0x5ee0ee,
                mimeType: _0x4ed915,
                downloadLink: _0x53f9e0
              } = _0x125746.data;
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                document: {
                  url: _0x53f9e0
                },
                mimetype: _0x4ed915,
                fileName: _0x5ee0ee,
                caption: "📦 *File Name:* " + _0x5ee0ee + "\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴏᴋᴇʀ ᴍᴀx xᴍᴅ*"
              }, {
                quoted: _0xcac50f
              });
            } else {
              _0x694d65("*Failed to fetch file details! Please check the MediaFire URL and try again.*");
            }
          } catch (_0x4c00d6) {
            console.error("Error during MediaFire command:", _0x4c00d6);
            _0x694d65("*An error occurred while processing your request. Please try again later.*");
          }
          break;
        }
      case "gitclone":
        if (!_0x55fa2c[0]) {
          return _0x694d65("🤖 *BANKS MD BOT* says:\n❌ Where is the link?\nExample:\n" + _0x2b6114 + _0x59dd4b + " https://github.com/iconic05/Queen-ruva-ai-beta");
        }
        if (!isUrl(_0x55fa2c[0]) || !_0x55fa2c[0].includes("github.com")) {
          return _0x694d65("🤖 *BANKS MD BOT* says:\n❌ Invalid link! Please provide a valid GitHub repository link.");
        }
        try {
          let _0x2d7d12 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          let [, _0x177095, _0x3c004e] = _0x55fa2c[0].match(_0x2d7d12) || [];
          if (!_0x177095 || !_0x3c004e) {
            return _0x694d65("🤖 *BANKS MD BOT* says:\n❌ Could not extract repository details. Make sure the link is correct.");
          }
          _0x3c004e = _0x3c004e.replace(/\.git$/, "");
          let _0x1d828e = "https://api.github.com/repos/" + _0x177095 + "/" + _0x3c004e + "/zipball";
          let _0x5dc36b = await fetch(_0x1d828e, {
            method: "HEAD"
          });
          let _0x3056af = _0x5dc36b.headers.get("content-disposition");
          if (!_0x3056af) {
            return _0x694d65("🤖 *BANKS MD BOT* says:\n❌ Unable to fetch repository. It might be private or unavailable.");
          }
          let _0x78a2c8 = _0x3056af.match(/attachment; filename=(.*)/)[1];
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            document: {
              url: _0x1d828e
            },
            fileName: _0x78a2c8 + ".zip",
            mimetype: "application/zip"
          }, {
            quoted: _0xcac50f
          });
        } catch (_0x40f656) {
          _0x694d65("🤖 *Queen Ruva AI Beta* says:\n❌ An error occurred while processing your request.");
          console.error(_0x40f656);
        }
        break;
      case "update":
        {
          if (!_0x1b25de) {
            return _0x694d65("🚫 bot owner can use this command.");
          }
          if (!fs.existsSync("./")) {
            fs.mkdirSync("./", {
              recursive: true
            });
          }
          async function _0x135218(_0x9cc79c) {
            if (_0x9cc79c.endsWith("/")) {
              _0x694d65("⚠️ Directory download not fully supported: " + _0x9cc79c);
              return;
            }
            const _0x20a716 = "https://raw.githubusercontent.com/OfficialKango/KANGO-XMD/main/" + _0x9cc79c;
            try {
              _0x694d65("⬇️ Downloading: " + _0x9cc79c);
              const _0x2c9177 = await fetch(_0x20a716);
              if (!_0x2c9177.ok) {
                throw new Error("HTTP error! Status: " + _0x2c9177.status);
              }
              const _0x12f9df = await _0x2c9177.text();
              const _0x2818eb = path.join("./", _0x9cc79c);
              fs.mkdirSync(path.dirname(_0x2818eb), {
                recursive: true
              });
              fs.writeFileSync(_0x2818eb, _0x12f9df, "utf8");
              _0x694d65("✅ Successfully updated: " + _0x9cc79c + "\nCREATOR BY Banks Official");
            } catch (_0x3433a2) {
              _0x694d65("❌ Error downloading file: " + _0x9cc79c + " - " + _0x3433a2.message);
              _0x694d65("BANKS MD BOT Update Failed\nPlease type .repo and sync fork then redeploy the latest version!");
              throw _0x3433a2;
            }
          }
          const _0x115b3b = ["banks.js", "main.js", "package.js", "option.js"];
          _0x694d65("⚙️ Starting update process...");
          Promise.all(_0x115b3b.map(_0x467ab0 => _0x135218(_0x467ab0))).then(() => {
            _0x694d65("🎉 BANKS MD BOT ʜᴀᴅ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ ᴜᴘᴅᴀᴛᴇᴅ ᴛᴏ ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ");
          }).catch(_0x15d150 => {
            _0x694d65("⚠️ Update partially completed with errors: " + _0x15d150.message);
          });
          break;
        }
      case "tts":
        {
          if (!_0x3ed79d) {
            return _0x694d65("🔊 *Text-to-Speech Command*\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [language] [text]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " en Hello World\n\n") + "*Supported Languages:* en, es, fr, de, ja, etc.\n\n");
          }
          try {
            const _0x20c2f7 = _0x55fa2c[0]?.substring(0, 2) || "en";
            const _0x234628 = _0x55fa2c.slice(1).join(" ") || _0x3ed79d;
            if (!_0x234628) {
              return _0x694d65("❌ *Missing Text*\n\nPlease provide text to convert to speech\n\n");
            }
            const _0x3bb375 = ["https://translate.google.com/translate_tts?ie=UTF-8&tl=" + _0x20c2f7 + "&client=tw-ob&q=" + encodeURIComponent(_0x234628), "https://api.voicerss.org/?key=demo&hl=" + _0x20c2f7 + "&src=" + encodeURIComponent(_0x234628), "https://api.streamelements.com/kappa/v2/speech?voice=Brian&text=" + encodeURIComponent(_0x234628)];
            let _0x5ef338 = false;
            for (const _0x4bf29d of _0x3bb375) {
              try {
                const _0x33ade4 = await fetch(_0x4bf29d, {
                  method: "HEAD"
                });
                if (!_0x33ade4.ok) {
                  continue;
                }
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  audio: {
                    url: _0x4bf29d
                  },
                  mimetype: "audio/mpeg",
                  ptt: true,
                  caption: "🔊 *TTS Result*\n\n" + ("📝 *Text:* " + _0x234628 + "\n") + ("🌐 *Language:* " + _0x20c2f7 + "\n\n") + "*Powered by Banks Official*"
                }, {
                  quoted: _0xcac50f
                });
                _0x5ef338 = true;
                break;
              } catch (_0x18e8f6) {
                console.log("TTS API " + _0x4bf29d.substring(0, 30) + "... failed:", _0x18e8f6.message);
                continue;
              }
            }
            if (!_0x5ef338) {
              throw new Error("All TTS APIs failed");
            }
          } catch (_0x352bb6) {
            console.error("TTS Error:", _0x352bb6);
            _0x694d65("❌ *TTS Service Unavailable*\n\nAll voice servers are busy.\nTry again in 5 minutes.\n\n");
          }
          break;
        }
      case "oogway":
        {
          if (!_0x3ed79d?.trim()) {
            _0x694d65("🐢 *Master Oogway Wisdom Generator* 🐢\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [your quote]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " There are no accidents\n") + "Max length: 100 characters\n\nLet Master Oogway inspire you with ancient wisdom...\n\n");
            return;
          }
          if (_0x3ed79d.length > 100) {
            _0x694d65("❌ *Too much wisdom!*\n\nPlease keep your quote under 100 characters.\nEven Master Oogway is brief with his wisdom.\n\n");
            return;
          }
          const _0x1e44c5 = ["fuck", "shit", "asshole", "bitch", "nigger", "cunt"];
          if (_0x1e44c5.some(_0x5069ab => _0x3ed79d.toLowerCase().includes(_0x5069ab))) {
            _0x694d65("❌ *Master Oogway frowns upon such language*\n\nPlease seek wisdom with pure intentions.\n\n");
            return;
          }
          try {
            const _0x38f021 = "https://api.popcat.xyz/oogway?text=" + encodeURIComponent(_0x3ed79d);
            const _0x355166 = await fetch(_0x38f021, {
              method: "HEAD"
            });
            if (!_0x355166.ok) {
              throw new Error("API returned " + _0x355166.status + " status");
            }
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x38f021
              },
              caption: "🐢 *\"" + _0x3ed79d + "\"*\n- Master Oogway\n\n*Powered by Banks Official*",
              mimetype: "image/jpeg"
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x282b84) {
            console.error("Oogway API Error:", _0x282b84);
            const _0x1eb42f = ["Yesterday is history, tomorrow is a mystery, but today is a gift.", "There are no accidents.", "Your mind is like this water, when agitated it becomes difficult to see.", "One often meets his destiny on the road he takes to avoid it."];
            const _0x290ba9 = _0x1eb42f[Math.floor(Math.random() * _0x1eb42f.length)];
            _0x694d65("⚠️ *The Peach Tree of Wisdom is shaking...*\n\n" + ("\"" + _0x290ba9 + "\"\n") + "- Master Oogway (fallback wisdom)\n\nThe API failed, but the wisdom continues to flow.\n\n");
          }
          break;
        }
      case "sadcat":
        {
          if (!_0x3ed79d?.trim()) {
            _0x694d65("😿 *Sad Cat Generator* 😿\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [your text]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " I failed my exam\n") + "Max length: 80 characters\n\nLet the sad cat express your feelings...\n\n");
            return;
          }
          if (_0x3ed79d.length > 80) {
            _0x694d65("❌ *Too much sadness!*\n\n" + ("Your text has " + _0x3ed79d.length + "/80 characters.\n") + "Even sad cats need brevity.\n\n");
            return;
          }
          const _0x3a51df = [/fuck|shit|asshole|bitch|cunt/i, /n[i1!]+gg[e3r]*/i, /porn|sex|rape/i];
          if (_0x3a51df.some(_0x451c9a => _0x451c9a.test(_0x3ed79d))) {
            _0x694d65("❌ *The cat refuses to display this*\n\nKeep it family-friendly please.\n\n");
            return;
          }
          try {
            const _0x2ce7c0 = "https://api.popcat.xyz/sadcat?text=" + encodeURIComponent(_0x3ed79d);
            const _0x53fa30 = new AbortController();
            const _0x4306b8 = setTimeout(() => _0x53fa30.abort(), 5000);
            const _0x16b71d = await fetch(_0x2ce7c0, {
              method: "HEAD",
              signal: _0x53fa30.signal
            });
            clearTimeout(_0x4306b8);
            if (!_0x16b71d.ok) {
              throw new Error("API returned " + _0x16b71d.status);
            }
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x2ce7c0
              },
              caption: "😿 *Sad Cat Says*\n\n" + ("\"" + _0x3ed79d.replace(/\n/g, " ") + "\"\n\n") + "*Powered by Banks Official*",
              mimetype: "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  title: "Feeling Sad?",
                  body: "The cat understands you",
                  thumbnail: await (await fetch("https://i.imgur.com/JxLd5F0.jpeg")).buffer(),
                  mediaType: 1,
                  mediaUrl: "",
                  sourceUrl: ""
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x3fab91) {
            console.error("SadCat API Error:", _0x3fab91);
            const _0x38b82b = ["The sad cat is too depressed to respond...", "Even cats have bad days. Try again later.", "🐱 *Meow...* (API failed but the cat cares)"];
            _0x694d65("⚠️ *Sad Cat Malfunction*\n\n" + (_0x38b82b[Math.floor(Math.random() * _0x38b82b.length)] + "\n\n") + "");
          }
          break;
        }
      case "pooh":
        {
          const [_0x34a635, _0x29aa53] = _0x3ed79d.split("|").map(_0x521b1c => _0x521b1c?.trim());
          if (!_0x34a635 || !_0x29aa53) {
            _0x694d65("🍯 *Winnie the Pooh Meme Generator* 🍯\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [normal thing]|[smart thing]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " using discord|making an API\n") + "Max 50 characters per side\n\n");
            return;
          }
          if (_0x34a635.length > 50 || _0x29aa53.length > 50) {
            _0x694d65("❌ *Too much honey!*\n\n" + ("Left text: " + _0x34a635.length + "/50\n") + ("Right text: " + _0x29aa53.length + "/50\n\n") + "");
            return;
          }
          const _0x517b53 = [/fuck|shit|asshole|bitch|cunt/i, /n[i1!]+gg[e3r]*/i];
          if ([_0x34a635, _0x29aa53].some(_0x3ace6d => _0x517b53.some(_0x440fef => _0x440fef.test(_0x3ace6d)))) {
            _0x694d65("❌ *Pooh prefers wholesome honey*\n\nKeep it family-friendly please\n\n");
            return;
          }
          try {
            const _0x1793d2 = "https://api.popcat.xyz/pooh?text1=" + encodeURIComponent(_0x34a635) + "&text2=" + encodeURIComponent(_0x29aa53);
            const _0x435736 = new AbortController();
            const _0x26ff83 = setTimeout(() => _0x435736.abort(), 5000);
            const _0x414334 = await fetch(_0x1793d2, {
              method: "HEAD",
              signal: _0x435736.signal
            });
            clearTimeout(_0x26ff83);
            if (!_0x414334.ok) {
              throw new Error("API returned " + _0x414334.status);
            }
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x1793d2
              },
              caption: "🍯 *Pooh Meme*\n\n" + ("\"" + _0x34a635 + "\" vs \"" + _0x29aa53 + "\"\n\n") + "*Powered by Banks Official*",
              mimetype: "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  title: "Pooh Wisdom",
                  body: "Which side are you on?",
                  thumbnail: await (await fetch("https://i.imgur.com/W9qB2xz.jpeg")).buffer(),
                  mediaType: 1,
                  mediaUrl: "",
                  sourceUrl: ""
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x71ebee) {
            console.error("Pooh API Error:", _0x71ebee);
            const _0x2bcf6b = [["using WhatsApp", "building a bot"], ["watching Netflix", "coding a project"], ["eating honey", "making an API"]];
            const [_0x5a591b, _0x3589b4] = _0x2bcf6b[Math.floor(Math.random() * _0x2bcf6b.length)];
            _0x694d65("⚠️ *Hunny Pot Empty*\n\nDefault meme:\n" + ("\"" + _0x5a591b + "\" vs \"" + _0x3589b4 + "\"\n\n") + "API failed but here's a premade one!\n\n");
          }
          break;
        }
      case "delzip":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the text in the zip list");
          }
          let _0x3878f7 = "" + _0x3ed79d;
          {
            if (!ZipXeon.includes(_0x3878f7)) {
              return _0x694d65("This name does not exist in the system");
            }
            let _0x5e0ea4 = ZipXeon.indexOf(_0x3878f7);
            ZipXeon.splice(_0x5e0ea4, 1);
            fs.writeFileSync("./system/autoreply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync("./BanksMedia/zip/" + _0x3878f7 + ".zip");
            _0x694d65("Successfully deleted zip " + _0x3878f7);
          }
        }
        break;
      case "listzip":
        {
          await _0x2d43c1();
          let _0x1b6516 = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let _0x1d118a of ZipXeon) {
            _0x1b6516 += "│⭔ " + _0x1d118a + "\n";
          }
          _0x1b6516 += "│\n└────────────⭓\n\n*Total : " + ZipXeon.length + "*";
          _0x694d65(_0x1b6516);
        }
        break;
      case "addapk":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("What is the name of the apk?");
          }
          let _0x2241c1 = "" + _0x3ed79d;
          {
            if (ApkXeon.includes(_0x2241c1)) {
              return _0x694d65("This name is already in use");
            }
            let _0x1b1882 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
            apknye.push(_0x2241c1);
            await fsx.copy(_0x1b1882, "./BanksMedia/apk/" + _0x2241c1 + ".apk");
            fs.writeFileSync("./system/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync(_0x1b1882);
            _0x694d65("Successful Adding apk\nTo Check type " + _0x2b6114 + "listapk");
          }
        }
        break;
      case "delapk":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Name of the apk?");
          }
          let _0x46a886 = "" + _0x3ed79d;
          {
            if (!ApkXeon.includes(_0x46a886)) {
              return _0x694d65("This name does not exist in the system");
            }
            let _0x337f49 = ApkXeon.indexOf(_0x46a886);
            ApkXeon.splice(_0x337f49, 1);
            fs.writeFileSync("./system/autoreply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync("./BanksMedia/apk/" + _0x46a886 + ".apk");
            _0x694d65("Successfully deleted Apk " + _0x46a886);
          }
        }
        break;
      case "listapk":
        {
          await _0x2d43c1();
          let _0x180128 = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let _0xf130d5 of ApkXeon) {
            _0x180128 += "│⭔ " + _0xf130d5 + "\n";
          }
          _0x180128 += "│\n└────────────⭓\n\n*Total : " + ApkXeon.length;
          _0x694d65(_0x180128);
        }
        break;
      case "addpdf":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("What is the name of the pdf");
          }
          let _0x245408 = "" + _0x3ed79d;
          {
            if (DocXeon.includes(_0x245408)) {
              return _0x694d65("This name is already in use");
            }
            let _0x8c69f4 = await _0x4acc2b.downloadAndSaveMediaMessage(_0x34c37d);
            docunye.push(_0x245408);
            await fsx.copy(_0x8c69f4, "./BanksMedia/doc/" + _0x245408 + ".pdf");
            fs.writeFileSync("./system/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync(_0x8c69f4);
            _0x694d65("Successful Adding Pdf\nTo check type " + _0x2b6114 + "listpdf");
          }
        }
        break;
      case "delpdf":
        {
          if (!_0x26473a) {
            return _0x694d65(mess.prem);
          }
          await _0x2d43c1();
          if (_0x55fa2c.length < 1) {
            return _0x694d65("Enter the name");
          }
          let _0x354ee3 = "" + _0x3ed79d;
          {
            if (!DocXeon.includes(_0x354ee3)) {
              return _0x694d65("This name does not exist in the system");
            }
            let _0x11fb34 = DocApk.indexOf(_0x354ee3);
            docunye.splice(_0x11fb34, 1);
            fs.writeFileSync("./system/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync("./BanksMedia/doc/" + _0x354ee3 + ".pdf");
            _0x694d65("Successfully deleted pdf " + _0x354ee3);
          }
        }
        break;
      case "listpdf":
        {
          await _0x2d43c1();
          let _0x148d95 = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let _0x5d59a7 of docunye) {
            _0x148d95 += "│⭔ " + _0x5d59a7 + "\n";
          }
          _0x148d95 += "│\n└────────────⭓\n\n*Total : " + docunye.length + "*";
          _0x694d65(_0x148d95);
        }
        break;
      case "afk":
        if (!_0xcac50f.isGroup) {
          return _0x694d65(mess.group);
        }
        if (_0x44142f) {
          return _0x694d65("Already afk");
        }
        let _0x2772ce = _0x3ed79d ? _0x3ed79d : "Nothing.";
        afk.addAfkUser(_0xcac50f.sender, Date.now(), _0x2772ce, _afk);
        _0x694d65("@" + _0xcac50f.sender.split("@")[0] + " Currently AFK\nWith reason : " + _0x2772ce);
        break;
      case "music":
        {
          if (!_0x3ed79d) {
            return _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " understand by omah lay");
          }
          try {
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              react: {
                text: "🎵",
                key: _0xcac50f.key
              }
            });
            const _0x47d973 = require("yt-search");
            const _0xe7d08c = await _0x47d973(_0x3ed79d);
            const _0x376ee0 = _0xe7d08c.videos.slice(0, 5);
            if (!_0x376ee0.length) {
              _0x694d65("*No results found for:* " + _0x3ed79d);
              return;
            }
            let _0x32343b = "🎶 *BANKS MD_MUSIC - SEARCH RESULTS*\n\n";
            _0x376ee0.forEach((_0x2004b4, _0x46a335) => {
              _0x32343b += "*" + (_0x46a335 + 1) + ".* " + _0x2004b4.title + "\n" + ("⏱️ " + _0x2004b4.timestamp + " | 👀 " + _0x2004b4.views + " | 📅 " + _0x2004b4.ago + "\n\n");
            });
            _0x32343b += "\n*Reply with the number (1-5) to download the song*";
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              text: _0x32343b
            }, {
              quoted: _0xcac50f
            });
            const _0x5beed3 = _0x51ded0 => !isNaN(_0x51ded0.text) && _0x51ded0.text >= 1 && _0x51ded0.text <= 5 && _0x51ded0.sender === _0x51ded0.sender;
            const _0x15703e = _0xcac50f.chat.createMessageCollector({
              filter: _0x5beed3,
              time: 30000,
              max: 1
            });
            _0x15703e.on("collect", async _0x2dfbb4 => {
              const _0x57448f = parseInt(_0x2dfbb4.text) - 1;
              const _0x234aa3 = _0x376ee0[_0x57448f];
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                react: {
                  text: "✅",
                  key: _0x2dfbb4.key
                }
              });
              const _0x23f652 = "🎶 *BANKS MD_MUSIC - PLAYER*\n" + ("🎧 *Title:* " + _0x234aa3.title + "\n") + ("👀 *Views:* " + _0x234aa3.views + "\n") + ("⏳ *Duration:* " + _0x234aa3.timestamp + "\n") + ("🕒 *Uploaded:* " + _0x234aa3.ago + "\n") + ("🔗 *Url:* " + _0x234aa3.url + "\n") + "🔥 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*";
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                image: {
                  url: _0x234aa3.thumbnail
                },
                caption: _0x23f652
              });
              const _0x23aad0 = "https://apis.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x234aa3.url);
              const _0x17369d = await axios.get(_0x23aad0);
              if (_0x17369d.data.success) {
                const {
                  download_url: _0xbb138a,
                  title: _0x1f569a
                } = _0x17369d.data.result;
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  audio: {
                    url: _0xbb138a
                  },
                  mimetype: "audio/mp4",
                  fileName: _0x1f569a + ".mp3",
                  caption: "🎶 *Here's your song:* " + _0x1f569a + "\n🔊 *Enjoy the music!*"
                });
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  react: {
                    text: "💃",
                    key: _0x2dfbb4.key
                  }
                });
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  react: {
                    text: "🎉",
                    key: _0x2dfbb4.key
                  }
                });
              } else {
                _0x694d65("*Failed to download the song! Please try again later.*");
              }
            });
            _0x15703e.on("end", _0x464d49 => {
              if (_0x464d49.size === 0) {
                _0x694d65("*Selection timeout. Please try your search again.*");
              }
            });
          } catch (_0x588331) {
            console.error("Error during /play command:", _0x588331);
            _0x694d65("*An error occurred. Please try again later.*");
          }
          break;
        }
      case "drake":
        {
          const [_0x59db62, _0x463220] = _0x3ed79d.split("|").map(_0x289e24 => _0x289e24?.trim());
          if (!_0x59db62 || !_0x463220) {
            _0x694d65("🎶 *Drake Meme Generator*\n\n" + ("Usage: " + (_0x2b6114 + _0x59dd4b) + " [bad_thing]|[good_thing]\n") + ("Example: " + (_0x2b6114 + _0x59dd4b) + " amongus|amogus\n") + "Max 25 characters per side\n\n");
            return;
          }
          if (_0x59db62.length > 25 || _0x463220.length > 25) {
            _0x694d65("❌ *Too Much Text*\n\n" + ("Left: " + _0x59db62.length + "/25\n") + ("Right: " + _0x463220.length + "/25\n\n") + "Keep it short like Drake's songs!\n\n");
            return;
          }
          const _0x5e1e22 = [/fuck|shit|asshole|bitch|cunt/i, /n[i1!]+gg[e3r]*/i];
          if ([_0x59db62, _0x463220].some(_0x6469c7 => _0x5e1e22.some(_0x23f85d => _0x23f85d.test(_0x6469c7)))) {
            _0x694d65("❌ *Inappropriate Content*\n\nDrake prefers clean memes\n\n");
            return;
          }
          try {
            const _0x17bc93 = "https://api.popcat.xyz/drake?text1=" + encodeURIComponent(_0x59db62) + "&text2=" + encodeURIComponent(_0x463220);
            const _0x1b052d = new AbortController();
            const _0x3958ac = setTimeout(() => _0x1b052d.abort(), 5000);
            const _0x56b6ba = await fetch(_0x17bc93, {
              method: "HEAD",
              signal: _0x1b052d.signal
            });
            clearTimeout(_0x3958ac);
            if (!_0x56b6ba.ok) {
              throw new Error("API returned " + _0x56b6ba.status);
            }
            await _0x4acc2b.sendPresenceUpdate("composing", _0xcac50f.chat);
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x17bc93
              },
              caption: "🎶 *Drake Reaction*\n\n" + ("❌ " + _0x59db62 + "\n") + ("✅ " + _0x463220 + "\n\n") + "*Powered by Banks Official*",
              mimetype: "image/jpeg",
              contextInfo: {
                externalAdReply: {
                  title: "Drake Meme",
                  body: "Which one are you choosing?",
                  thumbnail: await (await fetch("https://i.imgur.com/JQLz4KX.png")).buffer(),
                  mediaType: 1,
                  mediaUrl: "",
                  sourceUrl: ""
                }
              }
            }, {
              quoted: _0xcac50f
            });
          } catch (_0x4ff1f0) {
            console.error("Drake API Error:", _0x4ff1f0);
            const _0x221629 = [["amongus", "amogus"], ["homework", "gaming"], ["work", "sleep"]];
            const [_0x279487, _0x1b62b3] = _0x221629[Math.floor(Math.random() * _0x221629.length)];
            _0x694d65("⚠️ *Could Not Generate*\n\nDefault meme:\n" + ("❌ " + _0x279487 + "\n") + ("✅ " + _0x1b62b3 + "\n\n") + "API failed but here's a premade one!\n\n");
          }
          break;
        }
      case "play":
      case "song":
        {
          if (!_0x3ed79d) {
            return _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " understand by omah lay");
          }
          try {
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              react: {
                text: "🎵",
                key: _0xcac50f.key
              }
            });
            const _0x1b4191 = require("yt-search");
            const _0x842413 = await _0x1b4191(_0x3ed79d);
            const _0x354fa8 = _0x842413.videos[0];
            if (!_0x354fa8) {
              _0x694d65("*No results found for:* " + _0x3ed79d);
              return;
            }
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              react: {
                text: "👍",
                key: _0xcac50f.key
              }
            });
            const _0x435de2 = "🎶 *BANKS MD_MUSIC - PLAYER*\n" + ("🎧 *Title:* " + _0x354fa8.title + "\n") + ("👀 *Views:* " + _0x354fa8.views + "\n") + ("⏳ *Duration:* " + _0x354fa8.timestamp + "\n") + ("🕒 *Uploaded:* " + _0x354fa8.ago + "\n") + ("🔗 *Url:* " + _0x354fa8.url + "\n") + "🔥 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪᴄᴏɴɪᴄ ᴛᴇᴄʜ*";
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              image: {
                url: _0x354fa8.thumbnail
              },
              caption: _0x435de2
            }, {
              quoted: _0xcac50f
            });
            const _0x1621c0 = "https://apis.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x354fa8.url);
            const _0x443a1a = await axios.get(_0x1621c0);
            if (_0x443a1a.data.success) {
              const {
                download_url: _0x2ab1d8,
                title: _0xc438d4,
                thumbnail: _0x39fb31
              } = _0x443a1a.data.result;
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                audio: {
                  url: _0x2ab1d8
                },
                mimetype: "audio/mp4",
                fileName: _0xc438d4 + ".mp3",
                caption: "🎶 *Here's your song:* " + _0xc438d4 + "\n🔊 *Enjoy the music and feel the vibes!*"
              }, {
                quoted: _0xcac50f
              });
              setTimeout(async () => {
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  react: {
                    text: "💃",
                    key: _0xcac50f.key
                  }
                });
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  react: {
                    text: "🎉",
                    key: _0xcac50f.key
                  }
                });
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  text: "🔐 *Security Alert:* Your request has been processed securely. Safe listening! 🎧"
                });
                await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  text: "😎 *Cool Mode Activated!* Enjoy the vibes and have a great time! 🔥"
                });
              }, 5000);
            } else {
              _0x694d65("*Failed to fetch the song! Please try again later.*");
            }
          } catch (_0x2bb6f1) {
            console.error("Error during /play command:", _0x2bb6f1);
            _0x694d65("*An error occurred while processing your request. Please try again later.*");
          }
          break;
        }
      case "ytmp3":
      case "ytaudio":
        const _0x116ba5 = require("./system/ytdl2");
        if (_0x55fa2c.length < 1 || !isUrl(_0x3ed79d) || !_0x116ba5.isYTUrl(_0x3ed79d)) {
          return _0x694d65("Where's the yt link?\nExample: " + (_0x2b6114 + _0x59dd4b) + " https://youtube.com/shorts/YQf-vMjDuKY?feature=share");
        }
        const _0x1d5161 = await _0x116ba5.mp3(_0x3ed79d);
        await _0x4acc2b.sendMessage(_0xcac50f.chat, {
          audio: fs.readFileSync(_0x1d5161.path),
          mimetype: "audio/mp4",
          ptt: true,
          contextInfo: {
            externalAdReply: {
              title: _0x1d5161.meta.title,
              body: botname,
              thumbnail: await fetchBuffer(_0x1d5161.meta.image),
              mediaType: 2,
              mediaUrl: _0x3ed79d
            }
          }
        }, {
          quoted: _0xcac50f
        });
        await fs.unlinkSync(_0x1d5161.path);
        break;
      case "ytmp4":
      case "ytvideo":
        {
          const _0x1c809e = require("./system/ytdl2");
          if (_0x55fa2c.length < 1 || !isUrl(_0x3ed79d) || !_0x1c809e.isYTUrl(_0x3ed79d)) {
            _0x694d65("Where is the link??\n\nExample : " + (_0x2b6114 + _0x59dd4b) + " https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps");
          }
          const _0xf3aea2 = await _0x1c809e.mp4(_0x3ed79d);
          const _0x16b13b = "\n*" + themeemoji + "Tittle:* " + _0xf3aea2.title + "\n*" + themeemoji + "Date:* " + _0xf3aea2.date + "\n*" + themeemoji + "Duration:* " + _0xf3aea2.duration + "\n*" + themeemoji + "Quality:* " + _0xf3aea2.quality;
          await _0x4acc2b.sendMessage(_0xcac50f.chat, {
            video: {
              url: _0xf3aea2.videoUrl
            },
            caption: _0x16b13b
          }, {
            quoted: _0xcac50f
          });
        }
      case "anime":
        {
          if (!_0x3ed79d) {
            return _0x694d65("*Example*: " + (_0x2b6114 + _0x59dd4b) + " naruto");
          }
          try {
            await _0x4acc2b.sendMessage(_0xcac50f.chat, {
              react: {
                text: "📸",
                key: _0xcac50f.key
              }
            });
            const _0xf7a722 = "https://img.hazex.workers.dev/?prompt=" + encodeURIComponent(_0x3ed79d);
            const _0x205ad7 = [];
            for (let _0x36c4c4 = 0; _0x36c4c4 < 5; _0x36c4c4++) {
              _0x205ad7.push("" + _0xf7a722);
            }
            for (const _0x3f6a7b of _0x205ad7) {
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                image: {
                  url: _0x3f6a7b
                },
                caption: "\n\n> *Generated by BANKS MD BOT*"
              }, {
                quoted: _0xcac50f
              });
            }
          } catch (_0x34fb38) {
            console.error("Error fetching images:", _0x34fb38);
            _0x694d65("*An error occurred while fetching images. Please try again later.*");
          }
          break;
        }
      case "readviewonce":
      case "vv":
        {
          if (!_0xcac50f.quoted) {
            return _0x694d65("Reply to a view once message");
          }
          if (!_0xcac50f.quoted.mtype === "viewOnceMessageV2") {
            return _0x694d65("This is not a view once message");
          }
          try {
            const _0x410f46 = _0xcac50f.quoted.message.viewOnceMessageV2.message;
            const _0x2b037f = Object.keys(_0x410f46)[0];
            const _0x3024dc = await downloadContentFromMessage(_0x410f46[_0x2b037f], _0x2b037f === "imageMessage" ? "image" : "video");
            let _0x3416e0 = Buffer.from([]);
            for await (const _0x1f8642 of _0x3024dc) {
              _0x3416e0 = Buffer.concat([_0x3416e0, _0x1f8642]);
            }
            if (_0x2b037f === "videoMessage") {
              return _0x4acc2b.sendFile(_0xcac50f.chat, _0x3416e0, "media.mp4", _0x410f46[_0x2b037f].caption || "", _0xcac50f);
            } else if (_0x2b037f === "imageMessage") {
              return _0x4acc2b.sendFile(_0xcac50f.chat, _0x3416e0, "media.jpg", _0x410f46[_0x2b037f].caption || "", _0xcac50f);
            }
          } catch (_0x304737) {
            console.error("Error processing view once message:", _0x304737);
            return _0x694d65("Failed to process the view once message");
          }
        }
        break;
      case "file":
        {
          async function _0x286a2d() {
            try {
              const _0x4b915c = await fetch("https://api.github.com/repos/OfficialKango/KANGO-XMD");
              if (!_0x4b915c.ok) {
                throw new Error("HTTP error! Status: " + _0x4b915c.status);
              }
              const _0x4e933f = await _0x4b915c.json();
              await _0x4acc2b.sendMessage(_0xcac50f.chat, {
                document: {
                  url: "https://github.com/OfficialKango/KANGO-XMD/archive/refs/heads/main.zip"
                },
                fileName: "KANGO-XMD.zip",
                mimetype: "application/zip",
                caption: "*BANKS MD BOT Repository*\n\n📦 *Document Downloaded*\n\n🔗 *Repository URL*: https://github.com/OfficialKango/KANGO-XMD\n" + ("📝 *Description*: " + (_0x4e933f.description || "No description") + "\n") + ("🌟 *Stars*: " + _0x4e933f.stargazers_count + "\n") + ("🔀 *Forks*: " + _0x4e933f.forks_count + "\n") + ("📅 *Last Updated*: " + new Date(_0x4e933f.updated_at).toLocaleString() + "\n\n") + "👨‍💻 *Developer*: Banks Official\n💡 *The ZIP file contains all repository files*"
              }, {
                quoted: _0xcac50f
              });
            } catch (_0x575915) {
              _0x694d65("❌ Failed to fetch repository: " + _0x575915.message + "\n\n*Powered by BANKS MD BOT*");
            }
          }
          _0x286a2d();
          break;
        }
      case "clearchat":
        xeonimun("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        break;
      case "menu":
      case "allmenu":
        let _0x42be76 = (() => {
          const _0x105dcc = ["🔮", "⚡", "⏳", "♻️", "📡", "👨‍💻", "🚀", "⚙️"];
          return _0x105dcc[Math.floor(Math.random() * _0x105dcc.length)];
        })();
        await _0x4acc2b.sendMessage(_0xcac50f.chat, {
          react: {
            text: _0x42be76,
            key: _0xcac50f.key
          }
        });
        let _0x1db91f = "╭━─━─━─≪✠≫─━─━─━╮\n            *BANKS MD BOT*\n╰━─━─━─≪✠≫─━─━─━╯\n\n╭━─━─━─≪✠≫─━─━─━╮\n│   👨‍💻 *ᴄʀᴇᴀᴛᴏʀ:* Banks Official\n│   ⏰ *Time:* " + timewisher + "\n│   ❄️ *Day:*  " + xtime + "\n│   ✨ *Version:* 1.0.0\n│   📅 *Date:* " + xdate + "\n│   ⏳ *Uptime:*  " + runtime(process.uptime()) + "\n╰━─━─━─≪✠≫─━─━─━╯\n╭━─━─━─≪❥≫\n│   *Oᗯᑎᗴᖇ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ᴀᴜᴛᴏᴛʏᴘɪɴɢ [ᴏᴘᴛɪᴏɴ]\n│ ✗ ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ [ᴏᴘᴛɪᴏɴ]\n│ ✗ ᴀᴜᴛᴏʙɪᴏ [ᴏᴘᴛɪᴏɴ]\n│ ✗ ʙʟᴏᴄᴋ\n│ ✗ ᴜɴʙʟᴏᴄᴋ\n│ ✗ ʀᴇsᴛᴀʀᴛ\n│ ✗ ᴋɪᴄᴋ\n│ ✗ ᴊᴏɪɴ\n│ ✗ ᴀᴅᴅ\n│ ✗ ᴅᴇᴍᴏᴛᴇ\n│ ✗ ᴘʀᴏᴍᴏᴛᴇ\n│ ✗ ᴀᴅᴅᴏᴡɴᴇʀ\n│ ✗ ᴅᴇʟᴏᴡɴᴇʀ\n│ ✗ ɢᴇᴛᴄᴀsᴇ\n│ ✗ ɢᴇᴛsᴇssɪᴏɴ\n│ ✗ ᴅᴇʟsᴇssɪᴏɴ\n│ ✗ sʜᴏᴜᴛᴅᴏᴡɴ\n│ ✗ ʙᴀᴄᴋᴜᴘ\n│ ✗ ᴠɪᴇᴡᴏɴᴄᴇ\n│ ✗ ᴜᴘᴅᴀᴛᴇ\n╭━─━─━─≪❥≫\n│   *ᘜᖇOᑌᑭ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ʟᴇғᴛ\n│ ✗ ᴛᴀɢᴀʟʟ\n│ ✗ ʙʀᴏᴀᴅᴄᴀsᴛ\n│ ✗ ᴋɪᴄᴋ\n│ ✗ ᴀᴅᴅ\n│ ✗ ʜɪᴛᴇᴛᴀɢ\n│ ✗ ʀᴇᴠᴏᴋᴇ\n│ ✗ ɢʀᴏᴜᴘ [ᴏᴘᴛɪᴏɴ]\n│ ✗ ᴇᴅɪᴛɪɴғᴏʀ\n│ ✗ ʟɪsᴛᴏɴʟɪɴᴇ\n│ ✗ sᴇᴛᴘᴘɢᴄ\n│ ✗ sᴇᴛᴅᴇsᴄ\n│ ✗ ʟɪɴᴋɢᴄ\n│ ✗ ᴛᴏᴛᴀɢ\n│ ✗ ᴄʟᴏsᴇᴛɪᴍᴇ\n│ ✗ ᴏᴘᴇɴᴛɪɴᴇ\n╭━─━─━─≪❥≫\n│   *ᗰᗩIᑎ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ʀᴜɴᴛɪᴍᴇ\n│ ✗ ᴏᴡᴇɴᴇʀ\n│ ✗ ᴅᴏɴᴀᴛᴇ\n│ ✗ ʀᴜɴᴛɪᴍᴇ\n│ ✗ sᴄʀɪᴘᴛ\n│ ✗ ʙᴜʏᴘʀᴇᴍɪᴜᴍ\n╭━─━─━─≪❥≫\n│   *ᗪᗩᗯᑎᒪOᗩᗪ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ᴘʟᴀʏ\n│ ✗ ʏᴛᴍᴘ3\n│ ✗ ʏᴛᴍᴘ4\n╭━─━─━─≪❥≫\n│   *ᑌᖇᒪ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ sʜᴏʀᴛᴇɴ-ᴜʀʟ\n│ ✗ sᴄʀᴇᴇɴsʜᴏᴛ\n│ ✗ ᴜʀʟǫʀ\n│ ✗ ᴜʀʟᴛɪᴛʟᴇ\n╭━─━─━─≪❥≫\n│   *ᗩᑎIᗰᗴ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ғᴏxɢɪʀʟ\n│ ✗ ᴄᴀᴛɢɪʀʟ\n│ ✗ ᴀɴɪᴍᴇɢɪғ\n│ ✗ ᴀɴᴇᴍᴇᴍᴇ\n╭━─━─━─≪❥≫\n│   *ᗪᗩTᗩᗷᗩՏᗴ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ᴀᴅᴅᴠɪᴅᴇᴏ\n│ ✗ ᴀᴅᴅɪᴍᴀɢᴇ\n│ ✗ ᴀᴅᴅsᴛɪᴄᴋᴇʀ\n│ ✗ ᴀᴅᴅᴠɴ\n│ ✗ ᴀᴅᴅᴘᴅғ\n│ ✗ ʟɪsᴛᴠɴ\n│ ✗ ᴅᴇʟᴢɪᴘ\n│ ✗ ʟɪsᴛᴠɪᴅᴇᴏ\n│ ✗ ʟɪsᴛɪᴍᴀɢᴇ\n│ ✗ ᴅᴇʟsᴛɪᴄᴋᴇʀ\n│ ✗ ᴅᴇʟɪᴍᴀɢᴇ\n│ ✗ ʟɪsᴛᴀᴘᴋ\n│ ✗ ᴀᴅᴅᴀᴘᴋ\n│ ✗ ᴅᴇʟᴀᴘᴋ\n╭━─━─━─≪❥≫\n│   *ᖇᗩᑎᗪOᗰ ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ ᴅᴏɢ \n│ ✗ ᴄᴀᴛ \n│ ✗ ʙɪʀᴅ\n│ ✗ ғᴏx \n│ ✗ ʀᴇᴅᴘᴀɴᴅᴀ\n│ ✗ ᴋᴀɴɢᴀʀᴏᴏ\n│ ✗ ᴅᴜᴄᴋ\n│ ✗ ᴋᴏᴀʟᴀ\n│ ✗ ʜᴏʀsᴇ\n│ ✗ ɢᴏᴀᴛ\n│ ✗ ʙᴜɴɴʏ\n╭━─━─━─≪❥≫\n│   *ᑕOᑎᐯᗴᖇT ᑕᗰᗪ*\n╰━─━─━─≪❥≫\n│ ✗ sᴛɪᴄᴋᴇʀ\n│ ✗ sᴍᴇᴍᴇ\n│ ✗ ᴛᴏᴜʀʟ\n│ ✗ ᴛᴏǫʀ\n│ ✗ ᴛᴏᴠɪᴇᴡᴏɴᴄᴇ\n│ ✗ ᴛᴏᴍᴘ3\n│ ✗ ғʟɪᴘᴛᴇxᴛ\n│ ✗ ᴛᴀᴋᴇ\n│ ✗ ᴇᴍᴏᴊɪᴍɪx\n│ ✗ ɢʀᴏᴜᴘғɪɴᴅᴇʀ\n│ ✗ ᴛᴏɪᴍᴀɢᴇ\n│ ✗ ᴛᴏᴠɴ\n│ ✗ ᴛᴏᴠɪᴅᴇᴏ\n│ ✗ ᴛᴏɢɪғ\n╰━─━─━─≪❥≫\n> *ᴄʀᴇᴀᴛᴇʀ : Banks Official*\nPowered By Banks Official ";
        if (typemenu === "v1") {
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            text: _0x1db91f,
            contextInfo: {
              forwardedNewsletterMessageInfo: {
                newsletterName: botname,
                newsletterJid: "120363301955930948@newsletter"
              }
            }
          }, {
            quoted: _0xcac50f
          });
        } else if (typemenu === "v2") {
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            image: fs.readFileSync("./BanksMedia/banks1.jpg"),
            gifPlayback: true,
            caption: _0x1db91f,
            contextInfo: {
              forwardedNewsletterMessageInfo: {
                newsletterName: botname,
                newsletterJid: "120363301955930948@newsletter"
              }
            }
          }, {
            quoted: _0xcac50f
          });
        } else if (typemenu === "v3") {
          _0x4acc2b.sendMessage(_0xcac50f.chat, {
            image: fs.readFileSync("./BanksMedia/banks1.jpg"),
            caption: _0x1db91f,
            gifPlayback: true,
            contextInfo: {
              forwardedNewsletterMessageInfo: {
                newsletterName: botname,
                newsletterJid: "120363301955930948@newsletter"
              }
            }
          }, {
            quoted: _0xcac50f
          });
        } else if (typemenu === "v4") {
          _0x4acc2b.relayMessage(_0xcac50f.chat, {
            scheduledCallCreationMessage: {
              callType: "AUDIO",
              scheduledTimestampMs: 1200,
              title: _0x1db91f
            },
            contextInfo: {
              forwardedNewsletterMessageInfo: {
                newsletterName: botname,
                newsletterJid: "120363301955930948@newsletter"
              }
            }
          }, {});
        }
        break;
      case "repo":
      case "script":
        {
          async function _0x50a353() {
            try {
              const _0x411b49 = await fetch("https://api.github.com/repos/OfficialKango/KANGO-XMD");
              if (!_0x411b49.ok) {
                throw new Error("HTTP error! Status: " + _0x411b49.status);
              }
              const _0x4c41e5 = await _0x411b49.json();
              _0x694d65("*BANKS MD BOT Repository*\n\n🔗 *URL*: https://github.com/banks-xmd\n" + ("📝 *Description*: " + (_0x4c41e5.description || "No description") + "\n") + ("🌟 *Stars*: " + _0x4c41e5.stargazers_count + "\n") + ("🔀 *Forks*: " + _0x4c41e5.forks_count + "\n") + ("📅 *Last Updated*: " + new Date(_0x4c41e5.updated_at).toLocaleString() + "\n\n") + "👨‍💻 *Developer*: Banks Official\n💡 *Tip*: Fork this repo and deploy your own version!");
            } catch (_0x52bda6) {
              _0x694d65("Failed to fetch repository info: " + _0x52bda6.message);
            }
          }
          _0x50a353();
          break;
        }
      case "chatbot":
        if (!_0x1b25de) {
          return _0x694d65(mess.owner);
        }
        if (!_0x55fa2c[0]) {
          return _0x694d65("Example: " + (_0x2b6114 + _0x59dd4b) + " on/off");
        }
        switch (_0x55fa2c[0].toLowerCase()) {
          case "on":
            global.chatbot = true;
            _0x694d65("*BANKS MD BOT AI* 🤖\nChatbot has been *activated*!\n\n_Powered by Banks Official_");
            break;
          case "off":
            global.chatbot = false;
            _0x694d65("*BANKS MD BOT AI* 🤖\nChatbot has been *deactivated*!\n\n_Powered by Banks Official_");
            break;
        }
        break;
      case "telestick":
        {
          if (_0x55fa2c[0] && _0x55fa2c[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
            let _0x1f8f6c = await _0x48635a(_0x55fa2c[0]);
            await _0x694d65("Sending " + _0x1f8f6c.length + " stickers...");
            if (_0xcac50f.isGroup && _0x1f8f6c.length > 30) {
              await _0x694d65("Number of stickers more than 30, bot will send it in private chat.");
              for (let _0x1c1d39 = 0; _0x1c1d39 < _0x1f8f6c.length; _0x1c1d39++) {
                _0x4acc2b.sendMessage(_0xcac50f.sender, {
                  sticker: {
                    url: _0x1f8f6c[_0x1c1d39].url
                  }
                });
              }
            } else {
              for (let _0x34b6be = 0; _0x34b6be < _0x1f8f6c.length; _0x34b6be++) {
                _0x4acc2b.sendMessage(_0xcac50f.chat, {
                  sticker: {
                    url: _0x1f8f6c[_0x34b6be].url
                  }
                });
              }
            }
          } else {
            _0x694d65("Where is the telegram sticker link?\nExample. " + (_0x2b6114 + _0x59dd4b) + " https://t.me/addstickers/FriendlyDeath");
          }
        }
        break;
      default:
        if (_0x13ab46.startsWith("=>")) {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          try {
            _0x694d65(util.format(eval("(async () => { return " + _0x13ab46.slice(3) + " })()")));
          } catch (_0x599c50) {
            _0x694d65(String(_0x599c50));
          }
        }
        if (_0x13ab46.startsWith(">")) {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          try {
            let _0x585d04 = await eval(_0x13ab46.slice(2));
            if (typeof _0x585d04 !== "string") {
              _0x585d04 = require("util").inspect(_0x585d04);
            }
            await _0x694d65(_0x585d04);
          } catch (_0x260f2f) {
            await _0x694d65(String(_0x260f2f));
          }
        }
        if (_0x13ab46.startsWith("$")) {
          if (!_0x1b25de) {
            return _0x694d65(mess.owner);
          }
          exec(_0x13ab46.slice(2), (_0x4cff0c, _0x18d195) => {
            if (_0x4cff0c) {
              return _0x694d65(_0x4cff0c);
            }
            if (_0x18d195) {
              return _0x694d65(_0x18d195);
            }
          });
        }
    }
  } catch (_0x29667d) {
    console.log(util.format(_0x29667d));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x4745f3) {
  let _0x3d1139 = String(_0x4745f3);
  if (_0x3d1139.includes("conflict")) {
    return;
  }
  if (_0x3d1139.includes("Socket connection timeout")) {
    return;
  }
  if (_0x3d1139.includes("not-authorized")) {
    return;
  }
  if (_0x3d1139.includes("already-exists")) {
    return;
  }
  if (_0x3d1139.includes("rate-overlimit")) {
    return;
  }
  if (_0x3d1139.includes("Connection Closed")) {
    return;
  }
  if (_0x3d1139.includes("Timed Out")) {
    return;
  }
  if (_0x3d1139.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x4745f3);
});