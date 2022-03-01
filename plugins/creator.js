function handler(m) {
//this.sendContact(m.chat, '0', 'Mark', m)
this.sendContact(m.chat, '6287832147584', Koko Pangeran, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner|creator)$/i

module.exports = handler
