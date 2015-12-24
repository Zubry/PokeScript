'use strict';

const get = require('./get.js');
const Game = require('./game.js');

const Description = function(data){
  const description = function(){
    return data.description;
  };

  const games = function(){
    return data.games.map(function(game){
      return get(game.resource_uri)
        .then(function(data){
          Game(data);
        });
    });
  };

  const games_primitive = function(){
    return data.games.map(function(game){
      return game.name;
    });
  };

  const id = function(){
    return data.id;
  };

  const name = function(){
    return data.name;
  };

  const pokemon = function(){
    return data.pokemon.map(function(p){
      return p.name;
    });
  };

  return {
    'description': description,
    'games': games,
    'games_primitive': games_primitive,
    'id': id,
    'name': name,
    'pokemon': pokemon
  };
};

module.exports = Description;
