import React from 'react';
import {Link} from 'react-router-dom';

class Movie extends React.Component {
  render() {
    return(
      <div>
        <img src={this.props.image} alt={this.props.title} className='img' />
        <p>{this.props.title}</p>
        <p>{this.props.rating}</p>
        <Link to={`/detail/${this.props.id}`} className="more">Ver más</Link>
      </div>
    )
  }
}

export default Movie;