import jwt from "jsonwebtoken"
import { NextRequest,NextResponse } from "next/server"


export const getData = (request:NextRequest)=>{
    const token = request.cookies.get("token")?.value || " "
    const decodeToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodeToken.id 
    

}