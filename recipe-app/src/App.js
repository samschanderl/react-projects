import { useState } from 'react'
import './App.css'

const cardImages = [
  { "src": "/img/bow.jpg"},
  { "src": "/img/crown.jpg"},
  { "src": "/img/diamond.jpg"},
  { "src": "/img/key.jpg"},
  { "src": "/img/money.jpg"},
  { "src": "/img/potion.jpg"},
  { "src": "/img/chest.jpg"},
  { "src": "/img/sword.jpg"}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState([)
]
  // shuffle cards
  const shuffleCards = () => {
    // create a new array with double the cards using spread syntax
    const shuffledCards = [...cardImages, ...cardImages]
      // sort cards randomly
      .sort( () => Math.random() - 0.5)
      // take all card properties plus random id
      .map( (card) => ({...card, id: Math.random()})
    )
    setCards(shuffledCards)
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}

export default App