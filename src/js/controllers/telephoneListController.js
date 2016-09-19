        angular.module("telephoneList").controller("telephoneListController", 
            function($scope, contactsAPI, operatorsAPI, serialGenerator)
        {
             $scope.app = "Telephone List"  
             $scope.contacts = [];
             $scope.operators = [];
                        
             $scope.addContact = function(contact) {
                 contact.serial = serialGenerator.generate();
                 contact.date = new Date();                
                 contactsAPI.saveContact(contact).success(function(data) {
                    delete $scope.contact
                    $scope.contactForm.$setPristine();
                    $scope.contacts.push(data);
                 }).error(function (data){
                    $scope.messageError = "We have a problem: " + data;
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

                contactsAPI.deleteContacts(contactsNotRemoved).then(function(res) {
                    $scope.contacts = res.data;
                }, function(error) {
                    $scope.messageError = "We have a problem: " + error;
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
                 contactsAPI.getContacts().success(function(data)
                 {
                     $scope.contacts = data;
                 }).error(function (data){
                     $scope.messageError = "We have a problem: " + data;
                 });
             }
             var loadOperators = function()
             {
                 operatorsAPI.getOperators().success(function(data)
                 {
                     $scope.operators = data;
                 }).error(function (data){
                     $scope.messageError = "We have a problem: " + data;
                 });
             } 
             loadContacts();
             loadOperators();
        });