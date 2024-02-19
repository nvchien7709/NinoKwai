var fs = require("fs");
module.exports.config = {
	name: "hát",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoàng Nguyên",
	description: "bé Dứa sẽ hát cho nghe",
	commandCategory: "war",
	usages: "chuối hát cho nghe cả giọng nam và nữ",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	var sentenses = [		
		{
			body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam1",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam1.mp3")
		},

    
		{
			body: "E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam2",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam2.mp3")
		},
    
	{
			body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam3",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam3.mp3")
		},
    
	{
			body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam4",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam4.mp3")
		},

        
	{
			body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam5",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam5.mp3")
		},

	{
			body:"E hèm, E hèm nay Dứa giả giọng nam hát ngẫu nhiên cho nghe nhớ || mã : nam6",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nam6.mp3")
		},
    
    //// dọng nữ
		
    {
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu1",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu1.mp3")
		},

	{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu2",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu2.mp3")
		},
	{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu3",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu3.mp3")
		},
    	{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu4",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu4.mp3")
		},
    	{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu5",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu5.mp3")
		},

{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu6",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu6.mp3")
		},
    
{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu7",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu7.mp3")
		},
    
{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu8",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu8.mp3")
		},

    {
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu9",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu9.mp3")
		},

  {
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu10",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu10.mp3")
		},

    {
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu11",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu11.mp3")
		},

    {
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu12",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu12.mp3")
		},

{
			body: "E hèm, E hèm nay Dứa hát ngẫu nhiên cho nghe nhớ || mã bài hát : nu13",
			attachment: fs.createReadStream("./modules/commands/hatvoice/nu13.mp3")
		},
    
	];
	api.sendMessage(sentenses[Math.floor(Math.random() * parseInt(sentenses.length))], event.threadID, event.messageID);
}