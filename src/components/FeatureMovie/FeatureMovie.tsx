import React from 'react'
import './FeatureMovie.css'
const FeatureMovie = ({item}:any) => {

    const movieYear = new Date(item.first_air_date);
    return (
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{movieYear.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ?'s':''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href="" className="featured--watchbutton">► Assistir</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong>{item.genres.map((u:any) => u.name).join(', ')}</div>
                </div>     
            </div>    
      
        </section>
    )
}

export default FeatureMovie
