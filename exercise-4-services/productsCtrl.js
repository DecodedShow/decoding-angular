angular.module('product-app')
    .controller('productsCtrl',['productsFactory', productsCtrl]);

function productsCtrl (productsFactory) {
    var vm = this;

    productsFactory.getProducts().then(function (data) {
        vm.list = data;
    });
    vm.title = 'Taco Tuesdays';
    vm.description = "You can't just eat one!";
}