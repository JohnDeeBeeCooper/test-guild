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
    logs: ['Пока ничего не произошло']
  }
  plusYear = () => {
    const guildList = passYear(this.state.guild);
    guildList[0].sort((a, b) => b.total - a.total);
    this.setState({ year: this.state.year + 1, guild: guildList[0], logs: guildList[1] });
  }

  render() {
    return (
      <div className="wrapper">
        <button className="btn" onClick={this.plusYear}>Прокрутить год</button><p className="year">{this.state.year} год н.э</p>
        <div className="container">
          <Log logs={this.state.logs} />
          <Guild guild={this.state.guild} />
        </div>
      </div>
    );
  }
}

