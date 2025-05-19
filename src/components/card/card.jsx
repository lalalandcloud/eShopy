import './card.css'
import fleur1 from '../../assets/img/5._Bouquet_d_exception_-_Printemps_-_Colore_-_Passion_1024x1024.jpg'
import fleur2 from '../../assets/img/8401-xl@2x.jpg'
import fleur3 from '../../assets/img/meadow.jpg'


function Card({cardImg, name, price, stock, onBuy, argent}){
    const images = { 
        prod1: fleur1,
        prod2: fleur2,
        prod3: fleur3
    }    

    return(
        <div id='divGloCard' className={stock === 1 ? 'limite' : stock === 0 ? 'out': 'full'}>
            <div id='divCardImg'>
                <img src={images[name]} alt="" />
            </div>
            <div id='divCardInfos'>
                <div className='divCardName'>
                    <h3>{name}</h3>
                </div>
                <div className='divCardPrice'>
                    <p>Prix: {price} €</p>
                </div>
                <div className='divCardStock'>
                    <p>Stock: {stock} pcs </p>
                </div>
            </div>
            <div id='divCardBtn'>
                <button onClick={onBuy} disabled={stock === 0 || argent < price}>
                    {stock===0 ? 'Article non disponible' : stock===1? 'Acheter le dernier' : 'Acheter'}
                </button>
            </div>
        </div>
    )
}

export default Card;