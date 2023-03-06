import React from "react";
import Link from "next/link";
import Button from "./components/Button";


export default function Home() {
    return ( 
    <div className="flex justify-center h-screen bg-cyan-100 ">
        <div className="container mt-28 rounded-md shadow-2xl object-center bg-rose-50 h-[30rem] w-[28rem] border-zinc-700 border-2 border-solid">
            <h1 className="text-5xl mx-16 mt-6 font-semibold font-mono"> Get Started </h1>

            <Link href="/login">
                <Button name="Log In" css="btn bg-cyan-300 mt-20 mx-auto hover:bg-cyan-400 block"/>
            </Link>

            <Link href="/register">
                <Button name="Register" css="btn bg-cyan-300 mt-12 mx-auto hover:bg-cyan-400 block"/>
            </Link>
        </div>
        <svg class="animate-bounce w-6 h-6"></svg>
    </div>
    ); 
}