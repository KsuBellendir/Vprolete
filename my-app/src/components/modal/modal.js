import React, {useState} from 'react';
import './modal.css';
import axios from 'axios';

const Modal = ({active, setActive}) => {
  const [news, setNews] = useState();
  const getNews = () => {
    axios.get('http://localhost:8080/vprolete/article').then(res =>{
        setNews(res.data);
    }).catch(error => {
        console.error(error)
    })
}

const postNews = (data) => {
    axios.post('http://localhost:8080/vprolete/article', {data})
    .then(res =>{
    getNews()
    }).catch(error => {
    console.error(error)
    }); 
} 
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation() }>
        <input className='titel-input'></input>
        <input className='input-text'></input>
        <button onClick={(data) => postNews(data)}>отправить</button>
      </div>
    </div>
  )
}

export default Modal;
