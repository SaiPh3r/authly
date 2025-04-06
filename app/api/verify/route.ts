import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import bcrypt from "bcryptjs";
import {main} from "@/utility/mail"

connect()

export async function POST(request:NextRequest){
   const reqBody = await request.json()
   const{hashedToken} = reqBody
   console.log(hashedToken)

   const user = await User.findOne({ verifyToken: hashedToken, verifyTokenExpiry: { $gt: Date.now() } })

   if(!user){
    return NextResponse.json({
        error:"Invalid or expired token"},
        {status:400})

   }
   console.log(user)
   user. isVerified= true
   user. verifyToken = undefined
   user.verifyTokenExpiry = undefined

   await user.save()

    
}