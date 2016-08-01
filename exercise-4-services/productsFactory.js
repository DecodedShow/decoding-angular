angular.module('product-app')
    .factory('productsFactory', ['$http', function ($http) {
        return {
            getProducts: getProducts
        };

        function getProducts() {
            return $http.get('products.json')
                .then(getProductsComplete)
                .catch(getProductsFailed)
        }

        function getProductsComplete(response) {
            return response.data
        }
        function getProductsFailed(error) {
            console.log('Failed to get Products', error.data);
        }
    }]);