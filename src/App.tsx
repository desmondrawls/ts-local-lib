import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SharingStrategy } from 'ts-lib';

class App extends Component {
  speed(strategy: SharingStrategy, companyName: string, isTeamAbleToMakeTSLibrary: boolean): string {
    if(strategy === SharingStrategy.Libraries && isTeamAbleToMakeTSLibrary || companyName === "Netflix") {
      return "fast";
    } else if (strategy === SharingStrategy.Services) {
      return this.speed(SharingStrategy.Emails, companyName, isTeamAbleToMakeTSLibrary);
    } else {
      return "slow";
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <div>Cycle time: {this.speed(SharingStrategy.Services, "Large Enterprise That Just Discovered The Internet inc.", false)}</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
