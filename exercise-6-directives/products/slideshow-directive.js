angular.module('product-app')
    .directive('slideShow', slideShow);

function slideShow($timeout) {
    var directive = {
        templateUrl: 'products/slideshow.html',
        scope: {
            slides: '='
        },
        link: link
    };
    return directive;

    function link(scope) {
        var timer;
        var autoSlide = function () {
            timer = $timeout(function () {
                scope.next();
                timer = $timeout(autoSlide, 2000);
            }, 2000);
        };

        autoSlide();

        scope.currentIndex = 0;
        scope.next = function () {
            scope.currentIndex < scope.slides.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };
        scope.prev = function () {
            scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.slides.length - 1;
        };
        scope.$watch('currentIndex', function () {
            scope.slides.forEach(function (image) {
                image.visible = false;
            });
            scope.slides[scope.currentIndex].visible = true;
        });

        scope.$on('$destroy', function () {
            $timeout.cancel(timer);
        });
    }

}