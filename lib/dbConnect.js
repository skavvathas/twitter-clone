// /lib/dbConnect.js
import mongoose from 'mongoose'

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/


/*const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}*/

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
/*let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}*/

/*async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}*/

async function dbConnect(){
  return mongoose.connect("mongodb+srv://skavvathas:01052001sk@cluster0.9dsorio.mongodb.net/twitterClone", { useNewUrlParser: true });
}



//mongoose.connect("mongodb+srv://skavvathas:01052001sk@cluster0.9dsorio.mongodb.net/todolistDB", { useNewUrlParser: true });

export default dbConnect