angular.module('product-app')
	.directive('slideshow',slideshow);

function slideshow () {
	var vm = this;

	productsFactory.getProducts().then(function (resp) {
		vm.list = resp.data;
	});
	vm.title = 'Taco Tuesdays';
	vm.description = "You can't just eat one!";
}