import dbConnect from '@/lib/dbConnect';
import User from '../../models/User';
import findUser from '@/lib/findUser';

export default async function allusers(req, res){
    await dbConnect();
    
    // all the users inside of the database are printed out
    res.json(await User.find().exec());
    
}