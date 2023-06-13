import React, {useEffect, useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from "../../axios";
import {API_KEY, imageUrl} from "../../constant/constant";

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
   axios.get(props.url).then((res) =>{
    console.log(res.data)
    setMovies(res.data.results)
   }).catch((err) =>{
    alert('network error')
   })
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) =>{
      console.log(res.data)
      if(res.data.results.length !== 0){
        setUrlId(res.data.results[0]);
      } else {
        console.log('Trailer not availble')
      }
    }).catch((err) =>{
      alert('Error occured')
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">

          {
            movies.map((obj) =>
              <img key={obj.id} onClick={() =>handleMovie(obj.id)} className={props.isSmall?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
          }
        </div>
       {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
