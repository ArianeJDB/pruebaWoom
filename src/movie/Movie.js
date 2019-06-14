import React from 'react';
import {Link} from 'react-router-dom';
import './_movie.scss'


class Movie extends React.Component {
  render() {
    const { image, title, rating, id } = this.props;
    return(
      <div className="movie_container">
        <img src={image} alt={title} className='img' />
        <h3 className="movie_title">{title}</h3>
        <p className="rating"><span><i className="fas fa-star star"></i></span>{rating}</p>
        <div  className="link_more">
        <Link to={`/detail/${id}`} className="more">Ver más</Link>
        </div>
      </div>
    )
  }
}

export default Movie;