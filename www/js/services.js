angular.module('starter.services', [
  'ngResource'
])

  .service('Category', function($resource, backend) {
    return $resource(backend + '/taxonomy/term/:tid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: backend + '/categories',
        isArray: true
      }
    });
  })
  .service('Article', function($resource, backend) {
    return $resource(backend + '/node/:nid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: 'http://localhost/d8appdev/backend/categories/:tid',
        isArray: true
      }
    });
  })
  .service('File', function($resource, backend) {
    return $resource(backend + '/entity/file/:fid', {
      '_format': 'hal_json'
    });
  })