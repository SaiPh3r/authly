import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import {User} from "@/models/userModels"


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 465,
    secure: true, 
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });


  async function main(email: string,emailType: string,userId: any) {

    if(emailType==="verify"){
      const hashedToken = await bcrypt.hash(userId.toString(), 10);
      await User.findByIdAndUpdate(userId,{
        verifyToken:hashedToken,
        verifyTokenExpiry:Date.now() + 3600000
      })
    } else if(emailType==="resetPassword"){
      const hashPassToken = await bcrypt.hash(userId.toString(), 10);
      await User.findByIdAndUpdate(userId,{
        forgotPasswordToken:hashPassToken,
        forgotPasswordTokenExpiry:Date.now() + 3600000
        
      })
    }
    
    const info = await transporter.sendMail({
      from: userId,
      to: email,
      subject: emailType==="verify"?"verify":"Reset Password", 
      html: "<b>Hello world?</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    
  }
  
  main("vishal@gmail.ai", "verify", "123abc").catch(console.error);
  
  export { main };