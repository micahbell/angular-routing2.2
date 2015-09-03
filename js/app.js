var app = angular.module('angularRouting', ['ngRoute']);

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


app.config(function($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController',
        // active: true;
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
        // active: true;
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .otherwise({redirectTo: '/'});
});






//
