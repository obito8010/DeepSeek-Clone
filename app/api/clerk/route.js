import {webhook} from "svix";
import connection from "@/config/db";
import  User from "@/models/User";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req){
    const wh = new webhook(process.env.SIGNING_SECRET)
    const headerpayload = await headers()
    const svixHeaders = {
        "svix-id": headerpayload.get("svix-id"),
        "svix-signature": headerpayload.get("svix-signature"),
    };
    // get the payload

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const {data, type} = wh.verify(body, svoxHeaders)

    //prepare user data to be saved in the database

    const userData = {
        _id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image:data.image_url,
    };
    await connectionDB();

    switch(type){
        case 'user.created':
            await User.create(userData)
            break;
        case 'user.updated':
            await User.findByIdAndUpdate(data.id, userData)
            break;
        case 'user.deleted':
            await User.findByIdAndDelete(data.id)
            break;
        default:
            break;
    }
    return NextRequest.json({message:"Event Recived"});
}