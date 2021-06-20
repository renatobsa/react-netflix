import React, { useEffect, useState } from 'react';
import '../../App.css';
import * as Tmdb from '../../services/Tmdb';
import MovieRow from '../../components/MovieRow/MovieRow';
import FeatureMovie from '../../components/FeatureMovie/FeatureMovie';
import Header from '../../components/Header/Header';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Home = () =>{

  const [movieList,setMovieList] = useState<any[]>([]);
  const [featureMovie, setFeatureMovie] = useState<any|null>(null)
  const [isScroll, setIsScroll] = useState(false)
  const {signed} = useAuth();
  const history = useHistory();

  useEffect(()=>{
    const loadAll = async () =>{
      const list = await Tmdb.getHomeList();
      setMovieList(list);
      const originals = list.filter(i=>i.slug === 'originals');
      const randonChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      const chosen = originals[0].items.results[randonChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeatureMovie(chosenInfo);
    }
    loadAll();
  },[]);
  
  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    }
    window.addEventListener('scroll',scrollListener);

    return () =>{
    window.removeEventListener('scroll',scrollListener);
    }

  },[])

  return (  
    <div className="page">
      {!signed && <Redirect to='/'/>}

      <Header black={isScroll}/>
      
      {featureMovie &&
        <FeatureMovie item={featureMovie}/>
      }
      <section className="lists">
      {
        movieList.map((item,key)=>(
        <MovieRow key={key} title={item.title} items={item.items}/>
        ))
      }
      </section>
      {movieList.length <=0 &&
      <div className="loading">
      <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
      </div>
      }
    </div>
    //movieList.map( (item, key) => ())

    
  )
}

export default Home;