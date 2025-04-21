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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJQMVp6aU1QNDV5aDArTHZsQVd2SVRGeVZtakd2M2Zmc2dwUGpPc1pTOW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVyWHppLVlpUjZtUmVSUVh5alBIUVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTA2MjgwMGYtOTMxZC00NDY2LWIwZWUtYjQwZDIyYWE4ZDFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDIzNyxcbiAgICAgIDE2NyxcbiAgICAgIDc5LFxuICAgICAgMTEyLFxuICAgICAgNjYsXG4gICAgICA5OCxcbiAgICAgIDczLFxuICAgICAgMTE1LFxuICAgICAgMjMxLFxuICAgICAgNDAsXG4gICAgICAzNyxcbiAgICAgIDQ5LFxuICAgICAgMzYsXG4gICAgICA0MCxcbiAgICAgIDEwNCxcbiAgICAgIDE0MSxcbiAgICAgIDEyMCxcbiAgICAgIDEzNyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMyxcbiAgICAgIDIxOCxcbiAgICAgIDQsXG4gICAgICAyMjQsXG4gICAgICA0NSxcbiAgICAgIDE5MSxcbiAgICAgIDE5MyxcbiAgICAgIDIwMCxcbiAgICAgIDE2NixcbiAgICAgIDU2LFxuICAgICAgMTI0LFxuICAgICAgMTg5LFxuICAgICAgMTcyLFxuICAgICAgMjE1LFxuICAgICAgNjYsXG4gICAgICAxNzUsXG4gICAgICAxOTEsXG4gICAgICAxNzQsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVDE1RlZFSENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NDNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0Q2K2RVQ0VPdmJtY0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1PQzdjZWVySUtDVzNONmpXTG1BdUJFT3VROVkwczdpMThYYmd4aUljSzVmOVJIaElYcE9hR3BETkllQzYwaStuU3VKRW44Y1RHUVRKUHEwWTZtd0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkh4bE1DSTBaVkgwaHFzR2txOWdjTmVLM3UxWU51YjRpSDNXWk5FNndMT3V0WDQrZlhOeGYybVlWNXJYTnUrU3V5V01FR1c3ajRZb0l0NTNmamhSb0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUyNTE4MjMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVC5qc29uIjogIntcImtleURhdGFcIjpcInBGaUhlZ0NMSkpSTWIzZGFKL0YvTE1XV05reVM1VWN6MkU4MERBcDByZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTcyODIxNDg4XCJ9Igp9"  // PUT your SESSION_ID 


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
