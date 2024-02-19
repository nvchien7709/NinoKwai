const fse = require("fs-extra")
const approved = __dirname + "/../commands/cache/approvedThreads.json"
module.exports.config = {
    name: "checkduyet",
    eventType: ["log:subscribe"],
    version: "1.1.1",
    credits: "DC-Nam", //mod form by vchien
    description: "Noti check duyệt"
};
module.exports.run = async function({
    api,
    event,
    Users
}) {
    const {
        threadID,
        logMessageData
    } = event
    const {
        PREFIX
    } = global.config
    const {
        getCurrentUserID: botID,
        sendMessage: send,
        unsendMessage: unsend
    } = api
    let data = JSON.parse(fse.readFileSync(approved))
    if (logMessageData.addedParticipants.find(i => i.userFbId == botID())) {
        send("➣𝙉𝙞𝙣𝙤 𝙏𝙤̛́𝙞 Đ𝙖̂𝙮 =))", event.threadID, (error, info) => {
            setTimeout(function() {
                unsend(info.messageID)
                if (!data.includes(threadID)) send("『𝘒𝘦̂́𝘵 𝘕𝘰̂́𝘪 𝘛𝘩𝘢̂́𝘵 𝘉𝘢̣i』\n\➣ 𝑉𝑢𝑖 𝐿𝑜̀𝑛𝑔 𝐿𝑖𝑒̂𝑛 𝐻𝑒̣̂ 𝐴𝑑𝑚𝑖𝑛 Đ𝑒̂̉ 𝐷𝑢𝑦𝑒̣̂𝑡 𝑉𝑎̀ 𝑆𝑢̛̃ 𝐷𝑢̣𝑛𝑔 𝐵𝑜𝑡̛̛\n𝐹𝑏:https://www.facebook.com/vanchiendzs", threadID)
                else send(`〖𝘒𝘦̂́𝘵 𝘕𝘰̂́𝘪 𝘛𝘩𝘢̀𝘯𝘩 𝘊𝘰̂𝘯𝘨〗\n
▱▱▱▱▱▱▱▱▱▱▱▱▱\n→ 𝑆𝑢̛̣ 𝐷𝑢̣𝑛𝑔 ${PREFIX}menu all Đ𝑒̂̉ 𝑋𝑒𝑚 𝐷𝑎𝑛ℎ 𝑆𝑎́𝑐ℎ 𝐿𝑒̣̂𝑛ℎ\n\n→ 𝑇ℎ𝑎𝑛𝑘𝑠 𝐾𝑖𝑢 𝐶𝑎́𝑐 𝐵𝑎̣𝑛 Đ𝑎̃ 𝑆𝑢̛̃ 𝐷𝑢̣𝑛𝑔 𝐵𝑜𝑡 𝐶𝑢̉𝑎 𝑀𝑖̀𝑛ℎ💞\n
▱▱▱▱▱▱▱▱▱▱▱▱▱\n`, threadID)
            }, 5000);
        })
    } else return
      }