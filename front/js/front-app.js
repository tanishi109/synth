var dataLoaderRunner = [
  'dataLoader',
  function (dataLoader) {
    return dataLoader();
  }
];

angular.module('app', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/schedules', {
    templateUrl: '/html/schedules/getIndex.html',
    controller: 'schedulesController',
    resolve: {
      data: dataLoaderRunner
    }
  })
  .otherwise({
    redirectTo: '/schedules'
  });

  $locationProvider.html5Mode(true);
})
.service('dataLoader', function ($location, $http) {
  return function () {
    if (preloadedData) {
      var data = preloadedData;
      preloadedData = null;
      return data;
    } else {
      return $http.get( '/api' + $location.path() ).then(function (res) {
        return res.data;
      });
    }
  };
});
