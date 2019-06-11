import React from 'react';

class MoviesList extends React.Component {
  render() {
    return (
      <p>{this.props.getMovies}
      {this.props.movies
        .map(item => item.title)}</p>
    )
  }
}

export default MoviesList;