import React from 'react';
import MoviesList from '../list/MoviesList';
import Header from '../header/Header'
import './_home.scss'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="home_container">
        <h1 className="title">Mis películas favoritas</h1>
        <MoviesList 
        movies={this.props.movies}
        handleFilter={this.handleFilter}
        />
        </div>
      </React.Fragment>
    );
  }
}
 
export default Home;