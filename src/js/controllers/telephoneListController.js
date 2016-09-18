        angular.module("telephoneList").controller("telephoneListController", function($scope, $http)
        {
             $scope.app = "Telephone List"  
             $scope.contacts = [];
             $scope.operators = [];
                        
             $scope.addContact = function(contact) {
                 contact.date = new Date();                
                 $http.post("http://localhost:3412/contacts", contact).success(function(data) {
                    delete $scope.contact
                    $scope.contactForm.$setPristine();
                    $scope.contacts.push(data);
                 }).error(function (data){
                    $scope.messageError = "Ops we have a problem: " + data;
                 })
             }
             $scope.class = "selected";
             $scope.removeContacts = function(contacts)
             {
                 var contactsNotRemoved = contacts.filter(function (contact)
                 {
                     //return only the contacts that are not selected
                     //and attribute to !scope.contacts
                     if (!contact.selected) return contact;
                 });

                $http({ url: 'http://localhost:3412/contacts', 
                    method: 'DELETE', 
                    data: {data: contactsNotRemoved}, 
                    headers: {"Content-Type": "application/json;charset=utf-8"}
                }).then(function(res) {
                    $scope.contacts = res.data;
                }, function(error) {
                    $scope.messageError = "Ops we have a problem: " + error;
                });
             }
             $scope.isContactSeleted = function (contact)
             {
                 return contact.some(function (contact)
                 {
                     return contact.selected;
                 });
             }
             $scope.orderBy = function (field)
             {
                 $scope.orderByCriterion = field;
                 $scope.orderByDirection = !$scope.orderByDirection;
             }
             //get Data Sources
             var loadContacts = function()
             {
                 $http.get("http://localhost:3412/contacts").success(function(data)
                 {
                     $scope.contacts = data;
                 }).error(function (data){
                     $scope.messageError = "Ops we have a problem: " + data;
                 });
             }
             var loadOperators = function()
             {
                 $http.get("http://localhost:3412/operators").success(function(data)
                 {
                     $scope.operators = data;
                 }).error(function (data){
                     $scope.messageError = "Ops we have a problem: " + data;
                 });
             } 
             loadContacts();
             loadOperators();
        });