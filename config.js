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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_51_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA0OSxcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICA4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVEcTRTWkVKVng1T1JtYURoVElMeXV2eXRRVU42bHZwdnQ5T0xCMXJ5dzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhERjVIMlRkVFA2SWtqYmh6bUNWdUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQ1OGE5ZmMtMzI5MS00MWFiLTg5MmQtM2UwZGU2Y2Y0MzNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MyxcbiAgICAgIDExNixcbiAgICAgIDI0NyxcbiAgICAgIDczLFxuICAgICAgOCxcbiAgICAgIDIxOCxcbiAgICAgIDE0OCxcbiAgICAgIDI0LFxuICAgICAgMTYwLFxuICAgICAgMjU1LFxuICAgICAgMjE0LFxuICAgICAgMjM3LFxuICAgICAgMjgsXG4gICAgICAyMzIsXG4gICAgICAyNTQsXG4gICAgICAyMSxcbiAgICAgIDIyMixcbiAgICAgIDE2MyxcbiAgICAgIDE1NSxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDQ2LFxuICAgICAgMTU2LFxuICAgICAgMjEzLFxuICAgICAgNDcsXG4gICAgICAxMDYsXG4gICAgICAyMjgsXG4gICAgICA2NCxcbiAgICAgIDIzNyxcbiAgICAgIDIzMCxcbiAgICAgIDI0NSxcbiAgICAgIDM2LFxuICAgICAgODQsXG4gICAgICAyMDUsXG4gICAgICA2MCxcbiAgICAgIDE2NyxcbiAgICAgIDExMyxcbiAgICAgIDEwNixcbiAgICAgIDE2OCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5OSDVYUURBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjQ5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iNitkVUNFSVdacE1BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRQS9SL0drcDlnelVERzZzS0ZMQXRDSTFFWldpZGYvd2xpUE5HSVFqYXpzeUl0bEV3YWNCSElFUjJNZ2ZWNnY2UlBBYWRuZDgrOFBDZ3B6VCt1UTFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzRlV2bDllZzhDMFUrVThla1JSaDRNRnpqQUNDcm9zMXVYOEdlVFhZN3NObUFzOFVNRGthQWx2UTNBS2Qzdk5URnE5dEpEVzFSNjdXYTNKSkljY2loUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NDIzNDk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnNUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGc1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwRmlIZWdDTEpKUk1iM2RhSi9GL0xNV1dOa3lTNVVjejJFODBEQXAwcmdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTE3MjgyMTQ4OFwifSIKfQ=="  // PUT your SESSION_ID 


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
