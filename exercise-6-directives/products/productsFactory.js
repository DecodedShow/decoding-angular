angular.module('product-app')
    .factory('productsFactory', ['$http', function ($http) {
        
        return {
            getProduct : getProduct,
            getProducts : getProducts
        };

        function getProduct(id) {
            return $http.get('/decoding-angular/exercise-6-directives/products/product' + id + '.json');
        }
        
        function getProducts() {
            return $http.get('/decoding-angular/exercise-6-directives/products/products.json');
        }
        
        
    }]);