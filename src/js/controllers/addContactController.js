angular.module("telephoneList").controller("addContactController",
    function ($scope, $location, contactsAPI, serialGenerator, operators) {
        $scope.operators = operators.data;
        
        $scope.addContact = function (contact) {
            contact.id = contactsAPI.generateGUID();
            contact.serial = serialGenerator.generate();
            contact.date = new Date();
            contactsAPI.saveContact(contact).success(function (data) {
                delete $scope.contact
                $scope.contactForm.$setPristine();
                $location.path("/contacts");
            }).error(function (data) {
                $scope.messageError = "We have a problem: " + data;
            })
        }
    });