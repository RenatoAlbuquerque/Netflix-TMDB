import React from 'react';
import './style.scss';
import LogoNetflix from '../../assets/logo-netflix.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) =>{
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={LogoNetflix} alt="logo_netflix" />
        </a>
        <a href="/">
          <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' alt="logo_tmdb" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://avatars.githubusercontent.com/u/84095953?s=96v=4" alt="usuario" />
        </a>
      </div>
    </header>
  )
}