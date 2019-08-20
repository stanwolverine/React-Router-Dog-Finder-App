import React, { Component } from 'react';
import Dog from './Dog';
import DogList from './DogList';
import { Route, Switch, Redirect } from 'react-router-dom';

class Routes extends Component {
  render() {
    // MAKING ROUTES FROM DOGS DATA \\

    // const routes = this.props.dogs.map(d => (
    // <Route
    //   exact
    //   path={`/dogs/${d.name.toLowerCase()}`}
    //   render={routerProps => <Dog {...d} {...routerProps} />}
    // />
    // ));

    // MAKING A SINGLE ROUTE FOR ALL DOGS \\

    const getDog = props => {
      const name = props.match.params.dogName;
      const dogData = this.props.dogs.find(
        d => d.name.toLowerCase() === name.toLowerCase()
      );
      if (!dogData) {
        return <Redirect to='/dogs' />;
      }
      return <Dog {...dogData} {...props} />;
    };
    return (
      <Switch>
        <Route
          exact
          path='/dogs'
          render={routerProps => (
            <DogList dogs={this.props.dogs} {...routerProps} />
          )}
        />
        {/* {routes} */}
        <Route exact path='/dogs/:dogName' render={getDog} />
        {/* <Route render={() => <Redirect to='/dogs' />} /> */}
        <Redirect to='/dogs' />
      </Switch>
    );
  }
}

export default Routes;
