import React from 'react';
import {Link} from 'react-router-dom';
import './_movie.scss'


class Movie extends React.Component {
  render() {
    return(
      <div className="movie_container">
        <img src={this.props.image} alt={this.props.title} className='img' />
        <h3 className="movie_title">{this.props.title}</h3>
        <p className="rating"><span><i class="fas fa-star star"></i></span>{this.props.rating}</p>
        <div  className="link_more">
        <Link to={`/detail/${this.props.id}`} className="more">Ver más</Link>
        </div>
      </div>
    )
  }
}

export default Movie;