module.exports = {
	name: 'update',
	description: 'admin only',
	execute(message) {
		if (message.member.roles.cache.has("735786769252876321")) {
        const embed = {
			"title": "Bot Update",
			"description": 'Below is information on the latest update to me!',
			"url": "",
			"color": 8039398,
			"timestamp": "",
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
			  "text": "Created By Greenman#1452"
			},
			"thumbnail": {
			  "url": "https://cdn.discordapp.com/icons/728361742333247601/cbcd2f91b19dd105c65277b42952396f.webp"
			},
			"fields": [
				{
				  "name": "Version 1.2",
				  "value": "24/07/2020"
                },
                {
                  "name": "Changelog:",
                  "value": "Add rocktopot to /player. All embeds delete the / command before it to make chat cleaner."
                }
			  ]
			};
     message.channel.send({ embed });
	 message.channel.bulkDelete(1);
		}
	else {
		message.channel.bulkDelete(1);
		message.channel.send("You don't have perms to use that.")
	}
}
}
