import React from 'react';
import {fetchMovies} from './services/fetchMovies';
import './App.scss';
import Home from './home/Home'
import {Switch, Route} from 'react-router-dom';
import MovieDetail from './movieDetail/MovieDetail'
// import MoviesList from './list/MoviesList';

class App extends React.Component
 {
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
    fetchMovies()
      .then(data => {
        this.setState({
          movies: data
        })     
  });
}
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => 
          <Home 
            movies={this.state.movies}
          />
        }
      />
      <Route path="/detail/:movie" render={(takeParams) => 
        <MovieDetail 
          takeParams={takeParams}
          movies={this.state.movies}
          // resetFilterName={this.resetFilterName}
        />
       }
       />
      </Switch>
    );
  }
}

export default App;
