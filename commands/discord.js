module.exports = {
	name: 'discord',
	description: 'Display info about this discord server.',
	execute(message) {
		const embed = {
			"title": "Discord Server Stats",
			"description": ' ',
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
				  "name": "Server Name",
				  "value": message.guild.name
				},
				{
				  "name": "Server Members",
				  "value": message.guild.memberCount
				},
				{
				  "name": "Created",
				  "value": message.guild.createdAt
				}
			  ]
			
			}
			message.channel.send({ embed });
			message.channel.bulkDelete(1);
		//message.channel.send(`Discord Server Information\n \nServer Name: ${message.guild.name}\nServer Members: ${message.guild.memberCount}`);
	},
};