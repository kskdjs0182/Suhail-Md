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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_47_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAwLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHQvOFRpWHlCcXVQeDZNU0VMQlZ3bE9OWmY1L2IrcmhkTkVnMzVraEIyMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwic2ZYSDE1RzBRZ0dyb29Bc1prNFJHZ1wiLFxuICBcInBob25lSWRcIjogXCI1YTdiNTBiMy1jN2I5LTRjOWUtOTAzOC00ZjRiNzM1OTg3OWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAzOCxcbiAgICAgIDE4OCxcbiAgICAgIDE2LFxuICAgICAgNzAsXG4gICAgICAyNDksXG4gICAgICA5MSxcbiAgICAgIDI5LFxuICAgICAgMTI0LFxuICAgICAgMjM4LFxuICAgICAgMTE4LFxuICAgICAgNjgsXG4gICAgICAxOTYsXG4gICAgICAyMDksXG4gICAgICAxMTQsXG4gICAgICA1NSxcbiAgICAgIDE4MCxcbiAgICAgIDIzNixcbiAgICAgIDEsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTAsXG4gICAgICAyMjIsXG4gICAgICA2NixcbiAgICAgIDMyLFxuICAgICAgNDYsXG4gICAgICA0OSxcbiAgICAgIDkzLFxuICAgICAgMTAxLFxuICAgICAgMTI2LFxuICAgICAgMjUsXG4gICAgICAxMTYsXG4gICAgICA3MCxcbiAgICAgIDE0NCxcbiAgICAgIDE0MixcbiAgICAgIDEwOSxcbiAgICAgIDIxOSxcbiAgICAgIDE0NixcbiAgICAgIDEzMixcbiAgICAgIDExMCxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZUEhXVDdHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNObjYrZFVDRUtTQmpNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiLy9qaXgvcVZiSWNvK0EvMjMvVjRYdW05cUdHbGRGZWtDb0NWT1NlV0N1SWpRcVFQdHYwRWRKZEpiTWFSUHNKc3hxMWZERlJHbERKU1FaK2VHdnJmQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaGQ2cWtmYU5HbktHQmx4bEtsV3hOQjdzN2tYSWNON0hZaWh2U0ltUHVXVWF3bXp3NFVrMHVhVFVrTHF0REhINnhEZVAyUDg0WHMramw5R2FLbXFBZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTAyNzI0MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
