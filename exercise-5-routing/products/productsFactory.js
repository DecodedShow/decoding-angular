angular.module('product-app')
    .factory('productsFactory', ['$http', function ($http) {
        
        return {
            getProduct : getProduct,
            getProducts : getProducts
        };

        function getProduct(id) {
            return $http.get('/decoding-angular/exercise-5-routing/products/product' + id + '.json')
                .then(getProductComplete)
                .catch(getProductFailed);
        }

        function getProducts() {
            return $http.get('products.json')
                .then(getProductsComplete)
                .catch(getProductsFailed)
        }

        function getProductComplete(response) {
            return response.data
        }
        function getProductFailed(error) {
            console.log('Failed to get Products', error.data);
        }

        function getProductsComplete(response) {
            return response.data
        }
        function getProductsFailed(error) {
            console.log('Failed to get Products', error.data);
        }
        
        
    }]);