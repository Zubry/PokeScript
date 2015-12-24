'use strict';

const PokeScript = (function(){
  const cache = require('./get.js');
  const Pokedex = require('./pokedex.js');
  const Pokemon = require('./pokemon.js');
  const Type = require('./type.js');
  const Move = require('./move.js');
  const Ability = require('./ability.js');
  const EggGroup = require('./egg.js');
  const Description = require('./description.js');
  const Sprite = require('./sprite.js');
  const Game = require('./game.js');

  const loadPokedex = function(){
    return cache('api/v1/pokedex/1/')
      .then(function(data){
        return Pokedex(data);
      });
  }

  const get = function(resource, id){
    return cache('api/v1/' + resource + '/' + id + '/');
  };

  return {
    'Pokedex': Pokedex,
    'Pokemon': Pokemon,
    'Type': Type,
    'Move': Move,
    'Ability': Ability,
    'EggGroup': EggGroup,
    'Description': Description,
    'Sprite': Sprite,
    'Game': Game,
    'loadPokedex': loadPokedex,
    'get': get
  };
})();

const Promise = require('bluebird');
const fs = require('fs');

PokeScript.get('type', '2')
  .then(function(type){
    return PokeScript.Type(type);
  })
  .then(function(Fighting){
    return Promise.all(Fighting.ineffective());
  })
  .then(function(ineffectives){
    return ineffectives.map(function(type){
      return {
        'name': type.name(),
        'weaknesses': type.weakness_primitive()
      };
    });
  })
  .then(function(data){
    console.log(data);
  });

module.exports = PokeScript;
