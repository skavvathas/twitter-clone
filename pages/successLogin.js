import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function successLogin(){
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
          router.push('/home');
        }, 5000);
    
        return () => clearTimeout(timer);
      }, [router]);

    return(
        <div>
            <h1>Well done!!!</h1>
            <h1>Successfull Log In!!!</h1>
        </div>
    );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/getuser`);
  const data = await res.json()
  console.log("Epppp mlkesss");
  console.log(data);
  // Pass data to the page via props
  return { props: { data } }
}