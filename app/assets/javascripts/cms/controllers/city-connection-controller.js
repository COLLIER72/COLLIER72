backofficeApp.controller('CityConnectionController', ['$scope', 'cmsService', function ($scope, cmsService) {

  $scope.networkInEdition = null;
  $scope.addingNewNetwork = false;

  $scope.resourceInEdition = null;
  $scope.addingNewResource = false;

  $scope.initializer = function (cityConnectionJson) {
    $scope.connection = JSON.parse(cityConnectionJson).city_connection;
  };

  $scope.orderedNetworks = function () {
    return _($scope.connection.city_networks).sortBy(function (network) {
      return +network.id;
    });
  };

  $scope.orderedResources = function () {
    return _($scope.connection.city_resources).sortBy(function (resource) {
      return +resource.id;
    });
  };

  $scope.updateConnection = function () {
    $scope.updating = true;

    cmsService.updateConnection($scope.connection)
    .then(
      function () {
        $scope.updating = false;
      },
      function () {
        $scope.fatalError = true;
        $scope.updating = false;
      }
    );
  };

  $scope.addTwitterAccount = function () {
    if (!$scope.connection.twitter_accounts) {
      $scope.connection.twitter_accounts = [];
    }
    $scope.connection.twitter_accounts.push({});
  };

  $scope.removeTwitterAccount = function (twitterAccount) {
    twitterAccount._destroy = 1;
  };

  $scope.editNetwork = function (network) {
    $scope.networkInEdition = network;
  };

  $scope.newNetwork = function () {
    $scope.addingNewNetwork = true;
    $scope.networkInEdition = {};
  };

  $scope.editResource = function (resource) {
    $scope.resourceInEdition = resource;
  };

  $scope.newResource = function () {
    $scope.addingNewResource = true;
    $scope.resourceInEdition = {};
  };

}]);