import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

class Dog extends Component {
  render() {
    return (
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <div className='card DogDetails-card'>
            <img
              className='card-img-top'
              src={this.props.src}
              alt={this.props.name}
            />
            <div className='card-body'>
              <h2 className='card-title'>{this.props.name}</h2>
              <h4 className='card-subtitle text-muted'>
                {this.props.age} years old
              </h4>
            </div>
            <ul className='list-group list-group-flush'>
              {this.props.facts.map((f, i) => (
                <li className='list-group-item' key={i}>
                  {f}
                </li>
              ))}
            </ul>
            <div className='card-body'>
              <Link to='/dogs' className='btn btn-info'>
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
