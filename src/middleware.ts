
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {


 
  if(req.nextUrl.pathname == "/"){
    return NextResponse.rewrite(new URL ("/home", req.url))
  }
  
}