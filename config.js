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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_14_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICA5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgNTgsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMZFo1YnlucG5BdmFEU1FIZnljSTZPenVWbXF5WWkwWG14NHpjQVhNZS9JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBMzlZV0NpY1NpcTl2dS1TanRZbDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI2OTY1MzNhLTNmOTYtNGFhMy05YjRkLTY3ODExMzBjZDU0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDE1MyxcbiAgICAgIDE0MSxcbiAgICAgIDE3LFxuICAgICAgNzcsXG4gICAgICAxMjksXG4gICAgICAyMzYsXG4gICAgICA4LFxuICAgICAgMjE4LFxuICAgICAgNDEsXG4gICAgICAyMjcsXG4gICAgICAzMyxcbiAgICAgIDE4NSxcbiAgICAgIDI1MCxcbiAgICAgIDEsXG4gICAgICA5LFxuICAgICAgNjIsXG4gICAgICAzOSxcbiAgICAgIDcsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICA1NyxcbiAgICAgIDE2NyxcbiAgICAgIDIzNyxcbiAgICAgIDg0LFxuICAgICAgOTAsXG4gICAgICAyMzQsXG4gICAgICAxMDIsXG4gICAgICAxNDQsXG4gICAgICAyMTIsXG4gICAgICAxODgsXG4gICAgICAyMjQsXG4gICAgICAzLFxuICAgICAgMTE3LFxuICAgICAgODMsXG4gICAgICAyMTEsXG4gICAgICAxNixcbiAgICAgIDE0NCxcbiAgICAgIDIxNyxcbiAgICAgIDE1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2UlJBUFM3V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNLzYrZFVDRU9QbDlyOEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRDdpRDAraXQ4UWl0RENzcjBzR25xMmw0b1R0clROcWlFQSt4K1dBWEFHb1YzNHp4M0pvcGlNM2VsSkhPUzFEc2NRS2gzMmdxN0JCYmgxSnVlc0dqQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVBtbms0ajA4NjJZUmdqUUY1Ry9mQnVic3h4bGZTM29HVG8yUG8wRjVySjVwZVF1cXUxUHN2QTVTbS9ibEx4blRTZnR5ODdUdnQwa1BRTVZWQi83aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDY3OTY1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpPTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk9MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUldBNGNHTHg2V2RpbEVtTEI0M0tFYnFNZU41L2R5ekZMUzVBRHdLSStiTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
