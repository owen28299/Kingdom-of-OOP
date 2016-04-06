'use strict';

const Animal = require('./Animal.js');

class Bilateral extends Animal {
  constructor(name, body){
    super(name, 'bilateral');
    this._body = body;
  }

  get body(){
    return this._body;
  }

  set body(value){
    this._body = value;
  }
}

module.exports = Bilateral;