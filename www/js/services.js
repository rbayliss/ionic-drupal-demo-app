angular.module('starter.services', [
  'ngResource'
])

  .service('Category', function($resource, backend) {
    return $resource(backend + '/taxonomy/term/:tid', {
      '_format': 'json'
    }, {
      'query': {
        method: 'GET',
        url: backend + '/api/categories',
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
        url: backend + '/api/categories/:tid',
        isArray: true
      }
    });
  })
  .service('File', function($resource, backend) {
    return $resource(backend + '/entity/file/:fid', {
      '_format': 'hal_json'
    });
  })