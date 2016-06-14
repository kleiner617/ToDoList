(function() {
    'use strict';

    angular
        .module('todoApp')
        .controller('CategoryDetailController', CategoryDetailController);

    CategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Category', 'User', 'Item'];

    function CategoryDetailController($scope, $rootScope, $stateParams, entity, Category, User, Item) {
        var vm = this;

        vm.category = entity;
        vm.items = Item.getByCategory({id: vm.category.id});

        var unsubscribe = $rootScope.$on('todoApp:categoryUpdate', function(event, result) {
            vm.category = result;
        });
        $scope.$on('$destroy', unsubscribe);


    }
})();
