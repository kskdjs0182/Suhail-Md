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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_20_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgzLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNixcbiAgICAgICAgMjA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTWTFxbEM3MTd0bU1WQ3p5NEZ5M3dpb1JlZFg3QnBMNURqUlI3T1FEcjBvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2MVdtbnFOTlIwQ1VwM21xMnc1MDBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxMDk3YTIxLWM2ZjktNGZjNi04YmRkLWFlMTA5YjljY2E2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDEyNyxcbiAgICAgIDE1NyxcbiAgICAgIDEyLFxuICAgICAgMzEsXG4gICAgICAyMzgsXG4gICAgICAyMjEsXG4gICAgICAyNTAsXG4gICAgICAyMzEsXG4gICAgICA4MSxcbiAgICAgIDIxOCxcbiAgICAgIDEwMyxcbiAgICAgIDE2LFxuICAgICAgMTQyLFxuICAgICAgMTM1LFxuICAgICAgMzAsXG4gICAgICAyMDksXG4gICAgICA0MyxcbiAgICAgIDE1NCxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxODQsXG4gICAgICAwLFxuICAgICAgNDUsXG4gICAgICAzMSxcbiAgICAgIDEwOSxcbiAgICAgIDc1LFxuICAgICAgMTEsXG4gICAgICAyNDQsXG4gICAgICA0LFxuICAgICAgMTkwLFxuICAgICAgOTMsXG4gICAgICAzNCxcbiAgICAgIDQzLFxuICAgICAgMTgzLFxuICAgICAgNTYsXG4gICAgICA5MixcbiAgICAgIDQ3LFxuICAgICAgMjU0LFxuICAgICAgMjQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1YM0gzQjU1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05qNitkVUNFTUQ2aDhBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0TVBpUy9GbnVEenpXcm9sNU85b3dpc0dZRmxvM2lWUkIyYWxiVENKZDBIdG45UG9MYlFjSWVQWVVrNkVVblBzdkhHcEI4T1dhd2UyRFRTZy81YWtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPNEo5YlJDMC9TVTd1NXZmRU5OWGs3dld0UW1UWnRoN1QvaUxRUjVNbDQ0ZXJMTXR5RTk0dElyVkFobXVHWjZ2Qk1rcXJQbE01Q0tQNWk3TUY3TzRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTYwODM4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk5MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTkwuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
