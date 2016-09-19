//using factory
angular.module("telephoneList").factory("contactsAPI", function ($http, config) {
    var _getContacts = function () {
        return $http.get(config.baseUrl + "/contacts");
    };

    var _getContact = function (id) {
        return $http.get(config.baseUrl + "/contacts/" + id);
    };

    var _saveContact = function (contact) {
        return $http.post(config.baseUrl + "/contacts", contact)
    }

    var _deleteContacts = function (contactsNotRemoved) {
        return $http({
            url: config.baseUrl + '/contacts',
            method: 'DELETE',
            data: { data: contactsNotRemoved },
            headers: { "Content-Type": "application/json;charset=utf-8" }
        })
    }

    var _generateGUID = function () {

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    return {
        getContacts: _getContacts,
        getContact: _getContact,
        saveContact: _saveContact,
        deleteContacts: _deleteContacts,
        generateGUID: _generateGUID
    };
});