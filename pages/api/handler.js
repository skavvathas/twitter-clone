import dbConnect from '@/lib/dbConnect';
import User from '../../models/User';
import bodyParser from 'body-parser';
import md5 from 'md5';

export default async function handler(req, res) {
    const body = req.body;

    await dbConnect();

    try {
        const { firstName, lastName, email, username, password } = body; // from register.js (we have firstName, lastName, email, username, password)

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: md5(password)     // hashing password
        });
        
        User.insertMany(newUser, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully saved default items to DB.");
            }
        });

        res.redirect('/successRegister');
        //res.status(201).json({ success: true, data: newUser });

    } catch (error) {
        res.status(400).json({ success: false })
    }
}