import React from 'react';
import {fetchMovies} from './services/fetchMovies';
import Home from './home/Home'
import {Switch, Route} from 'react-router-dom';
import MovieDetail from './movieDetail/MovieDetail'

class App extends React.Component
 {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
    }
    this.getMovies = this.getMovies.bind(this);
  }
  componentDidMount(){
    const LS = JSON.parse(localStorage.getItem('data'));
    if(!LS || !LS.length) {
      this.getMovies();
    } else {
      this.setState({movies: LS});
    }
    
  }
  
  getMovies(){
    fetchMovies()
      .then(data => {
        this.setState({
          movies: data
        }, () => {localStorage.setItem('data', JSON.stringify(this.state.movies))})     
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
        />
       }
       />
      </Switch>
    );
  }
}

export default App;
