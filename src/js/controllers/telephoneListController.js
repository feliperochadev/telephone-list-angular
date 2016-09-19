angular.module("telephoneList").controller("telephoneListController",
    function ($scope, serialGenerator, contactsAPI, contacts) {
        $scope.app = "Telephone List"
        $scope.contacts = contacts.data;

        $scope.class = "selected";
        $scope.removeContacts = function (contacts) {
            var contactsNotRemoved = contacts.filter(function (contact) {
                //return only the contacts that are not selected
                //and attribute to !scope.contacts
                if (!contact.selected) return contact;
            });

            contactsAPI.deleteContacts(contactsNotRemoved).then(function (res) {
                $scope.contacts = res.data;
            }, function (error) {
                $scope.messageError = "We have a problem: " + error;
            });
        }
        $scope.isContactSeleted = function (contact) {
            return contact.some(function (contact) {
                return contact.selected;
            });
        }
        $scope.orderBy = function (field) {
            $scope.orderByCriterion = field;
            $scope.orderByDirection = !$scope.orderByDirection;
        }
    });