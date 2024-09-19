
import { useState } from 'react'
import './App.css'

function App(){

  
  const predictions = [
    "Скоро встанешь... с дивана.",
    "Код заработает с первого раза. Или нет.",
    "Тебе светит отпуск... через 10 лет.",
    "Сегодня твой кофе будет особенно горьким.",
    "Wi-Fi внезапно улучшится на секунду.",
    "Жди внезапного желания ничего не делать.",
    "Удача улыбается тебе... но с сарказмом.",
    "Сегодня ты точно забудешь, зачем открыл вкладку.",
    "Завтра пятница! Но не сегодня.",
    "Чувствуй себя круто, даже если никто не видит.",
    "Грядут великие дела... но не с тобой.",
    "Ты уже почти гений... почти.",
    "Сегодня удачный день для ничего.",
    "Скоро ты найдешь... потерянный носок.",
    "Не забудь поесть, пока код компилируется.",
    "Твоя удача — это баг, который стал фичей.","Да","Нет"
  ];
const [prediction, setPrediction] = useState(predictions[Math.floor(Math.random()*predictions.length)])
  return (
   <div className='r'>
    <img  src="./shar.PNG" alt="" />

  <div className='text'onClick={()=> setPrediction(predictions[Math.floor(Math.random()*predictions.length)]) }>{prediction}</div>
   </div>

  )
}

export default App
