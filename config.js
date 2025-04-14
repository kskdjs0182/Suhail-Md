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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_44_04_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDksXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY2LFxuICAgICAgICA4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaQWYyQ2xvU1BDTWROS1laOXd6MExjb1JVZzhYY3dEU2tRTXNIZnFGdnVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0NzExNjY4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUJEOENCQ0JCNUExMDg0QzAyRDIxNEJFRkJBMTNDNTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ0NTkxNDcyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdzTmVqU1lsUW9ta0Q0RWxiOW1nWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTJkZWY4ZGQtZTRiMS00MDlkLThlMWItZjk1NjY5NjA3YWUzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxLFxuICAgICAgMjI0LFxuICAgICAgMjU1LFxuICAgICAgMjAyLFxuICAgICAgMjE3LFxuICAgICAgMjQ4LFxuICAgICAgMTkzLFxuICAgICAgMjQ2LFxuICAgICAgMjIwLFxuICAgICAgMTMyLFxuICAgICAgMTg0LFxuICAgICAgNTIsXG4gICAgICA5NCxcbiAgICAgIDg2LFxuICAgICAgMTA2LFxuICAgICAgMjU0LFxuICAgICAgNTYsXG4gICAgICAxMTQsXG4gICAgICAyMzYsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAxLFxuICAgICAgMTU0LFxuICAgICAgMTE4LFxuICAgICAgMTYzLFxuICAgICAgMTgyLFxuICAgICAgNTQsXG4gICAgICAxMzAsXG4gICAgICA0MyxcbiAgICAgIDExMCxcbiAgICAgIDEwLFxuICAgICAgMTkwLFxuICAgICAgMTkxLFxuICAgICAgMjIxLFxuICAgICAgODAsXG4gICAgICAyMSxcbiAgICAgIDE4LFxuICAgICAgMTk2LFxuICAgICAgMTA2LFxuICAgICAgMTY2LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTJMVDE0RDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTM2K2RVQ0VPTzA4YjhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVmbmMyUVFOcHRBUngyMEM5dVlWQUhGQ2s5alpncUZZbkF5YUlOUUIwc3doYll3Qm0vWlBTdDZLUmZoalZvR0hIM1ZZOFZkNHpEUldaY2tQQnNoVUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5leHpYa2lzbnMxaUhrZHBLOE5SSTlxY2NjQXYrMXlCWDNqRDBEZXlkME5vVld4ZHFJWUM5ZU04NjR0enBMOE1xd0t5V1VmaG80WkUveFg3bHh2UGlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ1OTE0NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKT0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpPSy5qc29uIjogIntcImtleURhdGFcIjpcIkxVSjRsbUV4UlpyL08vVzZLRTJTeHc2czQyY0hWV0pMaVVNZkFMTm54d2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ0NTY3MjY3NjkxXCJ9Igp9"  // PUT your SESSION_ID 


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
