import './card.css'
import fleur1 from '../../assets/img/81705.jpg'
import fleur2 from '../../assets/img/IMG_8714.jpg'
import fleur3 from '../../assets/img/20210128052736_file_60124b48b207d_60124c20af9fd..avif'


function Card({cardImg, name, price, stock, onBuy, argent}){
    const images = { 
        prod1: fleur1,
        prod2: fleur2,
        prod3: fleur3
    }    

    return(
        <div id='divGloCard' className={stock === 1 ? 'limite' : stock === 0 ? 'out': 'full'}>
            <div className='divCardImg'>
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