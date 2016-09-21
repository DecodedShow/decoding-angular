angular.module('product-app',['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/products");

        $stateProvider
            .state('products', {
                url: "/products",
                templateUrl: "products/product-list.html",
                controller:"productsCtrl",
	            controllerAs: "products"
            })
            .state('product-detail', {
                url: "/products/:productId",
                templateUrl: "products/product-detail.html",
                controller:"productCtrl",
	            controllerAs: "product"
            });
    });