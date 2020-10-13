module.exports = {
    name: 'join',
    description: 'Join!',
    guildOnly:true,
    aliases: ["j"],
    async execute(message, args) {
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
        
          } else {
            message.channel.send('You need to join a voice channel first!');
          }
    },
  };
  