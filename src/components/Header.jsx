import React, { useState } from "react";
import Cart from "./Cart";


export default function Header(){
    let [title, setTitle] = useState('La maison jungle');

    return (
        <React.Fragment>
            <header>
                <h1>{setTitle.toUpperCase}</h1>
            </header>
            <Cart />
        </React.Fragment>
    );
}