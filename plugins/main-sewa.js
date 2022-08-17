let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo User 𝐃𝖆𝖗𝖐-𝐌𝐝 👋
╭──「 *SEWABOT* 」
├  1 Minggu : lDR 7.000 (7k)
├  1 BULAN : IDR 10.000 (10k)
├  1 BULAN : lDR 15.000 (15k) 
╰────
╭─ [ KELEBIHAN BOT ]
├  ＯＮ 24 ＪＡＭ
├  FITUR BANYAK
├  FAST RESPOND
╰────
╭─[ KEUNTUNGAN ]
├  ANTI LINK ( AUTO KICK )
├  WELCOME ( OTOMATIS )
├  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *PAYMENT* ]
├  DANA
├  GOPAY
├  OVO
╰────
┏━━〔  *PERHATIAN⚠️*  〕━ꕥ
⬡ [❗] *Dana yang sudah masuk tidak bisa di kembalikan*
┗━━━━━━━━━━ꕥ
Jika anda berminat hubungi nomor di bawah!!

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak😼*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewadani']
handler.tags = ['info']
handler.command = /^(danisewa|sewadani|sewa|sewabot|sewazifa)$/i

module.exports = handler
