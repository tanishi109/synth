angular.module('app')
.directive('tinderCard', function () {
  return {
    link: function ($scope, $element) {
      console.log($scope)
      console.log($element)
      $element.on("click", function () {
        console.log("hgoe")
      });
    }
  }
})
.controller('schedulesController', function ($scope, $http, data) {
  $scope.schedules = data.schedules;


  $scope.publish = function () {
    $http.post('/api/schedules', { content: $scope.newSchedule })
    .success(function (schedule) {
      $scope.schedules.unshift(schedule);
    });
    $scope.newTweet = '';
  };
})
