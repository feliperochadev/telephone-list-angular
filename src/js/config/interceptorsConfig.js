angular.module("telephoneList").config(function ($httpProvider)
{
    $httpProvider.interceptors.push("errorInterceptor");
    $httpProvider.interceptors.push("timeStampInterceptor");
});