import { useState } from "react";


export default function Description() {
    const [text, textState] = useState("Ici achetez toutes les plantes dont vous avez toujours rêvées");

    const emojis = "🤑🤑🤑";
    
    return (
        <p>{textState.slice(0, 11) + emojis}</p>
    );
}