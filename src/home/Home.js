import React from 'react';
import MoviesList from '../list/MoviesList';
import Header from '../header/Header'
import './_home.scss'

class Home extends React.Component {
  render() {
    const { movies, handleFilter } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="home_container">
        <h1 className="title">Mis películas favoritas</h1>
        <MoviesList 
        movies={movies}
        handleFilter={handleFilter}
        />
        </div>
      </React.Fragment>
    );
  }
}
 
export default Home;