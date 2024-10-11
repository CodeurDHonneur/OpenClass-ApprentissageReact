import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css'
import CareScale from "./CareScale";
import PlantItem from "./PlantItem";

const categorieUnique = [];

const filterCategorie = (param) => {
    param = plantList.forEach(item => {
        if (!param.includes(item.category)) param.push(item.category);
    })
}

function ShoppingList() {
    filterCategorie(categorieUnique);

    return (
            <div>
                <ul>
                    {categorieUnique.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className='lmj-plant-list'>
                    {plantList.map(({ id, cover, name, water, light }) => (
                        <PlantItem
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                        />
                    ))}
                </ul>
            </div>
       
    )
}

export default ShoppingList;