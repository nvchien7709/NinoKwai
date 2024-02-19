module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Yae Miko",
	description: "Tắt Bot.",
	commandCategory: "Hệ Thống",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("𝘼𝙣𝙠 𝙊𝙛𝙛 𝙉𝙝𝙚́ 𝘾𝙖́𝙘 𝙀𝙢💤",event.threadID, () =>process.exit(0))