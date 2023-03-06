import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function successRegister(){
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
            <h1>Successfully Registration!!!</h1>
        </div>
    );
}