module.exports = {
	name: 'specs',
	description: 'Display info about the server hosting specs.',
	execute(message) {
		const embed = {
			"title": "Meloncube Hosting Service",
			"description": "Below is information for the specs of the server and Meloncube",
			"url": "",
			"color": 8039398,
			"timestamp": "",
			"footer": {
				"icon_url": "https://cdn.discordapp.com/avatars/407991539755778058/5c3947ec7022241714bac9c29b7b2ecf.webp",
				"text": "Created By Greenman#1452",
			},
			"thumbnail": {
				"url": "https://pbs.twimg.com/profile_images/740301116714405889/E4JjXzjH_400x400.jpg"
			},
			"fields": [
				{
				  "name": "CPU",
				  "value": "Intel and AMD Cores, the clock speeds are at minimum 3.4 GHz (3.7GHz turbo) per core"
				},
				{
				  "name": "RAM",
				  "value": "DDR4 ECC Core, error correcting and highly clocked"
                },
                {
                  "name": "Storage Drives",
                  "value": "SSD and NVMe Drives."
                },
                {
                  "name": "Fibre Uplink and Downlink",
                  "value": "Connected to the internet through multiple fiber connections"
                },
                {
                  "name": "DDOS Protection",
                  "value": "Holocube is protected by 480Gbps advanced DDoS protection"
                },
                {
                  "name": "OS",
                  "value": "Powerd by Linux OS, all code is open sourced"
                }
			 
			]
			
		};
		message.channel.bulkDelete(1);
   message.channel.send({ embed });
	},
};