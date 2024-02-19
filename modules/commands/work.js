module.exports.config = {
    name: "work",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "",
    description: "Làm việc để có tiền, có làm thì mới có ăn",
    commandCategory: "money",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 12
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "⚡️Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": "⚡️You're done, come back later: %1 minute(s) %2 second(s)."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
const { threadID, messageID, senderID } = event;
let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != event.senderID) return api.sendMessage("Chỉ người dùng lệnh này mới có quyền reply lại nhé =))", event.threadID, event.messageID)

var money = Math.floor(Math.random() * 20000) + 20000


//random công việc cần làm
var rdcn = ['tuyển dụng nhân viên', 'quản trị khách sạn', 'tại nhà máy điện', 'đầu bếp trong nhà hàng', 'công nhân']; //random công việc khi làm ở khu công nghiệp
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['sửa ống nước', 'sửa điều hòa cho hàng xóm', 'bán hàng đa cấp', 'phát tờ rơi', 'shipper', 'sửa máy vi tính', 'hướng dẫn viên du lịch', 'cho con bú']; //random công việc khi làm ở khu dịch vụ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['kiếm được 13 thùng dầu', 'kiếm được 8 thùng', 'kiếm được 9 thùng dầu', 'kiếm được 8 thùng dầu', 'ăn cướp dầu ', 'lấy nước đổ vô dầu rồi bán']; //random công việc khi làm ở mỏ dầu
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['quặng sắt', 'quặng vàng', 'quặng than', 'quặng chì', 'quặng đồng ', 'quặng dầu']; //random công việc khi khai thác quặng
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['kim cương', 'vàng', 'than', 'ngọc lục bảo', 'sắt ', 'đá bình thường', 'lưu ly', 'đá xanh']; //random công việc khi đào đá
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 
  
var rddkl = ['sau này chịu khó cần cù,thì bù siêng năng chỉ có làm thì mới có ăn,còn cái loại không làm mà đòi có ăn thì ăn đb nhá..ăn cứ*...nhá', 'sau này chịu khó cần cù,thì bù siêng năng chỉ có làm thì mới có ăn,còn cái loại không làm mà đòi có ăn thì ăn đb nhá..ăn cứ*..nhá']; //ramdom ko làm mà cũng có ăn
var work7 = rddkl[Math.floor(Math.random() * rddkl.length)];
var rddbh = ['bán bao cao su dạo','bán nhà','bán kem đánh răng','bán thức ăn cho chó','bị một ai đó bom hàng','bán búp bê tình dục :>>>']; //random công việc bán hàng đa cắp
var work8 = rddbh[Math.floor(Math.random() * rddbh.length)];
var rddcc = ['được 1 con cá mập trắng','được 1 con tôm hùm bông','được 1 con cá voi xanh','bạn câu được 1 con cá mặt trời Hoodwinker','được 1 con mực ống','được 1 con cua hoàng đế','được 1 con cá mặt trăng','được 1 con cá hồi','được 1 con cá heo','được 1 con cá sấu']; //random công câu cá
var work9 = rddcc[Math.floor(Math.random() * rddcc.length)];
var rddbb = ['thi rớt tốt nghiệp','làm rác zing boiz','đi chơi net và bị mẹ gank','bạn đóng phim JAV']; //random khi làm việc
var work10 = rddbb[Math.floor(Math.random() * rddbb.length)];//
///
var rddgd = ['chị hàng xóm', 'đại gia 20 tuổi', 'người lạ','ông cụ 90 tuổi', 'thằng nhóc mới nhú']; //random công việc của 
var work12 = rddgd[Math.floor(Math.random() * rddgd.length)];
////

///
var rddac = ['ăn cướp 34 tỷ của Khoa Pug', 'cướp ngân hàng', 'cướp ve chai của thằng bán ve chai', 'cướp đá bào của Johnny Đặng', 'cướp 1 chiếc exciter 150', 'trộm đồ lót của ông hàng xóm', 'cướp 22 thùng dầu ở nhà máy sản xuất dầu', 'cướp tiền của 1 gã ăn xin', 'ăn cướp của nhà nghèo chia cho nhà giàu']; //random công việc của 
var work14 = rddac[Math.floor(Math.random() * rddac.length)];
//
var rdfaker = ['solo thua', 'cầu xin giảng hòa', 'được chiến công đầu với', 'hạ gục']; 
var work15 = rdfaker[Math.floor(Math.random() * rdfaker.length)];
///
var rdcave = ['đánh quoái', 'vật tay với quoái vật', 'chơi tiến lên với quoái vật', 'chửi lộn solo 1 vs 1 với quoái vât']; 
var work16 = rdcave[Math.floor(Math.random() * rdcave.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `⚡️Bạn đang làm việc ${work1} ở khu công nghiệp và kiếm được ${money}$` ;await Currencies.increaseMoney(event.senderID, parseInt(money)); break;             
                case "2": msg = `⚡️Bạn đang làm việc ${work2} ở khu dịch vụ và kiếm được ${money}$`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "3": msg = `⚡️Bạn ${work3} tại khu mở dầu và bán được ${money}$`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "4": msg = `⚡️Bạn đang khai thác ${work4} và kiếm được ${money}$`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "5": msg = `⚡️Bạn đào được ${work5} và kiếm được ${money}$` ; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
              
                case "7": msg = `⚡️Bạn à ${work7} vì vậy số tiền bạn nhận được là ${money}$ :>>> `; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "8": msg = `⚡️Bạn ${work8} và nhận được số tiền là ${money}$ `; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "9": msg = `⚡️Bạn câu ${work9} và bạn bán nó,số tiền bạn nhận được là ${money}$  `; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "10": msg = `⚡️Bạn ${work10} và nhận được số tiền  là ${money}$ :>>> `; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                
                case "12": msg = `⚡️Bạn được ${work12} cho ${money}$ và bạn đã hack sập facebook của người khác`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
               
                case "14": msg = `⚡️Bạn ${work14} và số tiền bạn nhận được là ${money}$ -.-`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "15": msg = `⚡️Bạn đã ${work15} Faker và kiếm được ${money}$ -.-`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "16": msg = `⚡️Bạn đã nhận được ${money}$ từ việc ${work16}`; await Currencies.increaseMoney(event.senderID, parseInt(money)); break;
                case "17": msg = "⚡️Chưa update..."; break; //thêm case nếu muốn 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 17 || choose < 1) return api.sendMessage("⚡️Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️Chưa update...") {
                msg = "⚡️Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 100).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("[🍁]  DANH SÁCH VIỆC LÀM  [🍁]" +
                "\n\n1. Khu công nghiệp." +
                "\n2. Khu dịch vụ." +
                "\n3. Khu mỏ dầu." +
                "\n4. Khai thác quặng." +
                "\n5. Đào đá" +
                "\n7. Không làm mà cũng có ăn:>>" +
                "\n8. Bán hàng đa cấp" +
                "\n9. Câu cá" +
                "\n10. ramdom bừa 1 công việc nào đó" +
                "\n12. hack facebook" +
                "\n14. ăn cướp,đúng rồi cướp đó" +
                "\n15. solo với Faker" +
                "\n16. làm siêu nhơn trừ gian diệt ác" +
                "\n\n⚡️Hãy reply tin nhắn và chọn theo số" //thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
  }