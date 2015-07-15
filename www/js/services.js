angular.module('starter.services', [
  'ngResource'
])

  .service('Category', function($resource) {
    return $resource('http://localhost/d8appdev/backend/taxonomy/term/:tid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: 'http://localhost/d8appdev/backend/categories',
        isArray: true
      }
    });
  })
  .service('Article', function($resource) {
    return $resource('http://localhost/d8appdev/backend/node/:nid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: 'http://localhost/d8appdev/backend/categories/:tid',
        isArray: true
      }
    });
  })
  .service('File', function($resource) {
    return $resource('http://localhost/d8appdev/backend/entity/file/:fid', {
      '_format': 'hal_json'
    });
  })