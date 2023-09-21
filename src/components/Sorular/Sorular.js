import React, { useState, useEffect } from 'react'
import './Sorular.css';
import {PropagateLoader} from 'react-spinners';

const Sorular = ({sorular, puan, setPuan, kacinci, setKacinci, bittimi, setBittimi}) => {
  const [zaman, setZaman] = useState(30);
  const [loading, setLoading] = useState(true);
  const [birkere, setBirkere] = useState(0);
  const secilenSoru = (soru) =>{
    const dogrumu = soru === sorular[kacinci]?.correct_answer;
    if(dogrumu){
      setPuan(puan + 10);
    }
    setKacinci(kacinci+1);
    setZaman(30);
    if(kacinci === 10){
      setBittimi(true);
    }
  }
  useEffect(() => {
    if(kacinci === 10)setBittimi(true)

    if(birkere === 0){
      setTimeout(()=>{
        setLoading(false);
        setZaman(30);
      },2000)
      setBirkere(1);
    }
    const interval = setInterval(() => {
      setZaman(zaman-1);
      if(zaman === 0){
        setZaman(30);
        setKacinci(kacinci+1);
      }
    }, 1000);
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zaman])
  
  return (
    <div className='sorular'>
      {
        loading ? <PropagateLoader className='loading' color="#10185c" />
        :
        <>
        <div className='sorular-gerisayim'>{zaman}</div>
        <div className='sorular-title'>{kacinci+1}/10 - {sorular[kacinci]?.question}</div>
        {
        sorular[kacinci]?.answers.map((soru,i) =>(
          <button className='soru' key={i} onClick={e => secilenSoru(soru)}>{soru}</button>
        ))
        }
        </>
      }
        
    </div>
  )
}

export default Sorular