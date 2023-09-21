import React, { useState, useEffect } from 'react'
import './Quiz.css';
import { useParams } from 'react-router-dom';
import *  as api from '../../api/api';
import Sorular from '../../components/Sorular/Sorular';
import Bitis from '../../components/Bitis/Bitis';
const Quiz = () => {
  const {zorluk, sayi} = useParams();
  const [veri, setVeri] = useState([]);
  const [puan, setPuan] = useState(0);
  const [kacinci, setKacinci] = useState(0);
  const [bittimi, setBittimi] = useState(false);

  useEffect(() => {
  const getData = async()=>{
    const data = await api.api(zorluk,sayi)
    setVeri(data)
}
getData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  
  return (
    <div className='quiz'>
      {
        
       bittimi ? <Bitis puan = {puan}/> :
       <Sorular
       sorular = {veri}
       puan = {puan}
       setPuan = {setPuan}
       kacinci = {kacinci}
       setKacinci = {setKacinci}
       bittimi = {bittimi}
       setBittimi = {setBittimi}
       />
      }
      
    </div>
  )
}

export default Quiz