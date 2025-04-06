import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import bcrypt from "bcryptjs";
import {main} from "@/utility/mail"

connect()

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const{token} = reqBody
        console.log(token)
     
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
     
        if(!user){
         return NextResponse.json({
             error:"Invalid or expired token"},
             {status:400})
     
        }
        console.log(user)
        user.isVerified= true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
     
        await user.save()
        return NextResponse.json({
         message: "Email successfully verified",
         success: true
       })
        
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Something went wrong"},{status:500})
        
    }


    
}