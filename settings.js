import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['51936994155', '🜲 Propietario 🜲', true],
  ['51957764960'],
  ['51936994155'],
  ['51957764960'], 
  ['51936994155'],
  
// <-- Número @lid -->
//  ['', 'Destroy', true],
  ['222265178386528', 'Cris', true], 
  ['44732688380021', 'Nagi', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['51936994155'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'NagiBot-MD'
global.namebot = '✿◟Nagi-Bot-Md◞✿'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '⪛✰ 𝗡𝗮𝗴𝗶 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 ✰⪜'
global.botname = '𝗡𝗮𝗴𝗶 𝗦𝘂𝗽𝗿𝗲𝗺𝗲'
global.wm = '✿◟𝗡𝗮𝗴𝗶 𝗕𝗼𝘁 𝗠𝗱◞✿'
global.author = '©𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝘅'
global.dev = '©𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝘅'
global.textbot = '𝗡𝗮𝗴𝗶 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲'
global.etiqueta = '@𝗲𝘃𝗼𝗹𝘂𝘁𝗶𝗼𝗻.𝗵𝗮𝘅'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = 'Soles'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://qu.ax/yZRbT.jpeg'
global.avatar = 'https://qu.ax/pXLQR.jpeg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/Ik5Yt8m6Tc82Gmi6y6b4EE'
global.comunidad1 = 'https://chat.whatsapp.com/Ik5Yt8m6Tc82Gmi6y6b4EE'
global.channel = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel2 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.md = 'https://github.com'
global.correo = 'yallico2024@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.nagi = fs.readFileSync('./src/nagi.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: nagi, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363419947391620@newsletter',
ch2: "120363419947391620@newsletter",
ch3: "120363419947391620@newsletter"
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
