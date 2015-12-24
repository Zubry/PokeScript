'use strict';

const uri_to_id = function(uri){
  return uri.split('/').slice(-2, -1)[0] * 1
};

module.exports = uri_to_id;
