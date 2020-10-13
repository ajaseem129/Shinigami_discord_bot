module.exports = {
    name: '',
    description: '!',
    args: true,
    usage: '<a> <b>',
    guildOnly: true,
    aliases: [],
    execute(message, args) {
        
      const timeTaken = Date.now() - message.createdTimestamp;
      message.channel.send(`Pong! This message had a latency of ${timeTaken}ms.`);
    },
  };
  