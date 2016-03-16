'use strict';

class LivingThing {
  constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }

  set name(value){
    this._name = value;
  }

  get uniCellular(){
    return this._uniCellular;
  }

  set uniCellular(value){
    this._uniCellular = value;
  }

  get multiCellular(){
    if(this._uniCellular === false){
      return true;
    }
    else {
      return false;
    }
  }

  set multiCellular(value){
    if (value === true){
      this._uniCellular = false;
    }
    else {
      this._uniCellular = true;
    }
  }

  get eukaryote(){
    return this._trueNucleus;
  }

  set eukaryote(value){
    this._trueNucleus = value;
  }

  get prokaryote(){
    if(this._trueNucleus === false){
      return true;
    }
    else {
      return false;
    }
  }

  set prokaryote(value){
    if (value === true){
      this._trueNucleus = false;
    }
    else {
      this._trueNucleus = true;
    }
  }

  get anaerobic(){
    return this._anaerobic;
  }

  set anaerobic(value){
    this._anaerobic = value;
  }

  get aerobic(){
    if(this._anaerobic === false){
      return true;
    }
    else {
      return false;
    }
  }

  set aerobic(value){
    if (value === true){
      this._anaerobic = false;
    }
    else {
      this._anaerobic = true;
    }
  }

  get asexual(){
    return this._asexual;
  }

  set asexual(value){
    this._asexual = value;
  }

  get sexual(){
    if(this._asexual === false){
      return true;
    }
    else {
      return false;
    }
  }

  set sexual(value){
    if (value === true){
      this._asexual = false;
    }
    else {
      this._asexual = true;
    }
  }

  get mobile(){
    return this._mobile;
  }

  set mobile(value){
    this._mobile = value;
  }

  get immobile(){
    if(this._mobile === false){
      return true;
    }
    else {
      return false;
    }
  }

  set immobile(value){
    if (value === true){
      this._mobile = false;
    }
    else {
      this._mobile = true;
    }
  }

}

module.exports = LivingThing;