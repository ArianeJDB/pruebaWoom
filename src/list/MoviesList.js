import React from 'react';
import Movie from '../movie/Movie'
import './_moviesList.scss'

class MoviesList extends React.Component {
  render() {
    return (
      <ul className="list">
      {this.props.movies
        .map(item => {
          return (
            <li className="list_item" key={item.id}>
              <Movie 
              title={item.title}
              image={item.image}
              rating={item.rating}
              id={item.id}/>
            </li>
          )
        })
        }
        </ul>
    ) 
  }
}

export default MoviesList;