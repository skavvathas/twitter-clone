import React from "react";
import { useRouter } from 'next/router';

export const server = 'http://localhost:3000';

/*export async function getServerSideProps(context){
    const { user } = context.query;

    return{
        props:{
            user: JSON.parse(user),
        }
    }
}
function Home({user}) {
    return(
        <div>
            <h1>Welcome {user.username} {user.firstName}</h1>
        </div>
    );
}

export default Home;*/

function Home({data}) {
    console.log(data);
    console.log(data.firstName)
  
    return (
      <div>
        <h1>Welcome to the Home Page</h1>
        <h1>{data.firstName}</h1>
      </div>
    );
}


  
  // This gets called on every request
export async function getServerSideProps() {
// Fetch data from external API
    const res = await fetch(`${server}/api/getuser`);
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
  
export default Home;