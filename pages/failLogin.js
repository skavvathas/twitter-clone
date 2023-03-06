import React,{useEffect} from "react";
import { useRouter } from "next/router";
import Link from "next/link";



export default function failLogin(){
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push("/login");
        }, 3000)
    }, []);

    return(
        <div>
            <h1>The user does not found</h1>            
            <p>Go back to <Link href="/login">Login page</Link></p>
        </div>
    )
}