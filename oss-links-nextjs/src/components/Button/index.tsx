import React from "react";

export default function Button(props: {text: string}){
    return (
        <div className="p-6">{props.text}</div>
    );
}