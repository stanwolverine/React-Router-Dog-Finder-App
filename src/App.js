import React from 'react';
import Navbar from './component/Navbar';
import Routes from './component/Routes';
import jacky from './images/hazel.jpg';
import bidu from './images/tubby.jpg';
import sheru from './images/whiskey.jpg';
import './App.css';

class App extends React.Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Jacky',
        age: 10,
        src: jacky,
        facts: [
          'Jacky can eat anything.',
          'Jacky is always sleepy.',
          'Jacky is very intelligent.'
        ]
      },
      {
        name: 'Bidu',
        age: 5,
        src: bidu,
        facts: [
          'Bidu has so much energy.',
          'Bidu likes playing so much.',
          'Bidu loves playing with his cat friend.'
        ]
      },
      {
        name: 'Sheru',
        age: 12,
        src: sheru,
        facts: [
          'Sheru is a very strong dog.',
          "Sheru doesn't listen to his owner.",
          'Sheru looks like a lion.'
        ]
      }
    ]
  };
  render() {
    return (
      <div className='App'>
        <Navbar paths={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
