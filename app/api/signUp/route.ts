import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import bcrypt from "bcryptjs";

connect()

export default async function POST(request:NextRequest){
    try {
        const resBody = await request.json();
        const {userName,email,password} = resBody
        console.log(resBody)
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({
                error:"User already exists"},
                {status:400})
        } else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);
            const newUser = new User({
                userName,
                email,
                password:hashedPassword,
            })
            const savedUser = await newUser.save();
            return NextResponse.json({
                message:"User Created Successfully",
                success:true,
                savedUser
            })

        }
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({error:"Something went wrong"},{status:500})
        
    }

    

    

}