import React from 'react';
//import {fetchMovies} from './services/fetchMovies';
import './App.scss';
import MoviesList from './list/MoviesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: []
    }
    this.getMovies = this.getMovies.bind(this);
  }
  componentDidMount(){
    this.getMovies();
  }
  
  getMovies(){
    fetch('https://eeb98180-236b-43f6-be83-01af4d1d548f.mock.pstmn.io/test')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: data
        })
         
  });
}


  render() {
    
    return (
      
      <React.Fragment>
      <h1>Mi listado de pelis</h1>
      <MoviesList 
      getmovies={this.getMovies}
      movies={this.state.movies}
      /> 
      </React.Fragment>
    );
  }
}

export default App;
