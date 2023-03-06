import React from "react";
import {useRouter} from "next/router";

// To tell how many HTML pages must Next.js generate based on the users in the database.
// If we have N users, Next.js must generate N pages.
export async function getStaticPaths() {
    // take all the users that exist in the database
    const res = await fetch("http://localhost:3000/api/allusers");
    const users = await res.json();

    //console.log(users)

    // map all the users in the database
    const paths = users.map(user => {
        return{
            //params: { id: user.id}
            params: { username: user.username}
        }
    })

    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
}
  
  // `getStaticPaths` requires using `getStaticProps`
  // we run this function N times. N => the users in the database.
export async function getStaticProps(context) {
    const username = context.params.username;
    const res = await fetch("http://localhost:3000/api/" + username);
    const data = await res.json();

    console.log("The res -> " + res);
    console.log("The user -> " + data.username);

    return {
      // Passed to the page component as props
      props: { user: data },
    }
  }

export default function Post({user}){
    
    console.log("Hiiiiii i am the user" + user);

    return(
        <div>
            <h1>{user.username}</h1>
            <h1>{user.firstName}</h1>
            <h1>{user.lastName}</h1>
        </div>
    );
}