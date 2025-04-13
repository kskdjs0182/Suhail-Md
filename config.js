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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_48_04_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgNjEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgMTU0LFxuICAgICAgICA0NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpRWUF3MHh0UkV4TzNJMlB0bG82aDdKTkJ1Qk5VVFBsQlVGOEpXK0t2TzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBCVk9oWEVGUnM2aDViZGlqeWltRGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTczMDhhZGItZDkzMC00MjkzLWFiMjctYTlmMzJjMWFkMzc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDE4OSxcbiAgICAgIDE0MixcbiAgICAgIDc0LFxuICAgICAgNzYsXG4gICAgICAyMTYsXG4gICAgICAyMTMsXG4gICAgICAyOCxcbiAgICAgIDEwMyxcbiAgICAgIDc1LFxuICAgICAgMTA3LFxuICAgICAgMTgwLFxuICAgICAgMTM2LFxuICAgICAgMzcsXG4gICAgICAxMjQsXG4gICAgICAxMzcsXG4gICAgICA2OSxcbiAgICAgIDMxLFxuICAgICAgMTUsXG4gICAgICAxMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTkxLFxuICAgICAgMTMyLFxuICAgICAgMTM5LFxuICAgICAgMjMzLFxuICAgICAgMTYzLFxuICAgICAgMTE2LFxuICAgICAgMTUsXG4gICAgICAyNDMsXG4gICAgICAyMTQsXG4gICAgICAyMTQsXG4gICAgICAzMCxcbiAgICAgIDY4LFxuICAgICAgMjM3LFxuICAgICAgMjUxLFxuICAgICAgMTgsXG4gICAgICA4NixcbiAgICAgIDI1MyxcbiAgICAgIDkwLFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJQN01XRzhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012NitkVUNFUGprN3I4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpdEFobkRhWWtvSkRKZ3Mwc1FvZzM4UldGMkw1NzBkZkFLdlpYN1FrL3JtNExhbzhNWGY3UlVad09PaFY2Um8rREgxWHd6WWJVQUpSbERFMmFqOHZDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4R09QODJjSDJYMUkzSGhlbkRnNHdjczBZYVYxRE9mVERhb0ZZeUluQmdBcnAvSit5K3lPNTdmcHg1RzFlNm91OUlGbUJ0NWh0OXBCNXgxd1hPUUJDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0NTQ4NDc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk9EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKT0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2Q0FGeUp4VFZvS1ZQa0FRQm9zckNsR2Vpd0srelR3V0VWaUtNN1A5SlpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNjk4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDQ3NzQyMzYyN1wifSIKfQ=="  // PUT your SESSION_ID 


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
