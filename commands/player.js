
module.exports = {
	
	name: 'player',
	description: 'Information about Players',
	args: true,
	execute(message, args, ) {
		var thumb = "https://minotar.net/helm/" + args[0]
		if (args[0] == 'GreenmanYT') {
			const embed = {
				"title": "GreenmanYT",
				"description": "GreenmanYT is an active player on Holocube. He is most known for his building skills, however he has recently been working on redstone builds and farms.",
				"url": "",
				"color": 8039398,
				"timestamp": "",
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				  "text": "Created By Greenman#1452"
				},
				"thumbnail": {
				  "url": "https://minotar.net/helm/GreenmanYT"
				},
				"fields": [
					{
					  "name": "Strenghs",
					  "value": "Building"
					},
					{
					  "name": "Weaknesses",
					  "value": "Redstone, Lava"
					},
					{
					  "name": "Joined",
					  "value": "Mid Season 1"
					}
				  ]
				};
			  message.channel.send({ embed });
			  message.channel.bulkDelete(1);
		message.reply(`The player information for ${args[0]} is above!`);
	}
		else if (args[0] == 'Qaz1550') {
			const embed = {
				"title": "Qaz1550",
				"description": "Qaz1550 is the owner of holocube, in charge of all admin duties. He plays on the server a lot, and enjoys building.",
				"url": "",
				"color": 8039398,
				"timestamp": "",
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				  "text": "Created By Greenman#1452"
				},
				"thumbnail": {
				  "url": "https://minotar.net/helm/Qaz1550"
				},
				"fields": [
					{
					  "name": "Strenghs",
					  "value": "Farms, Modern builds, admining, :O"
					},
					{
					  "name": "Weaknesses",
					  "value": "Survival redstone, Survival non-modern building"
					},
					{
					  "name": "Joined",
					  "value": "At the very beggining..."
					}
		 		 ]
				};
	  message.channel.send({ embed });
	  message.channel.bulkDelete(1);
	message.reply(`The player information for ${args[0]} is above!`);
	}	
		else if (args[0] == 'rockacam') {
			const embed = {
				"title": "rockacam",
				"description": "Rockacam try’s to go on the server whenever his brother is not home, he plays a lot and enjoys it.",
				"url": "",
				"color": 8039398,
				"timestamp": "",
				"footer": {
				  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				  "text": "Created By Greenman#1452"
				},
				"thumbnail": {
				  "url": "https://minotar.net/helm/rockacam"
				},
				"fields": [
					{
					  "name": "Strenghs",
					  "value": "Modern Builds, Overall decent at Survival"
					},
					{
					  "name": "Weaknesses",
					  "value": "Patience, Finding his loot, PvP"
					},
					{
					  "name": "Joined",
					  "value": "Early season 2"
					}
			 	 ]
				};
		 message.channel.send({ embed });
		 message.channel.bulkDelete(1);

message.reply(`The player information for ${args[0]} is above!`);
}
else if (args[0] == 'walters_slave') {
	const embed = {
		"title": "walters_slave",
		"description": '"Plays on the server when he is bored of hypixel and will play every now and again"',
		"url": "",
		"color": 8039398,
		"timestamp": "",
		"footer": {
		  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
		  "text": "Created By Greenman#1452"
		},
		"thumbnail": {
		  "url": "https://minotar.net/helm/walters_slave"
		},
		"fields": [
			{
			  "name": "Strenghs",
			  "value": "no life, pvp"
			},
			{
			  "name": "Weaknesses",
			  "value": "patience, gets bored to easy, I am unlucky as hell and I can’t find anything"
			},
			{
			  "name": "Joined",
			  "value": "Season 1"
			}
		  ]
		};
 message.channel.send({ embed });
 message.channel.bulkDelete(1);
message.reply(`The player information for ${args[0]} is above!`);
}
else if (args[0] == 'Justy101') {
	const embed = {
		"title": "Justy101",
		"description": 'Justy101 is an active player on HoloCube. He is most known for his redstone capabilities however he is slowly getting better at building.',
		"url": "",
		"color": 8039398,
		"timestamp": "",
		"footer": {
		  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
		  "text": "Created By Greenman#1452"
		},
		"thumbnail": {
		  "url": "https://minotar.net/helm/Justy101"
		},
		"fields": [
			{
			  "name": "Strenghs",
			  "value": "Redstone"
			},
			{
			  "name": "Weaknesses",
			  "value": "Building"
			},
			{
			  "name": "Joined",
			  "value": "Season 1"
			}
		  ]
		};
 message.channel.send({ embed });
 message.channel.bulkDelete(1);
message.reply(`The player information for ${args[0]} is above!`);
}
else if (args[0] == 'CerealCouch') {
	const embed = {
		"title": "CerealCouch",
		"description": "CerealCouch is thought to be believed as a non humaniod being... Nobody knows his true identity. (also it's(he's) pretty neat)",
		"url": "",
		"color": 8039398,
		"timestamp": "",
		"footer": {
		  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
		  "text": "Created By Greenman#1452"
		},
		"thumbnail": {
		  "url": "https://minotar.net/helm/cerealcouch"
		},
		"fields": [
			{
			  "name": "Strenghs",
			  "value": "lag"
			},
			{
			  "name": "Weaknesses",
			  "value": "pfft idk"
			},
			{
			  "name": "Joined",
			  "value": "Season 1"
			}
		  ]
		};
 message.channel.send({ embed });
 message.channel.bulkDelete(1);
message.reply(`The player information for ${args[0]} is above!`);
}
else if (args[0] == 'Rocktopot') {
	const embed = {
		"title": "Rocktopot",
		"description": "Dosen’t interact with many people and plays when no ones online. Likes survival Minecraft.",
		"url": "",
		"color": 8039398,
		"timestamp": "",
		"footer": {
		  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
		  "text": "Created By Greenman#1452"
		},
		"thumbnail": {
		  "url": "https://minotar.net/helm/rocktopot"
		},
		"fields": [
			{
			  "name": "Strenghs",
			  "value": "Average builder, peaceful player, surviving for long times"
			},
			{
			  "name": "Weaknesses",
			  "value": "Grinding, PvP"
			},
			{
			  "name": "Joined",
			  "value": "Mid Season 2"
			}
		  ]
		};
 message.channel.send({ embed });
 message.channel.bulkDelete(1);
message.reply(`The player information for ${args[0]} is above!`);
	}
		else {
		
			const embed = {
			"title": args[0],
			"description": 'We could not find a registerd player with that name, remember the names are case sensitive. A full list is below.',
			"url": "",
			"color": 8039398,
			"timestamp": "",
			"footer": {
			  "icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
			  "text": "Created By Greenman#1452"
			},
			"thumbnail": {
			  "url": thumb
			},
			"fields": [
				{
				  "name": "Valid Names",
				  "value": "GreenmanYT, Qaz1550, rockacam, walters_slave, Justy101, Cerealcouch, Rocktopot"
				},
			  ]
			};
	 message.channel.send({ embed });
	 message.channel.bulkDelete(1);
	message.reply(`The player information for ${args[0]} is above!`);
	}
}
}