import mongoose from "mongoose";

let cached = globalThis.mongoose || {conn: null, promise:null};

export default async function connectDB(){
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = (await mongoose.connect(process.env.MONGODB_URI)).then((mongoose)=>mongoose);
    }
    try{
        CacheHandler.conn = await cached.promise;
    }catch(errpr){
        console.error("Error connecting to mongodb:", error);
    }
    return cached.conn
}