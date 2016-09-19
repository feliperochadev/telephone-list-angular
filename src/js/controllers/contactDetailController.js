angular.module("telephoneList").controller("contactDetailController",
    function ($scope, $routeParams, contact) {
        $scope.contact = contact.data;
});