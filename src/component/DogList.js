import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

class DogList extends Component {
  render() {
    return (
      <div className='DogList'>
        <h1 className='display-1 text-center my-3'>Dog List!</h1>
        <div className='row'>
          {this.props.dogs.map((d, idx) => {
            const pushingUrl = `/dogs/${d.name.toLowerCase()}`;
            return (
              <div
                className='Dog col-md-6 col-lg-4 text-center'
                key={`${idx}${d.name}`}
              >
                <img
                  src={d.src}
                  alt={d.name}
                  onClick={() => this.props.history.push(pushingUrl)}
                />
                <h3 className='mt-3'>
                  <Link
                    className='underline'
                    to={`/dogs/${d.name.toLowerCase()}`}
                  >
                    {d.name}
                  </Link>
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DogList;
