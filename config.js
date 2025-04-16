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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICA5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpvdnhsQVBlMXhmVkhVN01uRmYrMTE0Zm9QR1kyQ1RWTk4wOEp6WTFuR2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk93WUJpYlRnU0gtd0hZa3F4a2NmeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzQ1NzhmMGUtODljZi00MmM3LTlmZWEtYjhlNWFiNjAyZmQwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDIyNixcbiAgICAgIDE0MCxcbiAgICAgIDQsXG4gICAgICAzMyxcbiAgICAgIDEyOSxcbiAgICAgIDIxMSxcbiAgICAgIDE4MyxcbiAgICAgIDExMyxcbiAgICAgIDU0LFxuICAgICAgMTkwLFxuICAgICAgMTQwLFxuICAgICAgMjMwLFxuICAgICAgMTU4LFxuICAgICAgMTcxLFxuICAgICAgNDQsXG4gICAgICAxNDAsXG4gICAgICAyNDMsXG4gICAgICAyMDAsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDk1LFxuICAgICAgNCxcbiAgICAgIDE5LFxuICAgICAgMTMwLFxuICAgICAgNDIsXG4gICAgICAyMTEsXG4gICAgICAxNDYsXG4gICAgICAxMzksXG4gICAgICAxMzgsXG4gICAgICAyMTQsXG4gICAgICA2LFxuICAgICAgNTAsXG4gICAgICAxMDMsXG4gICAgICAxNzIsXG4gICAgICAxMzcsXG4gICAgICAxNTksXG4gICAgICA0NyxcbiAgICAgIDIwNyxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks5NEwxSjJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05INitkVUNFSkdtLzc4R0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkVWthOG8rTFdZYlNHNWNCcWZxMHpCcUcxeS9XOFR1QkJ4ME9QdVYwMnJUMHV5N0d5OHVjblNyMkVPaWMzSURHQ1I3WU9mdDlFbFhwUEIwVWtyRzVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxTU5YNkJNMVhManNGY0k2TVlBeUJIS1dQeVBCNVhlS0xLdGp3WU1qd01xQS85MVZsMC85L2VaYWl4bHRSSmJUNUxIY1ozRlFUTzBRRTd6eHIxcXZDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0ODE4OTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk5MXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSQXVCT3lEWDI4MjNndGdVMzFpSFpiUUMxZEVkU3RlaXFqOXU4VEt5Wm8wPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
