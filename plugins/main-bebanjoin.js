let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/2f08d4a54fa18d67d04d6.png', m, { packname: "𝐃𝖆𝖗𝖐-𝐌𝐝", author: "@wạ.me/𝐲𝖆𝖓𝖓𝖐𝖓𝖙𝖑𝖑〆" })
}

handler.customPrefix = /^(bebanjoin)$/i
handler.command = new RegExp

module.exports = handler
