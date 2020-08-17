module.exports = {
	name: 'report',
	description: 'Report players for Hacking/Breaking rules',
	args: true,
	execute(message, args) {
        if (message.channel.type == "dm") {
                console.log("Report:")
                console.log(args[0])
                console.log("Reason:")
                console.log(args[1])
                console.log('Report made by:')
                console.log(message.author)
                message.reply('They have been reported to the system. Thanks for providing feedback.')
        }
	else {
                message.channel.bulkDelete(1);
                message.reply("That command can only be run in a DM")
                console.log("Report made in server, made by")
                console.log(message.author)
	}	
}
}
