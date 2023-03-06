import React from "react";
import tailwindConfig from "@/tailwind.config";


export default function Button(props){
    return(
        <button className={props.css}>
            {props.name}
        </button>
    );
}