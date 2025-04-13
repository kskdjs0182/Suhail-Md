const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_23_04_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk9TTUZFeEdNVHlTWlBYbTJOZnMvT1dWOWtUSnVaS21rVTNUTlZQd2JRcms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9yU0JRd0JTUnZpOGhTR1VFZnVOQlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFlOGY1YTItZjMyMy00ZjJhLWIxYjEtNDk4YmI5OTkwZmE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTcwLFxuICAgICAgMTksXG4gICAgICA2MixcbiAgICAgIDIxMCxcbiAgICAgIDE3LFxuICAgICAgMjQxLFxuICAgICAgNjksXG4gICAgICAyMjMsXG4gICAgICAyNDgsXG4gICAgICA3OCxcbiAgICAgIDcxLFxuICAgICAgMjM0LFxuICAgICAgMjE0LFxuICAgICAgMjI2LFxuICAgICAgMTE3LFxuICAgICAgMjIyLFxuICAgICAgMjI4LFxuICAgICAgMjI3LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAxNDksXG4gICAgICAxNyxcbiAgICAgIDEwNixcbiAgICAgIDY0LFxuICAgICAgODIsXG4gICAgICAxNSxcbiAgICAgIDg4LFxuICAgICAgMTc4LFxuICAgICAgNjIsXG4gICAgICAxNTgsXG4gICAgICA4MCxcbiAgICAgIDEyOSxcbiAgICAgIDYyLFxuICAgICAgMjQ4LFxuICAgICAgOTcsXG4gICAgICAxNjIsXG4gICAgICAzNCxcbiAgICAgIDI0OSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBMWVA4NzFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ016NitkVUNFUEd0Nzc4R0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyOXkwak54a2F1TmphbFl5SWZqeXNtTVFrczBCNG1BVlBsRkEvYjIvWkJKU3J4TlcwR1hlem9RYzcwM01pajJ3bFhjS3Jua2Y2NEtMZmVKVWRieUZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyVzU4RzhXd1grdGZ1MitJVk9DOUR3RHZNNVk2N1Jub21nZUxSZUNrc2FzUXJycUJ0Z1ZSOFdCeXViZExNZEZZdjFvR2ZkanFkeGVUdWQ1dW85RmNDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0NTU3ODEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk9EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKT0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2Q0FGeUp4VFZvS1ZQa0FRQm9zckNsR2Vpd0srelR3V0VWaUtNN1A5SlpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDQ3NzQyMzYyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
