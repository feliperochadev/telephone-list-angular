angular.module("telephoneList").directive("uiAlert", function () {
    return {
        templateUrl: "src/views/uiAlertTemplate.html",
        replace: true,
        //restrict used for the type of directive
        //A = attribute, E = Element, C = Class and M = comment
        restrict: "E",
        scope: {
            title: "@",
        },
        transclude: true
    }
});