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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_08_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDQzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2LFxuICAgICAgICA3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImR5dHpLN1MrT0hDbHhEQVdGcUFXNHc0amk2a2UzRU5VTGV3WEtRdG90Wkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQ3MTE2NjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMzc5OEZCOUI3NkZCODJCOEYwQTQ5QzFCMzkwNUJFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDUxOTc3MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwienpycnQtWWdReFc3WnBPOTN3SUEtQVwiLFxuICBcInBob25lSWRcIjogXCI4MjA0ZDIwNS01ODcxLTQxNzctYTZmOC02YzJjMzAwNDE3YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAyMzIsXG4gICAgICAxNixcbiAgICAgIDMwLFxuICAgICAgMTIsXG4gICAgICA2MCxcbiAgICAgIDE1MixcbiAgICAgIDI1MixcbiAgICAgIDIwMixcbiAgICAgIDE2OSxcbiAgICAgIDI1MCxcbiAgICAgIDI1MCxcbiAgICAgIDMwLFxuICAgICAgMzUsXG4gICAgICAxMzYsXG4gICAgICAyNDIsXG4gICAgICAxNTAsXG4gICAgICAxODksXG4gICAgICA4LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjQwLFxuICAgICAgMTY5LFxuICAgICAgNDEsXG4gICAgICA2OSxcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDEwNyxcbiAgICAgIDc5LFxuICAgICAgMjE4LFxuICAgICAgNTYsXG4gICAgICA3MSxcbiAgICAgIDEwOSxcbiAgICAgIDM1LFxuICAgICAgMjM4LFxuICAgICAgMTAyLFxuICAgICAgNTgsXG4gICAgICAxMjYsXG4gICAgICA3MyxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzR1A1Qzc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043NitkVUNFSmUxbHNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVTFlGRGc0bGRhbEYzd1c1K095K1c0U2hKV045ZWNIWnhURGpPbVFBNjJ3U2dNSTRLeDFCVkR2aWthVVh2OXNyeUJoUTcxVDlqREROVTRNK2tpNXBEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCb2hCUmxaSGhwejRDNHNicXIyaWVjandXVW5aTmhRRmF4d1lFMDRPMGY1THAwSnU0TEFuY3o1K3dHa0kwRmE1R25ELzFzWHRuUnZ2ZDJzS05WdTNDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1MTk3NzIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnNVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGc1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzSGJwLzBEN2NsVzZMMmtzRGxVNjJabUtCRE5FU1JyRFowdnUvTFcxMEw4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAwNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTk3NzI4NDE1XCJ9Igp9"  // PUT your SESSION_ID 


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
