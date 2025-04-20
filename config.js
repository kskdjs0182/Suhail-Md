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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_33_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgODksXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDczLFxuICAgICAgICA2NCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDg2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDksXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmSkRPTHBienA3emNSV0Zib3VUdTJ1d3VYWjlLdlJBSlZJS1FadGdyWlE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0NzExNjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjk1Nzk1RkQzQ0UyNzJGMDQ5NjY0RDY5NjEzMjcyRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ1MTY2ODI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRhQUl3Q0UtVGpHN0tYQ1pEaTN6Q0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzAwNTBiYTYtOTAxOC00MTc4LWJmMWUtODMyMDJlMTdhNTM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDI1MixcbiAgICAgIDQyLFxuICAgICAgMjAyLFxuICAgICAgNjYsXG4gICAgICAxODMsXG4gICAgICAxOTQsXG4gICAgICAzMyxcbiAgICAgIDEzOCxcbiAgICAgIDEwOSxcbiAgICAgIDE0NixcbiAgICAgIDI1MSxcbiAgICAgIDQwLFxuICAgICAgMzMsXG4gICAgICAxMDUsXG4gICAgICAyMDYsXG4gICAgICAxMzcsXG4gICAgICAxODcsXG4gICAgICAxMSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDIxOCxcbiAgICAgIDEzOCxcbiAgICAgIDIwMyxcbiAgICAgIDEwNyxcbiAgICAgIDYsXG4gICAgICAxMzgsXG4gICAgICAxNCxcbiAgICAgIDIxMCxcbiAgICAgIDM4LFxuICAgICAgMjExLFxuICAgICAgMTM4LFxuICAgICAgNzYsXG4gICAgICA5MyxcbiAgICAgIDIxNCxcbiAgICAgIDE4NSxcbiAgICAgIDgsXG4gICAgICAyMixcbiAgICAgIDExNSxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKUlY4MlFQVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMzYrZFVDRU43RGxNQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHM3M0grRkZoRUk0OUpPRURGdjlZbjUrVGlPVHg3TjBqcmJiUUtYbjhvRVNRMEhjWlJvWDdiUVNORGRHUXdYSFNlYzdFY285Zzl2eXBGeFFZTmlLQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0F3UUJEaGZTN3NWK01HUzdYdE5UUm1Va1R3WW9rOGFYNHUxNzBNaDdScXZSajc4a2xjd0krdDM1d3p5TE51QVlqSDNLUmtRQzNNRjJvSzJhMjk4QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTE2NjgxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2svbVVzMVZIYkwzRWx4MUxsTG9FVU1OZEtIR0Y2N2ZFVEhaK09TRHY4RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTE2NjgyNTg4MFwifSIKfQ=="  // PUT your SESSION_ID 


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
