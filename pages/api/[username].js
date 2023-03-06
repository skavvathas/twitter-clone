import React from "react";
import findUser from "@/lib/findUser";
import User from "@/models/User";

export default async function handler(req, res) {
    //here username 
    const {username} = req.query;
    

    //console.log(username)
    //res.end(`Post: ${username}`);
    const foundUser = await User.findOne({username: username});

    if (!foundUser) {
        // if no user is found, return an error or a default value
        res.status(404).send('User not found');
        return;
    }

    res.status(200).json({ foundUser });

}