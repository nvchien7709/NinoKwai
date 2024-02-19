module.exports.config = {
  name: "leaveNoti",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "",
  description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function() {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "leaveGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });

  const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
  if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

  return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const moment = require("moment-timezone");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const uid = (event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "đã tự rời khỏi nhóm" : "ít tương tác với nhóm nên QTV qyết định mời ra khỏi nhóm\n━━━━━━━━━━━━\n[🍁] Người kick : {author} - id : {id}";
  const path = join(__dirname, "cache", "leaveGif");
  const gifPath = join(path, `leave.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

  (typeof data.customLeave == "undefined") ? msg = "━━━━━━━━━━━━\nBạn {name} Đã {type}\n👉Profile của {name} là : https://www.facebook.com/profile.php?id={uid} \n━━━━━━━━━━━━\n[ {time} ]" : msg = data.customLeave;
  var getData = await Users.getData(event.author)
  var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự rời" : getData.name
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{uid}/g, uid).replace(/\{id}/g, event.author).replace(/\{author}/g, nameAuthor).replace(/\{time}/g, time);

  const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

  if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
}