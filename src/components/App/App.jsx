import React, {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';


function App() {
let [galleryList, setGalleryList] = useState([]);

useEffect(() => {
  console.log('In useEffect');
  getGallery();
}, []);

const getGallery =() => {
  axios.get('/gallery')
  .then((response)=>{
    console.log('Axios GET request success', response);
    setGalleryList(response.data);
  }) .catch((error) => {
      alert('Unable to retrieve GalleryList', error);
  })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>My Life in Pictures</h2>
        <GalleryList list={galleryList}/>
      </div>
    );
}

export default App;
