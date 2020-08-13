import React, {Component} from 'react';
import DriverList from './DriverList';
import RaceList from './RaceList';
import ResultList from './ResultList';
import {Switch, Route} from 'react-router-dom';

class Main extends Component{
    render() {
        return (
          <main className = "main row">
          <div className = "col-1"></div>
          <div className = "col-8">
            <Switch>
                <Route exact path='/' component={DriverList}/>
                <Route path='/Racelist'  component={RaceList}/>
                <Route path='/Resultlist'  component={ResultList}/>
            </Switch>
            </div>
            <div className = "col-3"></div>
        </main>
        );
      }
} 

export default Main;