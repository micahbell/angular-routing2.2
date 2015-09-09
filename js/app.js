var app = angular.module('angularRouting', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController',
        // active: true;
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/add/:x/:y', {
        templateUrl: 'partials/add.html',
        controller: 'AddController'
      })
      .when('/divide/:x/:y', {
        templateUrl: 'partials/divide.html',
        controller: 'DivideController'
      })
      .otherwise({redirectTo: '/'});
      $locationProvider.html5Mode(true);

});









// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'partials/home.html',
//         controller: 'HomeController'
//       })
//       .when('/dogs', {
//         templateUrl: 'partials/dogs.html',
//         controller: 'DogsController'
//       })
//       .otherwise({redirectTo: '/'});
// });



//
