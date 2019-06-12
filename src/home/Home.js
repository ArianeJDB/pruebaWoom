import React from 'react';
import MoviesList from '../list/MoviesList';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="title">Mis películas favoritas</h1>
      <MoviesList 
      movies={this.props.movies}
      />
      </React.Fragment>
    );
  }
}
 
export default Home;