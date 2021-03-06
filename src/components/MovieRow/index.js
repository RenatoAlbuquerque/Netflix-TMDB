import React, { useState } from 'react';
import './style.scss';
import { RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title, items}) => {
  const [scrollx, setScrollx] = useState(0);
  const handleLeftArrow = () =>{
    let x = scrollx + 150;
    if(x > 0){
      x = 0;
    }
    setScrollx(x);
  }

  const handleRightArrow = () =>{
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60;
    }
    setScrollx(x);
  }
  return(
    <div className="movieRow">
      <h2>{title}</h2>

      <div 
        className="movieRow--left" 
        style={{fontSize: 50}}
        onClick={handleLeftArrow}
      >
        <RiArrowLeftSLine/>
      </div>
      <div 
        className="movieRow--right" 
        style={{fontSize: 50}}
        onClick={handleRightArrow}
      >
        <RiArrowRightSLine/>
      </div>
      <div className="movieRow--listarea">
        <div 
        className="movieRow--list" 
        style={{marginLeft: scrollx, width: items.results.length * 150}}
        
        >
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow--item">
              <a 
              href={`https://www.themoviedb.org/${item.media_type === "movie" ? "movie" : "tv"}/${item.id}`}
              target="_blank"
              rel="noreferrer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                
                />
              </a>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}