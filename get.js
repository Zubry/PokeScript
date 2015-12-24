'use strict';

const request = require('request-promise');

const BASE_URL = 'http://pokeapi.co/';

const cache = [];

const cacheEndpoint = function(endpoint, data){
  cache[endpoint] = data;
};

const endpointIsCached = function(endpoint){
  return cache.indexOf(endpoint) > -1;
};

const getEndpoint = function(endpoint){
  return cache[endpoint];
};

const get = function(endpoint){
  if(endpointIsCached(endpoint)){
    return getEndpoint(endpoint);
  }else{
    let data = request(BASE_URL + endpoint).then(JSON.parse);
    cacheEndpoint(endpoint, data);
    return data;
  }
};

module.exports = get;
