const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ᴹᴿ᭄ IyanOffcོ_1ঔৣ꧂
item.ORG: ᴹᴿ᭄ IyanOffcོ_1ঔৣ꧂
item1.TEL;waid=62895323413434:62895323413434@s.whatsapp.net
item1.X-ABLabel:owner selalu ada 
item2.EMAIL;type=INTERNET: yanmek@gmail.com
item2.X-ABLabel:📧Email
item3.ADR:;;🎍Surabaya;;;;
item3.X-ABADR:ac
item3.X-ABLabel:asal kota
item4.URL:https://github.com/IyanXd
item4.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'My Owner', 
            contacts: [{ vcard }]  
        }
    }
)
let dani = 'https://telegra.ph/file/d8c97aa04089f4a5be928.jpg'
await conn.send3ButtonImg(m.chat, dani, "*Hai kak👋,  Itu nomor owner gw…*", '📮: Jngn di spam kack', 'Source code', '.sc', 'Back', '.menu', 'Donasi', '.donasi', sentMsg)}
handler.help = ['owner2', 'creator2']
handler.tags = ['info']

handler.command = /^(owner2|creator2)$/i

module.exports = handler
