'use strict';

const get = require('./get.js');

const Move = function(data, _learn_type){
  const accuracy = function(){
    return data.accuracy;
  };

  const category = function(){
    return data.category;
  };

  const description = function(){
    return data.description;
  };

  const id = function(){
    return data.description;
  };

  const learn_type = function(){
    return _learn_type;
  }

  const name = function(){
    return data.name;
  };

  const power = function(){
    return data.power;
  };

  const pp = function(){
    return data.pp;
  };

  return {
    'accuracy': accuracy,
    'category': category,
    'description': description,
    'id': id,
    'learn_type': learn_type,
    'name': name,
    'power': power,
    'pp': pp
  };
};

module.exports = Move;
