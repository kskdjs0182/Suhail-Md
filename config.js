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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_40_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDk4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNCxcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpZDh2TlRVa2x1TGQ0ckVBaDVMQkttdWpEVFh1STFqZk9vZi9mZTRqbDRjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVaGxwM1JiTlJUbU11aFQxVkQySWF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0MTc1ZjA4LTI2OWMtNDY1OS1iNjU4LTkyODY0YjljNmY1MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDEzMSxcbiAgICAgIDY2LFxuICAgICAgNzQsXG4gICAgICAxNixcbiAgICAgIDEzLFxuICAgICAgMjksXG4gICAgICAxNyxcbiAgICAgIDIzMyxcbiAgICAgIDgyLFxuICAgICAgMTczLFxuICAgICAgMTQwLFxuICAgICAgMjA1LFxuICAgICAgMTk3LFxuICAgICAgMjcsXG4gICAgICAxMjgsXG4gICAgICAxMDQsXG4gICAgICA3NixcbiAgICAgIDksXG4gICAgICAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MCxcbiAgICAgIDk0LFxuICAgICAgMTIsXG4gICAgICAxNzgsXG4gICAgICAxOTMsXG4gICAgICAxNjIsXG4gICAgICAxOTMsXG4gICAgICA0NyxcbiAgICAgIDYwLFxuICAgICAgMjE1LFxuICAgICAgMTkwLFxuICAgICAgNixcbiAgICAgIDE2MCxcbiAgICAgIDExMixcbiAgICAgIDIzOSxcbiAgICAgIDE5NixcbiAgICAgIDIzOSxcbiAgICAgIDIyNyxcbiAgICAgIDE1MyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1TkczMTVIUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOWDYrZFVDRU9UZGhNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicngzZUxpSW1aK0VuSmdOTXc2aFdENDhlemowMG4xblNJQW0xcnFYcThVRXhCTHhGVlR0Mld4TSs4UlNFMTIyWmIzaU11OVlnTkZvckc1T2I1UEdCQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUUNld2dUcGFDY0xjRFRlNk5ocWxTb1Z1L2pyZ0pPVGhQWWdZTnRZKytvbVBuMi9udW5mN29mTTRUR0RrcG92RTJ4TUdpU01haDFwR2RQa0JtYnpxakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDkwODAxOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpOTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk5MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkF1Qk95RFgyODIzZ3RnVTMxaUhaYlFDMWRFZFN0ZWlxajl1OFRLeVpvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ضــــــدی ملــک ⁰¹²☃️",
  packname: process.env.PACK_NAME || "🩷03247116683🍫",
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
