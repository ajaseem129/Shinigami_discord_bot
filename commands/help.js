module.exports = {
    name: 'help',
    description: 'Help!',
    aliases: ["h"],
    execute(message, args) {
        message.reply('This is a custom bot, prefix is r!. Currently available commands are as follows \n1. r!ping ==> Tells you how much latency you have')
    },
  };
  