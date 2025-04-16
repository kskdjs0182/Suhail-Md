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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDkzLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLeTlqZWt3Yk1hcjFhYzJvekEyZjhRUXQ2OGo1dWxrOG5xOGFFYXJmeW5VPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTS3pReEhtTlNfR002OHl6Q21RY1RnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzNTFhMTNhLWRlMGMtNDUxZS1hMzNiLWFhZGZjODNhZmM0Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICA3OSxcbiAgICAgIDEzNyxcbiAgICAgIDI1MSxcbiAgICAgIDE1NSxcbiAgICAgIDMzLFxuICAgICAgMjQyLFxuICAgICAgMTMwLFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICAyMjksXG4gICAgICA5MixcbiAgICAgIDQwLFxuICAgICAgNjgsXG4gICAgICAxMjMsXG4gICAgICAwLFxuICAgICAgMjAyLFxuICAgICAgMjEzLFxuICAgICAgMTM0LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDQxLFxuICAgICAgMjEsXG4gICAgICAxMSxcbiAgICAgIDIwMyxcbiAgICAgIDU4LFxuICAgICAgNjIsXG4gICAgICA4MSxcbiAgICAgIDE3NSxcbiAgICAgIDIwOCxcbiAgICAgIDE2MCxcbiAgICAgIDI0NyxcbiAgICAgIDE5OCxcbiAgICAgIDE2NyxcbiAgICAgIDE3NixcbiAgICAgIDU1LFxuICAgICAgNzEsXG4gICAgICAxMzYsXG4gICAgICA2NCxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTks1TjdSS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSDYrZFVDRUlpdC9yOEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQU1iNDhld25WTlVwcWtFWGtKdHpyb3lieEtoZ2hHTnlGd2QzbnVnZDNzU3VwUEg3R3lyQzVtdS95NVBFY29aVmR6MlN0WEJxaEgyRTlCelhTa09pQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3duTnUxYnYrNTc3Sks5KzFrRXJ1eEhMN3ErMm5PYmpoTVdZcEZNbVZsVmtsc3lFUnUrRkd6RXBocFF3Rk5uaE56blM5cndLblVyTXF0Zm43aU1VQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDgwMzQ2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpOTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk5MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkF1Qk95RFgyODIzZ3RnVTMxaUhaYlFDMWRFZFN0ZWlxajl1OFRLeVpvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
