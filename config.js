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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_39_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDksXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICA0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM5LFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDgwLFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInRvTDFZRG1pZEZsKzVpQWtLdkN6K29Sc1E0eDdVWi8wY2dua2xabnJBM289XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVwZ053TmRoUl9XbnBtcGpiZW9UbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmM0MjI1Y2MtZTYxZC00MGMxLWEwMTktMjAxYTAzNGZiZWRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNyxcbiAgICAgIDEyOSxcbiAgICAgIDYyLFxuICAgICAgMTAzLFxuICAgICAgMTM0LFxuICAgICAgMTUwLFxuICAgICAgMzksXG4gICAgICAxOTUsXG4gICAgICA2NixcbiAgICAgIDU1LFxuICAgICAgMTExLFxuICAgICAgMTcwLFxuICAgICAgNjQsXG4gICAgICAyNDcsXG4gICAgICAxMjAsXG4gICAgICAxMyxcbiAgICAgIDU4LFxuICAgICAgMzgsXG4gICAgICA4MixcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDE4MSxcbiAgICAgIDE5NyxcbiAgICAgIDk4LFxuICAgICAgMTY4LFxuICAgICAgMjQsXG4gICAgICAxMTEsXG4gICAgICAyMzAsXG4gICAgICAxNTEsXG4gICAgICAyMTYsXG4gICAgICA2MCxcbiAgICAgIDk1LFxuICAgICAgMjEsXG4gICAgICA3MCxcbiAgICAgIDExMixcbiAgICAgIDE3MyxcbiAgICAgIDUxLFxuICAgICAgMTQsXG4gICAgICAxMzksXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTTJWSDkzWEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NDhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1g2K2RVQ0VJMi9vOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdTRUlKbmNURXlQLzVkNEtnZ0lMOVZxNUI0UjJ4VWVheGtYNm5EYWF4bTluUnd4WWFJb2RsTXBrRXUweFVNb1NnNVlod0ZWenFUMVlHWFd2L3NrWEFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInluZ0xtY0xMSXZmNVJDVWdUbk51VmJyZ3F0ZVhFVXNCcHFVWUZCT3RndkkvNTBGV3l2WHR1NktnLzRqUUVEb3FQbWtBd2pEbXBPd3RwOGpVM05OdENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0MTE5ODQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVC5qc29uIjogIntcImtleURhdGFcIjpcInBGaUhlZ0NMSkpSTWIzZGFKL0YvTE1XV05reVM1VWN6MkU4MERBcDByZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTcyODIxNDg4XCJ9Igp9"  // PUT your SESSION_ID 


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
