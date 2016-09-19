angular.module("telephoneList").directive("uiAccordions", function(){
    return{
        controller: function ($scope, $element, $attrs)
        {
            var accordions = [];
            this.registerAccordion = function (accordion)
            {
                accordions.push(accordion);
            }
            this.closeAll = function ()
            {
                accordions.forEach(function (accordion)
                {
                    accordion.isOpened = false;
                })
            }
        }
    }
});

angular.module("telephoneList").directive("uiAccordion", function(){
    return{
        templateUrl: "src/views/accordionTemplate.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: function(scope, element, attrs, ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function ()
            {
                var isOpenedTemp = scope.isOpened;
                ctrl.closeAll();
                scope.isOpened = !isOpenedTemp              
            };
        }
    };
});