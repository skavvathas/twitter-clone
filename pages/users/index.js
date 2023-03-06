import React from "react";
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/allusers");
    const data = await res.json();
  
    return {
      props: { users: data }
    }
  }

export default function Home({users}){
    
    console.log(users)

    return (
        <div>
        <h1>All Users</h1>
        <br></br>
        {users.map(user => (
            <Link href={'/users/' + user.id} key={user.id}>
                
                <h3>{ user.username }</h3>
            </Link>
        ))}
        </div>
    );
}