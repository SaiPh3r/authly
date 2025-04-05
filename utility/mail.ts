import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import {User} from "@/models/userModels"


//using mailtrap replaced transporter
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "34c1ec936e9602",
    pass: "3966454366a55d"
  }
});


  async function main(email: string,emailType: string,userId: any) {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    const hashPassToken = await bcrypt.hash(userId.toString(), 10);
    if(emailType==="verify"){
      await User.findByIdAndUpdate(userId,{
        verifyToken:hashedToken,
        verifyTokenExpiry:Date.now() + 3600000
      })
    } else if(emailType==="resetPassword"){
      await User.findByIdAndUpdate(userId,{
        forgotPasswordToken:hashPassToken,
        forgotPasswordTokenExpiry:Date.now() + 3600000
        
      })
    }
    
    const info = await transporter.sendMail({
      from: userId,
      to: email,
      subject: emailType==="verify"?"verify":"Reset Password", 
      html: `<p>Click <a href="${process.env.DOMAIN}/verify?token=${hashedToken} ">here</a> to ${emailType === "verify" ? "verify your email" : "reset your password"}</p>`, 
    });
  
    console.log("Message sent: %s", info.messageId);
    
  }
  
  main("vishal@gmail.ai", "verify", "123abc").catch(console.error);
  
  export { main };