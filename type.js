'use strict';

const get = require('./get.js');

const Type = function(data){
  const load = function(type){
    return get(type.resource_uri)
      .then(function(data){
        return Type(data);
      });
  };

  const load_prim = function(type){
    return type.name;
  };

  const id = function(){
    return data.id;
  };

  const ineffective = function(){
    return data.ineffective.map(load);
  };

  const ineffective_primitive = function(){
    return data.ineffective.map(load_prim);
  };

  const name = function(){
    return data.name;
  };

  const no_effect = function(){
    return data.no_effect.map(load);
  };

  const no_effect_primitive = function(){
    return data.no_effect.map(load_prim);
  };

  const resistance = function(){
    return data.resistance.map(load);
  };

  const resistance_primitive = function(){
    return data.resistance.map(load_prim);
  };

  const super_effective = function(){
    return data.super_effective.map(load);
  };

  const super_effective_primitive = function(){
    return data.super_effective.map(load_prim);
  };

  const weakness = function(){
    return data.weakness.map(load);
  };

  const weakness_primitive = function(){
    return data.weakness.map(load_prim);
  };

  return {
    'id': id,
    'ineffective': ineffective,
    'ineffective_primitive': ineffective_primitive,
    'name': name,
    'no_effect': no_effect,
    'no_effect_primitive': no_effect_primitive,
    'resistance': resistance,
    'resistance_primitive': resistance_primitive,
    'super_effective': super_effective,
    'super_effective_primitive': super_effective_primitive,
    'weakness': weakness,
    'weakness_primitive': weakness_primitive
  };
};

module.exports = Type;
