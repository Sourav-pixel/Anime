import React,{useState,useEffect} from 'react'
import Content from './Content.js'
import axios from 'axios';


 const  Anime = () => {
    const [anime,setAnime] = useState([]);

      useEffect(() => {
        axios.get('https://ghibliapi.herokuapp.com/films')
      .then(response => {
        setAnime(response.data);
        
      }).catch(error => {console.error(error);})
      
      }, [] );

  return (
    <div className="main">
    <div className="anime">
     
    </div>
    {anime.map(anime => {
      return (
        <Content key={anime.id}title={anime.title} image={anime.image} description={anime.description} />
      )
    })}
    </div>
  )
}
export default Anime;