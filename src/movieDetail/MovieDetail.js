import React from 'react';


class MovieDetail extends React.Component {
  render() {
    const moviesid = parseInt(this.props.takeParams.match.params.movie);
    const find = this.props.movies.find(item => item.id === moviesid);
    return(
      <React.Fragment>detalle
        {find !== undefined ?
        <div className="detail_container">
          <img src={find.image} alt={find.title}/>
          <h2>{find.name}</h2>
        </div>
        :
        <p>Loading...</p>}
      </React.Fragment>
    )
  }
}
export default MovieDetail;