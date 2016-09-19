//using factory
angular.module("telephoneList").factory("contactsAPI", function($http, config)
{   
    var _getContacts = function() 
    {
        return $http.get(config.baseUrl + "/contacts");
    };

    var _saveContact = function (contact)
    {
        return $http.post(config.baseUrl + "/contacts", contact)
    }

    var _deleteContacts = function (contactsNotRemoved)
    {
        return $http({ url: config.baseUrl + '/contacts', 
                    method: 'DELETE', 
                    data: {data: contactsNotRemoved}, 
                    headers: {"Content-Type": "application/json;charset=utf-8"}
                })
    }
        return {
        getContacts: _getContacts,
        saveContact: _saveContact,
        deleteContacts: _deleteContacts
    };
});