'use strict';

const Eukaryota = require('./Eukaryota.js');

class Animal extends Eukaryota {
  constructor(name, symmetry){
    super(name, false, false, true, true);
    this._symmetry = symmetry;
  }

  get symmetry(){
    return this._symmetry;
  }

  set symmetry(value){
    this._symmetry = value;
  }
}

module.exports = Animal;