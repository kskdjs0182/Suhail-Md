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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_04_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MixcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjksXG4gICAgICAgIDMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWI4aDFyYjZRUXVQdVZQNXpReXJkRmxBZWNhYmxNQzlLMVFwMDAzSVBxQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidzVUZVd1alRSUW1hUS1FRWlxSnB1UVwiLFxuICBcInBob25lSWRcIjogXCIyNmNmN2Y4NC03YWZlLTQ3YTMtYmZiNy1mNTU1MGI2YWRlNjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyMTAsXG4gICAgICA2OSxcbiAgICAgIDIxLFxuICAgICAgOCxcbiAgICAgIDksXG4gICAgICAyNDMsXG4gICAgICAxMTMsXG4gICAgICAxOTAsXG4gICAgICAxNDYsXG4gICAgICAxMDIsXG4gICAgICA1MCxcbiAgICAgIDIwOCxcbiAgICAgIDIwLFxuICAgICAgMzYsXG4gICAgICAyNTUsXG4gICAgICA0MixcbiAgICAgIDM4LFxuICAgICAgMjMyLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAxNTgsXG4gICAgICAxMzIsXG4gICAgICA4MyxcbiAgICAgIDE0MSxcbiAgICAgIDI0NyxcbiAgICAgIDkxLFxuICAgICAgNjEsXG4gICAgICAzNixcbiAgICAgIDAsXG4gICAgICA4OCxcbiAgICAgIDIxNixcbiAgICAgIDI1MyxcbiAgICAgIDM5LFxuICAgICAgNDMsXG4gICAgICA2MCxcbiAgICAgIDUwLFxuICAgICAgMTI0LFxuICAgICAgMCxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0N1pNMTQ0WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVDYrZFVDRVA3NG9NQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicms0c05WMWs4bVdGSmE5T0gzZ0QwdXprN1FjN3VrN0luU0VvOHFKZ0llaE5QV0RROHpuNHIwME9hNjc1VTN5NmJ5eHlNdmNGTEZpVkNqeG5Vb21XREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVkZ2L09KckVwZWpkcEtnRGhTN2RrM0xPRkdjcW9mV3pmc0JTTklFb1VwWms0RTJLdDBKemFYOWJvZzNON2Z2dDVTZWo2bU5janhoYk02bHdFa0FLQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTM3MDI0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNULmpzb24iOiAie1wia2V5RGF0YVwiOlwicEZpSGVnQ0xKSlJNYjNkYUovRi9MTVdXTmt5UzVVY3oyRTgwREFwMHJnUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUxNzI4MjE0ODhcIn0iCn0="  // PUT your SESSION_ID 


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
