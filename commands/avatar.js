module.exports = {
	name: 'avatar',
	description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
	aliases: ['icon', 'pfp'],
	execute(message) {
		var av = message.author.displayAvatarURL()
			const embed = {
				"title": "Your avatar",
				"description": ' ',
				"url": "",
				"color": 8039398,
				"timestamp": "",
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				  "text": "Created By Greenman#1452"
				},
				"image": {
					"url": av
				}
				}
				message.channel.bulkDelete(1);
				message.channel.send({ embed });
	},
};