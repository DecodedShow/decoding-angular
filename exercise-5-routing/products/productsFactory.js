angular.module('product-app')
    .factory('productsFactory', ['$http', function ($http) {
        function getProducts() {
            return $http.get('/decoding-angular/exercise-5-routing/products/products.json');
        }
        return {
            getProducts : getProducts
        }
    }]);