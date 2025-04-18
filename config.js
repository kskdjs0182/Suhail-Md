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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_51_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgsXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXWkgvc3k4NW5iaHVZeHVvczRxUWVOOURSdHBkYVYzUVo5a2xLd25hcDlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFdUtLbFBxWVI4ZWk1Y0ZqYXRHLVF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjViMDRjOTcxLWU1NTAtNDZmYS05YjVkLTQ1OGY1ODhkZGY5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgNzIsXG4gICAgICA3OCxcbiAgICAgIDY1LFxuICAgICAgNTksXG4gICAgICA4MyxcbiAgICAgIDExOSxcbiAgICAgIDE3MSxcbiAgICAgIDExMCxcbiAgICAgIDE3MyxcbiAgICAgIDI0LFxuICAgICAgMjIzLFxuICAgICAgMzAsXG4gICAgICA0NSxcbiAgICAgIDQyLFxuICAgICAgODAsXG4gICAgICAyMDIsXG4gICAgICA5NyxcbiAgICAgIDEsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTExLFxuICAgICAgMTU5LFxuICAgICAgOTEsXG4gICAgICAyMzIsXG4gICAgICAxMzUsXG4gICAgICAxNjEsXG4gICAgICAwLFxuICAgICAgMTg1LFxuICAgICAgOTEsXG4gICAgICAxNzAsXG4gICAgICAyMTYsXG4gICAgICAyMjIsXG4gICAgICAyMTksXG4gICAgICAzLFxuICAgICAgMTMxLFxuICAgICAgMTYwLFxuICAgICAgMTg0LFxuICAgICAgMjAzLFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzdMSzlNWEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4MzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm42K2RVQ0VQR29qOEFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpPOHJORHVMNWFINmhEdE9sbU1RbHFNZkg2T0N0aXg5TnE5RlQrdkt4aFlQNzg5WmVuT1c3RGQ2cDFCaU95UDArRDB6NWVLMERvOHlKa1FIeGFaaUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkMvRTZSSUdPRXJLWmpVeStkK3VCaVBKb3BIa244VkhNVTYzUEM1UFVVaUxDRXVOM0Q1UFZ4bjNPelBmYnRSZWdPTERJSUFLbEw2RnhGb0FkNUszRGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4MzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDUwODE1MDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKTkxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpOTC5qc29uIjogIntcImtleURhdGFcIjpcIlJBdUJPeURYMjgyM2d0Z1UzMWlIWmJRQzFkRWRTdGVpcWo5dThUS3labzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI2OTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
