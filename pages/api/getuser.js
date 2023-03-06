import dbConnect from '@/lib/dbConnect';
import User from '../../models/User';
import md5 from 'md5';
import Router from 'next/router';
import findUser from '@/lib/findUser';

export default async function getuser(req, res){
    const body = req.body;
    
    //var jsonParser = bodyParser.json();

    /*await dbConnect()

    try {
        const { username, password } = body; // from login (we have only username, password)
        console.log(username);
        console.log(password);

        User.findOne({username: username}, function(err, foundUser){
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            if(foundUser){
                if(foundUser.password === md5(password)){
                    console.log(foundUser);
                    //res.status(200).json({success:true, user: foundUser });
                    //res.status(200).json(foundUser);
                    const router = useRouter();
                    router.push({
                        pathname: "/home",
                        query: { user: JSON.stringify(foundUser) },
                    });
                    res.end();
                    //res.redirect("/successLogin");
                }   
            } else {  // if the user does not exist 
                res.status(400).json({ success: false });
            }
        });
    } catch (error) {
        res.status(400).json({ success: false })
        console.log("HEYYYYYYYYYYYYYYYYYY");
    }*/

    
    console.log(body.username);
    console.log(body.password);

    const foundUser = await findUser(body.username, body.password);

    //console.log(foundUser);

    if (!foundUser) {
        // if no user is found, return an error or a default value
        res.status(404).send('User not found');
        return;
    }

    //res.json(await findUser(body.username, body.password));
    console.log(foundUser);
    res.status(200).json({ foundUser })

    /*function sendProps(){
        Router.push({
            pathname: "/home",
            query: { user: JSON.stringify(foundUser) },
        });
    }*/

    // redirect to home page with user object as query parameter
    
    //return sendProps;
}