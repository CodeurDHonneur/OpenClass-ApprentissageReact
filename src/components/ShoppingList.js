import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css'

const categorieUnique = [];

const filterCategorie = (param) => {
    param = plantList.forEach(item => {
        if (!param.includes(item.category)) param.push(item.category);
    })
}

function ShoppingList() {
    filterCategorie(categorieUnique);

    return (
        <>
            <div>
                <h2>Liste des différentes catégories</h2>
                <ul>
                    {categorieUnique.map((categorie, index) => {
                        return <li key={`${categorie}-${index}`}>{categorie}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Liste de plantes</h2>
                <ul className='lmj-plant-list'>
                    {plantList.map((plant, index) => {
                        return <li key={`${plant.name}-${index}`} className='lmj-plant-item'>
                            {plant.name}
                            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                            {plant.isBestSale && <span>🔥</span>}
                            </li>
                    })}

                </ul>
            </div>

        </>
    )
}

export default ShoppingList;