// app.controller('HomeController', function($scope) {
//   $scope.message='There is always money in the banana stand.';
// })
//
// app.controller('DogsController', function($scope) {
//   $scope.message='woof woof';
// })
// app.contoller('NavController', function($scope) {
//   // body...
// })

app.controller('ProjectsController', function($scope) {
  $scope.message='Here are some projects';
  // $scope.title = 'Projects';
})

app.controller('BioController', function($scope) {
  $scope.message='Here is the bio';
})

app.controller('ResumeController', function($scope) {
  $scope.message='Here is the resume';
})

app.controller('AddController', function($scope, $routeParams) {
  $scope.numberOne = $routeParams.x;
  $scope.numberTwo = $routeParams.y;
  $scope.total = Number($routeParams.x) + Number($routeParams.y);
})

app.controller('DivideController', function($scope, $routeParams) {
  $scope.numberOne = $routeParams.x;
  $scope.numberTwo = $routeParams.y;
  $scope.total = Number($routeParams.x) / Number($routeParams.y);
})












//
