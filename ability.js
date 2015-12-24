'use strict';

const Ability = function(data){
  const description = function(){
    return data.description;
  };

  const id = function(){
    return data.id;
  };

  const name = function(){
    return name;
  };

  return {
    'description': description,
    'id': id,
    'name': name
  };
};

module.exports = Ability;
