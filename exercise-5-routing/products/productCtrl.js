angular.module('product-app')
    .controller('productCtrl',['productsFactory', productCtrl]);

function productCtrl (productsFactory) {
    var vm = this;

    productsFactory.getProducts().then(function (resp) {
        vm.list = resp.data;
    });
    vm.title = 'Blog Title';
    vm.description = 'about this blog';
}