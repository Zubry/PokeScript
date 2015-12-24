'use strict';

const Game = function(data){
  const generation = function(){
    return data.generation;
  };

  const id = function(){
    return data.id;
  };

  const name = function(){
    return data.name;
  };

  const release_year = function(){
    return data.release_year;
  };

  return {
    'generation': generation,
    'id': id,
    'name': name,
    'release_year': release_year
  };
};

module.exports = Game;
