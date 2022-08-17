const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*RULES*
1. Jangan Pernah Spam Bot ❎
2. Jangan Call Nomer Bot ❎
3. Jangan Mengeksploitasi Bot ❎

Sanksi : *Warn/Soft Block*

*About Questions⁉️*

👦 : Bot nya Slow Respon
🤖 : Mohon Bersabar, Mungkin
Kendala Dari Jaringan, Signal,
Atau Bahkan Terbanned Dari
Pihak WhatsApp

👦 : Boleh Masukin Ke Grup Saia
Tidak?
🤖 : Chat Wa Owner Aja Semoga Aja Boleh

👦 : Apakah Bot Ini Masih
Menyimpan File Yang Saya Kirim?
🤖 : Tidak Bro Santai Saja

👦 : Min, Ada Fitur Yang Error
🤖 : Jika Menemukan Bug/Error
Silahkan Langsung Hubungi
Owner/Creator Agar Segera Di Fix

Tetap Patuhi Rules Agar Tetap
Bisa Menikmati Bot

*Note* : Segala Ketentuan Dan
Kebijakan Yang Berlaku Di Pegang
Oleh Owner Bot, Sewaktu-Waktu
Owner Berhak Memakai Ataupun
Mengubah Kebijakan Dan
Ketentuan Yang Berlaku

*Thanks* Buat Kalian
User-User Yang Sudah Memakai
Script Ini Dan Pengguna Bot
Yang Sudah Mau Mematuhi
Rules, Serta Para Constributor
Yang Sudah Membantu Dalam
Pembuatan Bot Ini
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'Group',
               url: 'https://chat.whatsapp.com/EVwtTcTdkIf1SBetn69gJt'
             }

           },
                {
               urlButton: {
               displayText: 'Myweb',
               url: 'https://istagram.com/yanxd81'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Script',
               id: '.sc',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler