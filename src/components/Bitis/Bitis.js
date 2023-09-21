import React from 'react'
import './Bitis.css';
import { useNavigate } from 'react-router-dom';

const Bitis = ({puan}) => {
  const navigate = useNavigate();
  const basaDon = () =>{
      navigate(`/`);
  }
  return (
    <div className='bitis'>
      <h4 className='bitis-puan'>Quiz bitti puanınız: {puan}/100</h4>
      <button onClick={basaDon}>Tekrar Başla</button>
    </div>
  )
}

export default Bitis