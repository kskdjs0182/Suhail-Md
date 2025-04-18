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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_25_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA3MixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTcwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTczLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY0LFxuICAgICAgICA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFLNU0wTG50NkpUTEUzbmNQcUQ4Njk2blVsRVhzT2JiMEtBRWZ4ek5LdGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1JM1lVUHo5UzNLUHdyMFA0LWUtUWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDE0YTAwMGUtZjk5Yy00ZTFjLTk2OGEtMmU2YjcwNTI3N2QwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTUwLFxuICAgICAgMjE1LFxuICAgICAgMTI1LFxuICAgICAgMTA3LFxuICAgICAgMzcsXG4gICAgICAyNDMsXG4gICAgICAyNDQsXG4gICAgICAyMjQsXG4gICAgICAxOTEsXG4gICAgICAxMDcsXG4gICAgICAyMDIsXG4gICAgICA5LFxuICAgICAgMjA1LFxuICAgICAgMTg3LFxuICAgICAgMTk2LFxuICAgICAgMjA0LFxuICAgICAgMTA1LFxuICAgICAgOTEsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgMTgxLFxuICAgICAgMTEwLFxuICAgICAgMTQwLFxuICAgICAgMTEzLFxuICAgICAgMzcsXG4gICAgICA4NixcbiAgICAgIDE2MSxcbiAgICAgIDE0NSxcbiAgICAgIDkzLFxuICAgICAgMjYsXG4gICAgICA1MCxcbiAgICAgIDIwMCxcbiAgICAgIDE1MCxcbiAgICAgIDc5LFxuICAgICAgMjQ4LFxuICAgICAgMTI3LFxuICAgICAgMTg4LFxuICAgICAgMixcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRMRUpLQVdaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05iNitkVUNFUERUaHNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkdVN6NDZ3a0c0M01GblNRQzd5S1AvWmxSMnpCRmFnLzJPMWRObHpLcHJvamxSTWZieFJ0UEM0NVdSRjZZcWpBVXRVdnZQb295cHg1TXVYOWJQVjJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpc0txYjJRSGZadzloQmppc3R0WUh4Q3JHT3VNWHlNbDdRekZLNkx5UVAvSmliYmVlUHRxSXRjRTlSNE1LQXBkSzhxU25oK1dUbFdOZHlEY0V5Z0FoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTM5NTA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk5MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSQXVCT3lEWDI4MjNndGdVMzFpSFpiUUMxZEVkU3RlaXFqOXU4VEt5Wm8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
