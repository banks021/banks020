import fs from "fs";
import axios from "axios";
import config from "../config.cjs";

const alive = async (m, Matrix) => {
  try {
    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (3600 * 24));
    const hours = Math.floor((uptimeSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);
    const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const prefix = config.Prefix || config.PREFIX || ".";
    const cmd = m.body?.startsWith(prefix) ? m.body.slice(prefix.length).split(" ")[0].toLowerCase() : "";

    if (!["alive", "uptime", "runtime"].includes(cmd)) return;

    let imageBuffer;
    try {
      const response = await axios.get("https://files.catbox.moe/eojuys.jpg", { responseType: "arraybuffer" });
      imageBuffer = Buffer.from(response.data, "binary");
    } catch (error) {
      console.error(`Error fetching image: ${error.message}`);
      imageBuffer = fs.readFileSync("./media/banks-md.jpg"); // Fallback
    }

    const str = `◈━━━━━━━━━━━━━━━━◈
│❒ *Banks-MD* is here for you! 🤖
│❒ ⏳ *Uptime*: ${timeString}
│❒ 🌟 Ready to assist with a smile!
◈━━━━━━━━━━━━━━━━◈`;

    await Matrix.sendMessage(
      m.from,
      {
        image: imageBuffer,
        caption: str,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363398040175935@newsletter",
            newsletterName: "Banks-MD",
            serverMessageId: 143,
          },
        },
      },
      { quoted: m }
    );
  } catch (error) {
    console.error(`❌ Alive error: ${error.message}`);
    await Matrix.sendMessage(m.from, {
      text: `◈━━━━━━━━━━━━━━━━◈
│❒ *Banks-MD* had a little hiccup! Try again! 🌼
◈━━━━━━━━━━━━━━━━◈`,
    }, { quoted: m });
  }
};

export default alive;