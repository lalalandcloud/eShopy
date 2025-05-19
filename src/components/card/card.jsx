import './card.css'
import glace from '../../assets/img/glace.jpg'

function Card({cardImg, name, price, stock}){
    const imgG = glace


    return(
        <div id='divGloCard'>
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
            <div>
                <button>Acheter</button>
            </div>
        </div>
    )

}

export default Card;