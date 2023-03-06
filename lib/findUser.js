import dbConnect from "./dbConnect";
import User from "../models/User";
import md5 from 'md5';


async function findUser(username, password){
    await dbConnect();

    try {
        //const { username, password } = body; // from login (we have only username, password)
        console.log(username);
        console.log(password);

        const foundUser = await User.findOne({username: username, password: md5(password)});

        return foundUser;
    } catch (error) {
        console.log("3");
        return null;
    }
}

export default findUser;