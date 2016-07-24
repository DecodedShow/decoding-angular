angular.module('product-app')
    .factory('productsFactory', ['$http', function ($http) {
        function getProducts() {
            return $http.get('products.json');
        }
        return {
            getProducts : getProducts
        }
    }]);