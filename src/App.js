import React, { useState, useEffect } from 'react'
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import './App.scss'

export default function App ()  {
  
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() =>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo);
    }
    
    loadAll()

  },[]);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll',scrollListener);

    return () => {
      window.removeEventListener('scroll',scrollListener);
    }
  },[])

  return (
    <div className="page">
      {movieList.length <= 0 &&
        <div className="loading">
          <img src='https://c.tenor.com/zQ6H2k7HwGcAAAAC/netflix-netflix-logo.gif' alt="Carregando"/>
        </div>
      }
      <Header black={blackHeader}/>
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Layout cedido pela B7web</p>
        <p>Imagens e dados cedidos pelo The Movie Data Base</p>
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/renato-albuquerque-dev/" target="_blank" rel="noreferrer">Renato Albuquerque</a></p>
      </footer>
      
    </div>
  );
}

