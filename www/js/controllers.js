angular.module('starter.controllers', [])

  /**
   * /welcome
   */
  .controller('WelcomeCtrl', function($scope) {
    // Set a variable that's accessible in the template
    $scope.text = 'Welcome to Drupal 8!';
  })

  /**
   * /categories
   */
  .controller('CategoriesCtrl', function($scope, Category) {
    $scope.categories = Category.query();
  })

  /**
   * /categories/{tid}
   */
  .controller('CategoryCtrl', function($scope, $stateParams, Category, Article) {
    $scope.category = Category.get({tid: $stateParams.tid });
    $scope.articles = Article.query({tid: $stateParams.tid});
  })

  /**
   * /articles/{nid}
   */
  .controller('ArticleCtrl', function($scope, $stateParams, Article, File) {
    // We have to fetch both the article and the image.
    $scope.article = Article.get({nid: $stateParams.nid}, function(article) {
      // Once the article is loaded, retrieve the image.
      $scope.image = File.get({fid: article.field_image[0].target_id});
    });
  });