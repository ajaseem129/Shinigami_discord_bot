require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const TOKEN = process.env.BOT_TOKEN;
const prefix = process.env.prefix
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});


bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  console.info(`Called command: ${commandName}`)
  const command = bot.commands.get(commandName)||bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
  if (!command) return message.channel.send("That command doesn't exist. Try r.help for commands")

  try {
    //Checks if command is guild-only
    if (command.guildOnly && message.channel.type === 'dm') {
      return message.reply('I can\'t execute that command inside DMs!');
    }
    //Checks if command requires any arguements
    if (command.args && !args.length) {
      	return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    //Execute the command once it has passed through all the checks.
    command.execute(message, args)

  } 
  catch (error) {
    console.error(error);
    message.channel.send("Oh no something went wrong. Contact DarkKnight#2713 with a screenshot of the command!!")
  }
});

