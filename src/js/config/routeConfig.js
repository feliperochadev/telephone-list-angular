angular.module("telephoneList").config(function ($routeProvider) {
    $routeProvider.when("/contacts", {
        templateUrl: "src/views/contacts.html",
        controller: "telephoneListController",
        resolve: {
            contacts: function (contactsAPI) {
                return contactsAPI.getContacts();
            }
        }
    });
    $routeProvider.when("/add-contact", {
        templateUrl: "src/views/add-Contact.html",
        controller: "addContactController",
        resolve: {
            operators: function (operatorsAPI) {
                return operatorsAPI.getOperators();
            }
        }
    });
    $routeProvider.when("/contactDetails/:id", {
        templateUrl: "src/views/contact-details.html",
        controller: "contactDetailController",
        resolve: {
            contact: function(contactsAPI, $route){
                return contactsAPI.getContact($route.current.params.id);
            }
        }
    });
    $routeProvider.otherwise({ redirectTo: "/contacts" })
});