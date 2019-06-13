import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/Header'
import './_movieDetail.scss'

class MovieDetail extends React.Component {
  render() {
    const moviesid = parseInt(this.props.takeParams.match.params.movie);
    const find = this.props.movies.find(item => item.id === moviesid);
    return(
      <React.Fragment>
        <Header />
        {find !== undefined ?
        <div className="movie_detail">
        <div className="detail_container">
          <div className="img_detail">
          <img src={find.image} alt={find.title} />
          </div>
          <h2 className="title_detail">{find.title}</h2>
          <p className="synopsis">{find.synopsis}</p>
          <div className="lists">
          <ul className="directors_list">
            <p>Director: </p>
            {find.director
              .map(item => {
                return (
                  <li className="director_element">{item}</li>
                )
              }
              )}
          </ul>
          <ul className="cast_list">
            <p>Actores: </p>
            {find.cast
              .map(element => {
                return (
                  <li className="cast_element">{element}</li>
                )
              }
              )}
          </ul>
          </div>
          <p className="rating_detail"><span><i class="fas fa-star star_detail"></i></span>{find.rating}</p>
          <Link to="/" className="link_volver">Volver</Link>
        </div>
        </div>
        :
        <p>Loading...</p>}
      </React.Fragment>
    )
  }
}
export default MovieDetail;