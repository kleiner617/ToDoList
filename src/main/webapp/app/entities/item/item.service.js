(function() {
    'use strict';
    angular
        .module('todoApp')
        .factory('Item', Item);

    Item.$inject = ['$resource', 'DateUtils'];

    function Item ($resource, DateUtils) {
        var resourceUrl =  'api/items/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dueDate = DateUtils.convertDateTimeFromServer(data.dueDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' },
            'getByCategory': {
                method: 'GET',
                isArray: true,
                url: 'api/items/category/:id'
            }
        });
    }
})();
