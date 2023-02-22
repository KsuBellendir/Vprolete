import axios from 'axios';
const useProlet = () => {
const getPers = () => {
    axios.get('http://localhost:8080/vprolete/person/2').then(res =>{
    
        return _transformPers(res);
    }).catch(error => {
        console.error(error)
    })
}
const _transformPers = (res) => {
    return{
       id: res.data.id,
       firstName: res.data.firstName,
       surname: res.data.surname,
       age: res.data.age,
       school: res.data.school,
       username: res.data.username,
       work: res.data.work,
       music: res.data.music,
       video: res.data.video,
       myWishes: res.data.myWishes,
       aboutMe: res.data.aboutMe
    }
}

}
 export default useProlet;
//async function 