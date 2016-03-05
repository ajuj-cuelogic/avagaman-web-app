angular.module('directives')
    .directive('errorMessage', ['$timeout', '$rootScope', errorMessage]);


function errorMessage($timeout, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'app/components/directives/views/error-message.html',
        link: function($scope, $elem, $attrs) {

            var timeoutSecs = $attrs.timeoutSecs;


            var timeoutSecs = $attrs.timeoutSecs;

            $rootScope.$watch('errorOccured', function(newValue) {

                if (newValue) {
                    $timeout(function() {
                        $rootScope.errorOccured = false;
                        $rootScope.errorMessage = '';
                    }, timeoutSecs);
                }
            });
        }
    }
}
