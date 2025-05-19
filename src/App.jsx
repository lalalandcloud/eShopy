import './App.css'
import Card from './components/card/card'
import json from '../data.json'
import { useState } from 'react'
import Cart from './components/cart/cart'

function App() {
  const [argent, setArgent] = useState(15)
  const [cart, setCart] = useState ([])
  const [select, setSelect] = useState(null)
  const [stockList, setStockList] = useState(json.map (item => Number(item.stock)))
  const [nomProduit, setNomProduit] = useState(json.map (item => (item.name)))
  const [panier, setPanier] = useState({
    "prod1" : 0,
    "prod2" : 0,
    "prod3" : 0
})

  const rendre = (index) => {
    
  }

  
  const handleBuy = (index) => {
    const price = parseFloat(json[index].price.trim());

    if (stockList[index] > 0 && argent >= price){
      setStockList(prev => {
        const newStock = [...prev]
        newStock[index] -=1
        return newStock
      });
      setArgent(prev => prev - price)
      setPanier(prev => ({
        ...prev,
        [json[index].name] : prev[json[index].name] +1
      }))
    }
  }

  // const incrementation = () => {
  //   if (stock > 0 && argent > price){
  //     setArgent (prev => prev - {price})
  //     setPanier.push(<div className='divGloCard'></div>)

  //   }
  // }
  // const handleC = (name) => {
  //   console.log(panier);
  //   incrementation()
  //   console.log(panier);
    
  // }

  return (
    <>
      <div id='divAppCards'>
        {json.map((item, index) => (
            <Card
            // onAdd={() => addToCart(item)}
              key={index}
              name = {item.name}
              price = {item.price}
              stock = {stockList[index]}
              onBuy={() => handleBuy(index)}
              argent={argent}
            />
        ))}
      </div>

      <div>
          <Cart
            argent={argent}
            cb={panier}
            name={nomProduit}
          />
      </div>

    </>
  )
}

export default App
