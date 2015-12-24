'use strict';

const get = require('./get.js');
const Type = require('./type.js');
const Move = require('./move.js');
const Ability = require('./ability.js');
const EggGroup = require('./egg.js');
const Description = require('./description.js');
const Sprite = require('./sprite.js');
const Game = require('./game.js');

const Pokemon = function(data, _evolved_with, _evolved_level){
  const abilities = function(){
    return data.abilities.map(function(ability){
      return get(ability.resource_uri)
        .then(function(data){
          return Ability(data);
        });
    });
  };

  const abilities_primitive = function(){
    return data.abilities.map(function(ability){
      return ability.name;
    });
  };

  const evolved_with = function(){
    return _evolved_with;
  };

  const evolved_from = function(){
    return _evolved_from;
  };

  const attack = function(){
    return data.attack;
  };

  const catch_rate = function(){
    return data.catch_rate;
  };

  const defense = function(){
    return data.catch_rate;
  };

  const descriptions = function(){
    return data.descriptions.map(function(desc){
      return get(desc.resource_uri)
        .then(function(data){
          return Description(data);
        });
    });
  };

  const descriptions_primitive = function(){
    return data.descriptions.map(function(desc){
      return desc.name;
    });
  };

  const egg_cycles = function(){
    return data.egg_cycles;
  };

  const egg_groups = function(){
    return data.egg_groups.map(function(eg){
      return get(eg.resource_uri)
        .then(function(data){
          return EggGroup(data);
        });
    });
  };

  const egg_groups_primitive = function(){
    return data.egg_groups.map(function(e){
      return e.name;
    });
  };

  const ev_yield = function(){
    return data.ev_yield;
  };

  const evolutions = function(){
    return data.evolutions.map(function(ev){
      return get(ev.resource_uri)
        .then(function(data){
          return Pokemon(data, ev.method, ev.level);
        });
    });
  };

  const evolutions_primitive = function(){
    return data.evolutions.map(function(ev){
      return {
        'level': ev.level,
        'method': ev.method,
        'to': ev.to
      };
    });
  };

  const exp = function(){
    return data.exp;
  };

  const growth_rate = function(){
    return data.growth_rate;
  };

  const happiness = function(){
    return data.happiness;
  };

  const height = function(){
    return data.height;
  };

  const hp = function(){
    return data.hp;
  };

  const male_female_ratio = function(){
    return data.male_female_ratio;
  };

  const moves = function(){
    return data.moves.map(function(move){
      return get(move.resource_uri)
        .then(function(data){
          return Move(data, move.learn_type);
        });
    });
  };

  const moves_primitive = function(){
    return data.moves.map(function(move){
      return {
        'learn_type': move.learn_type,
        'name': move.name
      };
    });
  };

  const name = function(){
    return data.name;
  };

  const national_id = function(){
    return data.national_id;
  };

  const pkdx_id = function(){
    return data.pkdx_id;
  };

  const sp_atk = function(){
    return data.sp_atk;
  };

  const sp_def = function(){
    return data.sp_def;
  };

  const species = function(){
    return data.species;
  };

  const speed = function(){
    return data.speed;
  };

  const sprites = function(){
    return data.sprites.map(function(sprite){
      return get(sprite.resource_uri)
        .then(function(data){
          return Sprite(data);
        });
    });
  };

  const total = function(){
    return data.total;
  };

  const types = function(){
    return data.types.map(function(type){
      return get(type.resource_uri)
        .then(function(data){
          return Type(data);
        });
    });
  };

  const types_primitive = function(){
    return data.types.map(function(type){
      return type.name;
    });
  };

  const weight = function(){
    return data.weight;
  };

  return {
    'abilities': abilities,
    'abilities_primitive': abilities_primitive,
    'attack': attack,
    'catch_rate': catch_rate,
    'defense': defense,
    'descriptions': descriptions,
    'descriptions_primitive': descriptions_primitive,
    'egg_cycles': egg_cycles,
    'egg_groups': egg_groups,
    'egg_groups_primitive': egg_groups_primitive,
    'ev_yield': ev_yield,
    'evolutions': evolutions,
    'evolutions_primitive': evolutions_primitive,
    'evolved_from': evolved_from,
    'evolved_with': evolved_with,
    'exp': exp,
    'growth_rate': growth_rate,
    'happiness': happiness,
    'height': height,
    'hp': hp,
    'male_female_ratio': male_female_ratio,
    'moves': moves,
    'name': name,
    'national_id': national_id,
    'pkdx_id': pkdx_id,
    'sp_atk': sp_atk,
    'sp_def': sp_def,
    'species': species,
    'speed': speed,
    'sprites': sprites,
    'total': total,
    'types': types,
    'types_primitive': types_primitive,
    'weight': weight,
  };
};

module.exports = Pokemon;
