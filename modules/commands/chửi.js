var fs = require("fs");
module.exports.config = {
	name: "chửi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoàng Nguyên",
	description: "chửi người cần tag nhưng là voice",
	commandCategory: "war",
	usages: "[tag tới chớt]",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [		
		{
			body:"nghe đi",
			attachment: fs.createReadStream("./modules/commands/chuivoice/dmm.mp3")
		},
		{
			body: "rén ?",
			attachment: fs.createReadStream("./modules/commands/chuivoice/ren.mp3")
		},
		{
			body: "out nhóm đi em ơi nhục lm",
			attachment: fs.createReadStream("./modules/commands/chuivoice/outnhomdi.mp3")
		},

	{
			body: "về xem mẹ mày đi kìa",
			attachment: fs.createReadStream("./modules/commands/chuivoice/vexemmemay1.mp3")
		},
	{
			body: "giòng họ tổ tông nhà m",
			attachment: fs.createReadStream("./modules/commands/chuivoice/gionghototong.mp3")
		},
    	{
			body: "dcm 1",
			attachment: fs.createReadStream("./modules/commands/chuivoice/ditconme1.mp3")
		},
    	{
			body: "dcm 2",
			attachment: fs.createReadStream("./modules/commands/chuivoice/ditme2.mp3")
		},
{
			body: "Eo ôi",
			attachment: fs.createReadStream("./modules/commands/chuivoice/eooi.mp3")
		},
{
			body: "sao m sủa lắm thế",
			attachment: fs.createReadStream("./modules/commands/chuivoice/sualamthe.mp3")
		},
{
			body: "kinh tởm",
			attachment: fs.createReadStream("./modules/commands/chuivoice/kinhtom.mp3")
		},




    
	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}