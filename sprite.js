'use strict';

const Sprite = function(data){
  const id = function(){
    return data.id;
  };

  const image = function(){
    return 'http://pokeapi.co' + data.image;
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
    'id': id,
    'image': image,
    'name': name,
    'pokemon': pokemon
  };
};

module.exports = Sprite;
