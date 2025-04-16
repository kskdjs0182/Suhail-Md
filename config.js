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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_08_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNixcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ2pVYTQ2NFB6eWQ0Z1UwbVI5SkJaaVl4b0VGbnI0dDJldlR3bzVIWWV0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia2NhMThVY2VRMmV3Y1dZRkpLSEFVQVwiLFxuICBcInBob25lSWRcIjogXCJjM2ExYWQwNS01MGFkLTRhYWEtYmExNi1lNTkxMGQzMDY3MzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgOTEsXG4gICAgICAxNDEsXG4gICAgICAyMTksXG4gICAgICAxNzksXG4gICAgICAxMDcsXG4gICAgICAyNSxcbiAgICAgIDE3OCxcbiAgICAgIDE3OSxcbiAgICAgIDE0NyxcbiAgICAgIDExMixcbiAgICAgIDI0MixcbiAgICAgIDE0MCxcbiAgICAgIDI5LFxuICAgICAgMTY4LFxuICAgICAgMjIzLFxuICAgICAgMTk2LFxuICAgICAgMzQsXG4gICAgICAyMjQsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAzMSxcbiAgICAgIDEwMyxcbiAgICAgIDUwLFxuICAgICAgMjUxLFxuICAgICAgNTgsXG4gICAgICA1MyxcbiAgICAgIDE0MCxcbiAgICAgIDExNyxcbiAgICAgIDIzOCxcbiAgICAgIDI0MixcbiAgICAgIDExNyxcbiAgICAgIDEzOCxcbiAgICAgIDIxOSxcbiAgICAgIDE5MCxcbiAgICAgIDEwMixcbiAgICAgIDE5NyxcbiAgICAgIDE0NixcbiAgICAgIDQwLFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXRDU5VFBUM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOSDYrZFVDRUllRy9MOEdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV1hzOCtsOUNKV1ZhUFFLRFB0dFpkQzhva0hkZlgzV2tBN1lhakw1aExZZzR6K3l1SytvNDc4ZTFIekRVQVVsaitLTG1wamlpVkM4NUNUc3ZsYWdvQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiczZzY1FJOU9qVkoxMk1tM2JIUFNtcm5PMnV3a2JGM1ltNFNtdGxSSTArRHQrWTFoL3BYV2tWcDFDM0QwRXN1L1BRSDFUSGNLMDZTNk5OZkFqei95Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDc2NTcwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpOTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSk5MLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkF1Qk95RFgyODIzZ3RnVTMxaUhaYlFDMWRFZFN0ZWlxajl1OFRLeVpvMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjY5NjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
