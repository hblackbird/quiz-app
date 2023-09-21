import React, { useState } from 'react'
import './Home.css';
import Dropdown from '../../components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const zorluk = ["easy","medium","hard"];
  const[zorlukDegistir, setZorlukDegistir] = useState(["easy"])
  const soruSayisi = 10;
  const navigate = useNavigate();
  const quizBaslat = () =>{
    navigate(`/quiz/${zorlukDegistir}/${soruSayisi}`)
  }
  return (
    <div className='home'>
      <div className='home-container'>
        <img src="https://i.hizliresim.com/o5fbcal.png" alt="" />
        <Dropdown zorluk={zorluk} setZorlukDegistir={setZorlukDegistir} />
        <button onClick={quizBaslat}>Quize Başla</button>
      </div>
    </div>
  )
}

export default Home