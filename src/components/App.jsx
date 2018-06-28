import React, { Component } from 'react';
import Guild from './Guild';
import Log from './Log';
import membersGenerator from '../functions/membersGenerator';
import './App.css';

export default class extends Component {
  state = {
    guild: membersGenerator(),
    id: 0,
    year: 3500,
    era: 'до н.э',
    logs:[]
  }
  plusYear = () => {
    this.setState({ year: this.state.year - 1 });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.plusYear}>Прокрутить год</button>
        <Guild guild={this.state.guild} />
        <Log logs={this.state.logs}/>
        <p className="year">{this.state.year} год {this.state.era}</p>
      </div>
    );
  }
}

