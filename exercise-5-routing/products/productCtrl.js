angular.module('product-app')
    .controller('productCtrl',['$state','productsFactory', productCtrl]);

function productCtrl ($state,productsFactory) {
    var vm = this;
    var currentProduct = $state.params.productId;
    productsFactory.getProduct(currentProduct).then(function (resp) {
        vm.detail = resp.data;
    });
}