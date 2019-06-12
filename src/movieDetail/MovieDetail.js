import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/Header'


class MovieDetail extends React.Component {
  render() {
    const moviesid = parseInt(this.props.takeParams.match.params.movie);
    const find = this.props.movies.find(item => item.id === moviesid);
    return(
      <React.Fragment>
        <Header />
        {find !== undefined ?
        <div className="detail_container">
          <img src={find.image} alt={find.title}/>
          <h2>{find.title}</h2>
          <p>{find.synopsis}</p>
          <ul>
            {find.director
              .map(item => {
                return (
                  <li>{item}</li>
                )
              }
              )}
          </ul>
          <ul>
            {find.cast
              .map(element => {
                return (
                  <li>{element}</li>
                )
              }
              )}
          </ul>
          <p>{find.rating}</p>
          <Link to="/">Volver</Link>
        </div>
        :
        <p>Loading...</p>}
      </React.Fragment>
    )
  }
}
export default MovieDetail;