(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('ItemDetailController', ItemDetailController);

    ItemDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'Item', 'Category', 'User'];

    function ItemDetailController($scope, $rootScope, $stateParams, DataUtils, entity, Item, Category, User) {
        var vm = this;

        vm.item = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('todoApp:itemUpdate', function(event, result) {
            vm.item = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
