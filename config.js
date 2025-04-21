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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_02_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxCUGdhekNtVXJNQUJzS1AxV05hSlZ2SmNPdUtxZEpKYXg4Z3NXMzhyMEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ3MTE2NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RTQ0QjAxRTZBNjAwQUMyODBGQzkwRUY5MEY4QThEMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDUyNDA1NjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGgzWFBkS3NSbjIxYVRIbllUM0Q2UVwiLFxuICBcInBob25lSWRcIjogXCI0YmY3MjdkMi00ZjIyLTRmNTUtODA5Yy1iOGY2ZDRhYjhiODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAyNTUsXG4gICAgICAyMzEsXG4gICAgICA5NSxcbiAgICAgIDAsXG4gICAgICA2OSxcbiAgICAgIDc5LFxuICAgICAgMTU3LFxuICAgICAgNTYsXG4gICAgICAxMzIsXG4gICAgICAyMjEsXG4gICAgICAxOTgsXG4gICAgICA3MixcbiAgICAgIDM1LFxuICAgICAgNzksXG4gICAgICA4OCxcbiAgICAgIDIxMSxcbiAgICAgIDEwNSxcbiAgICAgIDcyLFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgODYsXG4gICAgICAyNDEsXG4gICAgICAxOTUsXG4gICAgICA0NSxcbiAgICAgIDYzLFxuICAgICAgMTI5LFxuICAgICAgMjQ1LFxuICAgICAgMTEsXG4gICAgICAxNTgsXG4gICAgICAxNTksXG4gICAgICAyMjUsXG4gICAgICAzOCxcbiAgICAgIDE0MyxcbiAgICAgIDI0OSxcbiAgICAgIDIwOCxcbiAgICAgIDMsXG4gICAgICAyMDAsXG4gICAgICAyNDEsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDdEN0dBTjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTi82K2RVQ0VPeURtY0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkk3cnJKalZCeXlZNTJCM0FjYlZwR3F5ZytDWFNpb3ZaVUt5aDNFNGtETVNmc2s0amFzL1J1QzlkbEl5RkJ3TkV1RnZZVTdsaFRNcXVSam9tYVIwM0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdSMnZWUHNNdFBDV1o4di9jS2s2Zk5DYXlCK2xmZW9NeDdSV1Brem9IWEIxcXJQYkdrdG5kRHlhU3hYZmQybTNZZERIVmw3SG1wN0xsN0J3WlRCRUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUyNDA1NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVy5qc29uIjogIntcImtleURhdGFcIjpcInQ1UlZVdzQwaEpFamZoQWtBVGJiRjJIRThiMHJNS2gvbTVtSEl4U1VMSnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUyNDA1NjgwOTBcIn0iCn0="  // PUT your SESSION_ID 


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
