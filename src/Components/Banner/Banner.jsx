import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constant/constant'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
      let i = 0
      const movieArrayLenght = res.data.results.length;
      let randomNumber = Math.floor(Math.random() * (movieArrayLenght - 0 + 1)) + 0;
      setMovie(res.data.results[randomNumber])
      setInterval(function () {
        randomNumber = Math.floor(Math.random() * (movieArrayLenght - 0 + 1)) + 0;
        setMovie(res.data.results[randomNumber])
      }, 6000)
    })
  }, [])

  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
