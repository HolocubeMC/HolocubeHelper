const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const embed = {
			"title": "Help",
			"description": 'Below are all my commands and there uses.',
			"url": "",
			"color": 8039398,
			"timestamp": "",
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
			  "text": "Created By Greenman#1452"
			},
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/icons/728361742333247601/cbcd2f91b19dd105c65277b42952396f.webp?size=128"
			},
			"fields": [
				{
				  "name": "avatar",
				  "value": "Sends your avatar link!"
				},
				{
				  "name": "discord",
				  "value": "Sends Discord Server statistics."
				},
				{
					"name": "ping",
					"value": "Why does this exsist??? It was from the testing phase??? ... I mean, pong?"
				},
				{
					"name": "player",
					"value": "Sends player information for registerd players. Will also send information for non-registerd players, but less."
				},
				{
					"name": "report",
					"value": "Report players for hacking or breaking the rules."
				},
				{
					"name": "server",
					"value": "Shows information about the Minecraft server."
				},
				{
					"name": "specs",
					"value": "Shows stats about the server host."
				},
				{
					"name": "update",
					"value": "Admin only, you can't use this, try it, I dare you"
				},
			  ]
			};
			message.author.send({ embed})
	 //message.channel.send({ embed });
	 message.channel.bulkDelete(1);
	 const embed = {
		"title": "Help",
		"description": 'I have sent you a DM with the commands in it!',
		"url": "",
		"color": 8039398,
		"timestamp": "",
		"footer": {
		  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
		  "text": "Created By Greenman#1452"
		},
		"thumbnail": {
		  "url": "https://cdn.discordapp.com/icons/728361742333247601/cbcd2f91b19dd105c65277b42952396f.webp?size=128"
		}
	}
		message.channel.send({ embed });
	},
};
