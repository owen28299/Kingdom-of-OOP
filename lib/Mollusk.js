'use strict';

const Bilateral = require('./Bilateral.js');

class Mollusk extends Bilateral {
  constructor(name){
    super(name, 'soft-bodied');
  }

}

module.exports = Mollusk;