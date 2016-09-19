//using service (constructor)
angular.module("telephoneList").service("operatorsAPI", function($http, config)
{
    this.getOperators = function()
    {
        return $http.get(config.baseUrl + "/operators");
    }
});