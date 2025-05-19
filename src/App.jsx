import './App.css'
import Card from './components/card/card'
import json from '../data.json'
import { useState } from 'react'

function App() {
  const [argent, setArgent] = useState(15)
  const [cart, setCart] = useState ([])
  const [select, setSelect] = useState(null)
  const [stockList, setStockList] = useState(
    json.map (item => Number(item.stock))
  )

  const handleBuy = (index) => {
    setStockList(prev => {
      const newStock = [...prev];
      if(newStock[index] > 0){
        newStock[index] -=1;
      }
      return newStock
    })
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
            />



        ))}

      </div>
        
    </>
  )
}

export default App
