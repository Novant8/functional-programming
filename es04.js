function getShortMessages(messages) {
    let ret = messages.filter(msg => msg.message.length < 50);
    return ret.map(msg => msg.message);
}

array['valore']
  
module.exports = getShortMessages