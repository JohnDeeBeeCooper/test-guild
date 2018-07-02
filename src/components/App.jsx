import React, { Component } from 'react';
import Guild from './Guild';
import Log from './Log';
import membersGenerator from '../functions/membersGenerator';
import passYear from '../functions/passYear';
import './App.css';

export default class extends Component {
  state = {
    guild: membersGenerator(),
    id: 0,
    year: 700,
    logs: []
  }
  plusYear = () => {
    this.setState({ year: this.state.year + 1, guild: passYear(this.state.guild)[0], logs: passYear(this.state.guild)[1] });
    console.log(this.state.logs);
  }

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.plusYear}>Прокрутить год</button>
        <Guild guild={this.state.guild} />
        <Log logs={this.state.logs} />
        <p className="year">{this.state.year} год н.э</p>
      </div>
    );
  }
}

