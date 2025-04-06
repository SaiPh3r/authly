import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest){
    try {
        const response =  NextResponse.json({
            message:"User Logged Out Successfully",
            success:true,
            });

            response.cookies.set("token","",{httpOnly:true, expires: new Date(0),})
            return response


    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error:"something went wrong"},{status:500})
        
    }

    
    }