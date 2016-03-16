'use strict';

const LivingThing = require('./LivingThing.js');

class Eukaryota extends LivingThing {
  constructor(name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }

  set heterotroph(value){
    this._heterotroph = value;
  }

  get autotroph(){
    if(this._heterotroph === false){
      return true;
    }
    else {
      return false;
    }
  }

  set autotroph(value){
    if (value === true){
      this._heterotroph = false;
    }
    else {
      this._heterotroph = true;
    }
  }

}

module.exports = Eukaryota;