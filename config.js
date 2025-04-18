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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_38_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZnl2bHJKWVRIbENQeURrQ091bnJic0FteEpIT3pIcXQ3VHJhZEZONVpXWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSkVIRTJVbGtTN0dZLUw2MHk3NGVXZ1wiLFxuICBcInBob25lSWRcIjogXCI0ZDliNTg3My0wZmEzLTRmYzItOWI1ZS05MTE0ODA4MzdjMmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMzUsXG4gICAgICAxNTYsXG4gICAgICA3OSxcbiAgICAgIDIyMyxcbiAgICAgIDExOSxcbiAgICAgIDI0OCxcbiAgICAgIDIyMyxcbiAgICAgIDM5LFxuICAgICAgNjUsXG4gICAgICA5MCxcbiAgICAgIDEwMCxcbiAgICAgIDEzNixcbiAgICAgIDg2LFxuICAgICAgMTQyLFxuICAgICAgMTEwLFxuICAgICAgMjIwLFxuICAgICAgMjQ0LFxuICAgICAgNDEsXG4gICAgICA0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMTM4LFxuICAgICAgMTMzLFxuICAgICAgMTEyLFxuICAgICAgNzcsXG4gICAgICAxNTMsXG4gICAgICAxNzQsXG4gICAgICAxNzUsXG4gICAgICAyNDIsXG4gICAgICAxNDMsXG4gICAgICAyMCxcbiAgICAgIDEyLFxuICAgICAgNTgsXG4gICAgICAxLFxuICAgICAgNDksXG4gICAgICA4NSxcbiAgICAgIDEzNSxcbiAgICAgIDE5MixcbiAgICAgIDExMSxcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTlJORlZZRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDozMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOajYrZFVDRU1mSGljQUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicHg4aHNEektsREdrTXFpOXlEYmh0eElBcWpNT2U0R0hTQ080Q3dEMlVYQVJmNTUraW1iMjZVUnJaSjE2WmM0NTNXaEZrS0xyLzFaRlVnTXNYZDlqQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWxUam0rT3cvQVhwSndDRUxySjlZcWNFNnR5TVJpWG5sKytlMWRUa2taQlAvVlR2dG8yT1RaQkJ2OVlaTlFIc1E4a29TOEgyUlV4anQwS1BycTZNQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NDk4NzA4MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
