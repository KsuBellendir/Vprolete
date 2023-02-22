import React, {useState, useEffect} from "react";
import { get, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ava from './ava.jpg'
import axios from 'axios';
import './profil.css'
const SignUp = () => {
    const dataPers = {
        id: null,
        firstName: null,
        surname: null,
        age: null,
        school: null,
        username: null,
        work: null,
        music: null,
        video: null,
        myWishes: null,
        aboutMe: null
    }

    const {register, handleSubmit, formState:{errors}} = useForm({ mode: 'onBlur'});
    const [pers, setPers] = useState(dataPers);
    const [active, setActive] = useState(false);
   
    useEffect( () => {getPers()}, [] );
    
    const getPers = () => {
        axios.get('http://localhost:8080/vprolete/person/2').then(res =>{
            setPers(res.data);
        }).catch(error => {
            console.error(error)
        })
    }

    const onSubmit = (data) => {
        axios.put('http://localhost:8080/vprolete/person/2', {data})
        .then(res =>{
        getPers()
        }).catch(error => {
        console.error(error)
        }); 
} 


     const openForm = () => {
        if(active === true){
            setActive(false)
        } else setActive(true)
     }
     
    return(
 <div className="bodyform" >
       <div className="imgv">
        <img className="imgv" src={ava} alt='my photo' />
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className={active? 'container active' : 'container'}>
            <label htmlFor="firstName" className="form-row-label">Имя</label>
            <input {...register('firstName')} placeholder='Имя' className="form-row-input"/>
            <label htmlFor="surname" className="form-row-label">Фамилия</label>
            <input {...register('surname')} placeholder='Фамилия' className="form-row-input"/>
            <label htmlFor="age" className="form-row-label">Возраст</label>
            <input {...register('age')} placeholder='Возраст' className="form-row-input"/>
            <label htmlFor="school" className="form-row-label">Учеба</label>
            <input {...register('school')} placeholder='Твоя учеба' className="form-row-input"/>
            <label htmlFor="work" className="form-row-label">Работа</label>
            <input {...register('work')} placeholder='Твоя работа' className="form-row-input" />
            <label htmlFor="music" className="form-row-label">Музыка</label>
            <input {...register('music')} placeholder='Твоя любимая музыка' className="form-row-input"/>
            <label htmlFor="video" className="form-row-label">Кино</label>
            <input {...register('video')} placeholder='Твоё любимое кино' className="form-row-input"/>
            <label htmlFor="my wishes" className="form-row-label">Мечты</label>
            <input {...register('my wishes')} placeholder='Твои желания' className="form-row-input"/>
            <label htmlFor="aboutMe" className="form-row-label">О себе</label>
            <input {...register('aboutMe')} placeholder='О тебе любимом' className="form-row-input"/>
           <p><input type="submit" className="form-row-submit" /></p>
        </form>
    </div>
    <div className="stena-profil">
        <h1>Стена</h1>
        <h6 className="h6-stena">Меня зовут {pers.firstName} </h6> 
        <h6 className="h6-stena">Фамилия {pers.surname}</h6> 
        <h6 className="h6-stena">Мне {pers.age} лет</h6> 
        <h6 className="h6-stena">Обучение проходил {pers.school}</h6> 
        <h6 className="h6-stena">Тружусь в  {pers.work}</h6> 
        <h6 className="h6-stena">Люблю слушать {pers.music} </h6> 
        <h6 className="h6-stena">Люблю смотреть {pers.video} </h6> 
        <h6 className="h6-stena">Мечтаю  {pers.myWishes} </h6> 
        <h6 className="h6-stena">Немного обо мне {pers.aboutMe} </h6> 
    </div>
    
    <button className="btn-red" onClick={() => openForm()}>Редактировать профиль</button>
 
 </div>
    )
}
export default SignUp ;
// http://localhost:8080/vprolete/person/1
//http://fortnite-api.com/v1/map