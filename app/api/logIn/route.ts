import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connect()


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
        const{email,password} = reqBody

        const user = await User.findOne({ email: email });
        if(!user){
            return NextResponse.json({
                error:"User not found"},
                {status:400})
        }
        console.log(user)
        const comparedPassword = await bcrypt.compare(password,user.password)
        if(!comparedPassword){
            return NextResponse.json({
                error:"Invalid Password"},
                {status:400})
        }
        const tokendData = {
             id: user._id,
             username:user.userName,
             email:user.email

        }
        const jwtToken =  jwt.sign(tokendData,process.env.JWT_SECRET!,{expiresIn:"1d"})

        const response  = NextResponse.json({
            message:"User Logged In Successfully",
            success:true,
        })
        response.cookies.set("token",jwtToken,{httpOnly:true})
        return response

        
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error:"something went wrong"},{status:500})
        
    }
}