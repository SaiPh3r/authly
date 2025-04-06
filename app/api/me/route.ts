import { NextRequest,NextResponse } from "next/server";
import {connect} from "@/db/dbConfig"
import {User} from "@/models/userModels"
import { getData } from "@/utility/getDataFromToken";

connect()

export async function POST(request:NextRequest){
    try {
        const userId = await getData(request);
        const user = await User.findOne({_id: userId }).select('-password')
    
        if(!user){
            return NextResponse.json({
                error:"User not found"},
            {status:400})
        }
    
        return NextResponse.json({
            user,
            success:true,
        })
        
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error:"something went wrong"},{status:500})
    }


}