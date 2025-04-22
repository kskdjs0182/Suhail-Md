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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_50_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAzOSxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICAwLFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXhYWG4wTnF3QUlQTm1kT3hvTkhzL0ROMjJCNjNsdnFvOHpjY2t4cmtWcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWsyT0NEeC1Rdi1YajhZbUpkX2ZWd1wiLFxuICBcInBob25lSWRcIjogXCJkOTM4YTdhYy00YTZmLTRlNTQtYjMwYS05YzI0MjcxZTViYmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgNDYsXG4gICAgICA0NixcbiAgICAgIDI0MCxcbiAgICAgIDcyLFxuICAgICAgMTk1LFxuICAgICAgMTMwLFxuICAgICAgNTksXG4gICAgICAxNzEsXG4gICAgICAxOTEsXG4gICAgICAyNCxcbiAgICAgIDE3NCxcbiAgICAgIDIxOCxcbiAgICAgIDEwOSxcbiAgICAgIDQzLFxuICAgICAgMjI0LFxuICAgICAgMTc1LFxuICAgICAgMjI3LFxuICAgICAgNDQsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMyLFxuICAgICAgMTA2LFxuICAgICAgMjM5LFxuICAgICAgMjE0LFxuICAgICAgMTgsXG4gICAgICA5MixcbiAgICAgIDIzOSxcbiAgICAgIDIwNSxcbiAgICAgIDU0LFxuICAgICAgMTgsXG4gICAgICAyMDgsXG4gICAgICAzMixcbiAgICAgIDIzNyxcbiAgICAgIDE0MyxcbiAgICAgIDk4LFxuICAgICAgNyxcbiAgICAgIDIxNCxcbiAgICAgIDg2LFxuICAgICAgNzksXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUFGTkRDTlRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NDZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1A2K2RVQ0VLblpuc0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNoUERhTXh6bUJLSU40aW1vQmU0amo0ajFCUURQNGV6ZmtHaWZKUW5kMThDZUsvVC9uK004cFFmQ3RqVXVFajlWNVBuUXd2b3ByVlZIRVE3aDUwckFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjh5KzlCYW5ZemRBcUZyTEMvYWI1Mm5pa2I1blNHN1hWaU5GQ3lhS0xZamVHbllDcy9JVFcvSDloLzVYK2l4c0E4K3Y3Q29FNEwydUhXMTNLRjEzTGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUzMzM0MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVC5qc29uIjogIntcImtleURhdGFcIjpcInBGaUhlZ0NMSkpSTWIzZGFKL0YvTE1XV05reVM1VWN6MkU4MERBcDByZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTcyODIxNDg4XCJ9Igp9"  // PUT your SESSION_ID 


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
