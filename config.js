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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_04_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMjE0LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkE5NnVsS1Y4UW1MSzUxeUFjSUFUL2ZDTWQ2TlpXY0pnM0RLaXJIVUNLQ1E9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxfR3d2cDhKU1U2V3Z0VWw0MU1ZS1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk5OTIzMzAtZjlhZS00Nzc2LWFjYzUtZWIyNzNmODUwNmIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjAxLFxuICAgICAgMTMxLFxuICAgICAgNyxcbiAgICAgIDEyMCxcbiAgICAgIDcsXG4gICAgICA5MixcbiAgICAgIDU2LFxuICAgICAgMjQ2LFxuICAgICAgODYsXG4gICAgICAyMjgsXG4gICAgICAxOTgsXG4gICAgICAxMSxcbiAgICAgIDE1MyxcbiAgICAgIDE3NixcbiAgICAgIDE5NixcbiAgICAgIDI1MyxcbiAgICAgIDIwMixcbiAgICAgIDkxLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgNixcbiAgICAgIDEwNyxcbiAgICAgIDk4LFxuICAgICAgMTMsXG4gICAgICAxMjAsXG4gICAgICA3NSxcbiAgICAgIDIyMCxcbiAgICAgIDIxOCxcbiAgICAgIDI1NSxcbiAgICAgIDczLFxuICAgICAgMTM5LFxuICAgICAgMzEsXG4gICAgICAzNyxcbiAgICAgIDEzOSxcbiAgICAgIDIwNSxcbiAgICAgIDU5LFxuICAgICAgMTg2LFxuICAgICAgMTY4LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFBXTjE3SjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkQ2K2RVQ0VMUDUrYjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldjUEp5KzZSRGJ4L1ZPc0lWUW5mSTNHclA0cHg1WmFHWGY2YzFiQzNJb3dCMlZGd1NydUtxSlY3OGUwUVNCczR3UmgxaWJOK1dwcHBCZU4xZjZFekRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1hUDVXRmwwVWkzYlFTQjVZTDJrc3M4N3BzY1NpNlN2d3F4ZjRYSUVsT1BycWp3ZTBwKzRXZVQ2SXZrV0pVNmNQNy9uS0gycEhJekh0Ni9TeTFNemhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ3MzEzMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
