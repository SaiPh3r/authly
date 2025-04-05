import nodemailer from "nodemailer";
//configure mail for usage..

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 465,
    secure: true, 
    auth: {
      user: "maddison53@ethereal.email",
      pass: "jn7jnAPss4f63QBp6D",
    },
  });


  async function main(email: string,emailType: string,userId: string) {
    
    const info = await transporter.sendMail({
      from: 'sai@gmail.ai', 
      to: email,
      subject: emailType==="verify"?"verify":"Reset Password", 
      html: "<b>Hello world?</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    
  }
  
  main("vishal@gmail.ai", "verify", "123abc").catch(console.error);