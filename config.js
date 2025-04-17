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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_23_04_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTksXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUElrdy8vQ0lxdFFPeEd4bENKVngrdXBsY2cyc3VON09pZzhwcmpNaUl0RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWVBSTItRExUVVdFU2g0M1I2ZmFjQVwiLFxuICBcInBob25lSWRcIjogXCI5YzZmN2FkYS02OTk1LTRlNTMtYTRmMC1mMzkyMWRkM2RjNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMSxcbiAgICAgIDQ0LFxuICAgICAgMTMyLFxuICAgICAgMTg4LFxuICAgICAgNDAsXG4gICAgICA1OSxcbiAgICAgIDAsXG4gICAgICA0NSxcbiAgICAgIDE2MSxcbiAgICAgIDI1MixcbiAgICAgIDY4LFxuICAgICAgMTE1LFxuICAgICAgOCxcbiAgICAgIDI0LFxuICAgICAgMTU1LFxuICAgICAgMTIwLFxuICAgICAgMTU0LFxuICAgICAgMTIyLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMjMsXG4gICAgICAyNDYsXG4gICAgICAxNDMsXG4gICAgICAyMDYsXG4gICAgICA5OSxcbiAgICAgIDYsXG4gICAgICA4NSxcbiAgICAgIDQ2LFxuICAgICAgMTg4LFxuICAgICAgMTgwLFxuICAgICAgMyxcbiAgICAgIDQzLFxuICAgICAgOTMsXG4gICAgICA0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIzLFxuICAgICAgNjMsXG4gICAgICAxODgsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzc5OTNTNkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlQ2K2RVQ0VOUGxnOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU5R000ZDVLS2xFNkZ2OUlqL2x4WW1zN2wrd2tSSFVnUjVzbTdob1ZyUWgyL29jYUFueFJ4eHBnOFNJdzl3Z1VvZG5ZRzZUOHNPK0RZa1pEZXJERkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZWNlg0K2pkVnNRdzlGbjM4Mkd2QnZGTHdhaWFheXBlUGlXY0txRVZyVmFqV2RCeWlBMkRiYTJNMmhNUU54Q0EveDZDRGhJTE0yenpoaU1BNkFxekR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ4OTI2MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
