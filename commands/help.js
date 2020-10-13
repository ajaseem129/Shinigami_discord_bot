require('dotenv').config()
const prefix = process.env.prefix
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands','h'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
           
        }

	},
};