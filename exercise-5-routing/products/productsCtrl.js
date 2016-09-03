angular.module('product-app')
    .controller('productsCtrl',['productsFactory', productsCtrl]);

function productsCtrl (productsFactory) {
    var vm = this;

    productsFactory.getProducts().then(function (resp) {
        vm.list = resp.data;
    });
    vm.title = 'Taco Tuesdays';
    vm.description = "You can't just eat one!";
}