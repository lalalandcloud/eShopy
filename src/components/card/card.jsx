import './card.css'
import glace from '../../assets/img/glace.jpg'

function Card({cardImg, name, price, stock, onBuy, argent}){
    const imgG = glace


    return(
        <div id='divGloCard' className={stock === 1 ? 'limite' : stock === 0 ? 'out': 'full'}>
            <div className='divCardImg'>
                <img src={imgG} alt="" />
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
                    {stock> 0 ? 'Acheter' : 'Article non disponible'}
                </button>
            </div>
        </div>
    )
}

export default Card;