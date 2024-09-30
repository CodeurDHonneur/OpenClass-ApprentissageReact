import { useState } from "react";

export default function Cart(){
    let panierPlante = [
        {id: 0, nom: "un monstera", prix: 8,quantite: 0},
        {id: 1, nom: "un lierre", prix: 10,quantite: 0},
        {id: 2, nom: "bouquet de fleur", prix: 15,quantite: 0},
    ];

    let [total, setTotal] = useState(0);


    return (
        <div>
            <ul>
                {panierPlante.map(plante => <li key={plante.id}>
                    `${plante.quantite}`
                </li>)}
            </ul>
            <p>Total : {total}</p>
        </div>
    );
}