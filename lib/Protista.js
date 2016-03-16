'use strict';

const Eukaryota = require('./Eukaryota.js');

class Fungi extends Eukaryota {
  constructor(name, uniCellular, mobile, heterotroph){
    super(name, uniCellular, true, mobile, heterotroph);
  }
}

module.exports = Fungi;