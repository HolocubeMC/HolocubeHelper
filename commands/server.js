module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		const embed = {
			"title": "Holocube",
			"description": "Holocube is a small survival server. Below is information",
			"url": "",
			"color": 8039398,
			"timestamp": "",
			"footer": {
				"icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				"text": "Created By Greenman#1452",
			},
			"thumbnail": {
				"url": "https://cdn.discordapp.com/icons/728361742333247601/cbcd2f91b19dd105c65277b42952396f.webp?size=128"
			},
			"fields": [
				{
				  "name": "IP",
				  "value": "holo.meloncu.be"
				},
				{
				  "name": "Seed",
				  "value": "6989950847981476017"
				}				  
			 
			]
			
		};
   message.channel.send({ embed });
   message.channel.bulkDelete(1);
	},
};
