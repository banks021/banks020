const {
  spawn
} = require("child_process");
const path = require("path");
const colors = {
  reset: "[0m",
  bright: "[1m",
  dim: "[2m",
  underscore: "[4m",
  blink: "[5m",
  reverse: "[7m",
  hidden: "[8m",
  black: "[30m",
  red: "[31m",
  green: "[32m",
  yellow: "[33m",
  blue: "[34m",
  magenta: "[35m",
  cyan: "[36m",
  white: "[37m",
  bgBlack: "[40m",
  bgRed: "[41m",
  bgGreen: "[42m",
  bgYellow: "[43m",
  bgBlue: "[44m",
  bgMagenta: "[45m",
  bgCyan: "[46m",
  bgWhite: "[47m"
};
class BotProcessManager {
  constructor() {
    this.botProcess = null;
    this.startBot();
  }
  startBot() {
    const _0x58dda2 = [path.join(__dirname, "main.js"), ...process.argv.slice(2)];
    console.log("\n" + colors.bgMagenta + colors.bright + colors.white + "🃏LAUNCHING BANKS MD BOT 💯" + colors.reset);
    console.log("" + colors.cyan + colors.bright + "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + colors.reset);
    console.log("" + colors.bright + colors.yellow + "🌐 PROCESS: " + colors.green + process.argv[0] + colors.reset);
    console.log("" + colors.bright + colors.yellow + "🔧 ARGUMENTS: " + colors.cyan + _0x58dda2.join(" ") + colors.reset + "\n");
    console.log("" + colors.dim + colors.white + "🚀 DEVELOPED BY BANKS OFFICIAL" + colors.reset);
    console.log("" + colors.cyan + colors.bright + "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬" + colors.reset + "\n");
    this.botProcess = spawn(process.argv[0], _0x58dda2, {
      stdio: ["inherit", "inherit", "inherit", "ipc"]
    });
    this.configureProcessEvents();
  }
  configureProcessEvents() {
    this.botProcess.on("message", _0x56a8d7 => {
      if (_0x56a8d7 === "reset") {
        this.restartBot();
      }
    });
    this.botProcess.on("exit", _0x54c2c8 => {
      console.log("\n" + colors.bgRed + colors.bright + colors.white + "💔 Process terminated with code: " + _0x54c2c8 + " " + colors.reset);
      const _0x36a329 = [0, 1, "."].includes(_0x54c2c8);
      if (_0x36a329) {
        this.restartBot();
      }
    });
  }
  restartBot() {
    console.log("\n" + colors.bgYellow + colors.black + colors.bright + "♻️ RESTARTING BANKS MD BOT..." + colors.reset);
    this.botProcess.kill();
    setTimeout(() => {
      this.startBot();
    }, 1000);
  }
}
console.log("" + colors.bgBlue + colors.bright + colors.white + "   BANKS OFFICIAL PRESENTS   " + colors.reset);
console.log("" + colors.bgMagenta + colors.bright + colors.white + "   BANKS MD BOT " + colors.reset + "\n");
new BotProcessManager();