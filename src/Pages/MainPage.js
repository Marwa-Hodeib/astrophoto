import React,{useState, useEffect} from 'react';
import {getPhotoFromNasa} from '../fetchAPI';
import '../../src/App.css';



const MainPage = () => {
const [photo, setPhoto] = useState()

useEffect(()=>{
  getPhotos()
},[])

const getPhotos = async () => {
  const results = await getPhotoFromNasa();
  setPhoto(results)
}


  return (
    <>
    <div>
      <h1 className='main_title'>AstroPhoto</h1>    
      <h5 className='sub_title'> Every day a new photo from NASA</h5>
    </div>
    <div className="container">
      <h2 className="title">{photo?.title}</h2>
      <div className='image_container'>
        <img className='image' src={photo?.url} alt="space" />
      </div>
      <div className='paragraph'>
      <p>{photo?.explanation}</p>
      </div>
    </div>
    </>  
  )
}

export default MainPage;