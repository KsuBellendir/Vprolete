import './Science.css';
import React, {useState}  from 'react';
import Modal from '../modal/modal';




const Science = () => {
  const [activModal, setActivModal] = useState(true);
    return(
        <div className='services'>
            <div className='block'>
            <h6 className='h6'>Индивидуализм и Социализм</h6>
            <div className='p'>Социалистические общества часто характеризуют как «коллективистские»,
                 то есть такие, где отдельный человек подчинён диктату коллектива. 
                 Но это слишком примитивное понимание — ещё Чернышевский основывал 
                 социализм на «разумном эгоизме», а Маркс считал противоположность эгоизма и 
                 самоотверженности надуманной и во многом обусловленной классовым обществом. 
                 Так можно ли строить социализм на основе индивидуализма? Отвечает Денис Хромый в своей статье...
                 <a className='a' href='https://vestnikburi.com/individualizm-i-soczializm/'>продолжение</a></div>
            </div>
            <div className='block'>
            <h6 className='h6'>ТРИУМФ ВОЛИ: КАК СКЛАДЫВАЕТСЯ ГЕРОИЧЕСКИЙ КИНОЭПОС РОССИЙСКОГО КАПИТАЛИЗМА</h6>
            <p className='p'>Фильм «Турист» о российских наёмниках в Центральноафриканской Республике ( вперед, русские богатыри!)
             вышел почти незамеченным, но его стоит посмотреть. О художественных приёмах, пропагандистском посыле и реакции как либеральной,
              так и охранительской общественности на картину – в рецензии Олега Исаева...
              <a className='a' href='https://vestnikburi.com/triumf-voli-kak-skladyvaetsya-geroicheskij-kinoepos-rossijskogo-kapitalizma/'>прочитать</a></p>
            </div>
            <div className='block'>
            <h6 className='h6'>news.titel</h6>
            <p className='p'>news.text</p>
            </div>
          <button className='btn' onClick={() => setActivModal(true)}>Предложить новость</button>
           <Modal active={activModal} setActive={setActivModal}/> 
        </div>
       
    )
}
export default Science;
