angular.module('directives')
    .directive('inputDialogueBox', [inputDialogueBox]);

function inputDialogueBox() {
    return {
        restrict: 'E',
        scope: {
            displayMessage: '@',
            headerText: '@',
            customButtons: '=',
            showInputBox: '@'
        },
        templateUrl: 'app/components/directives/views/input-dialogue-box.html',
        link: function(scope, elem, attrs) {
            scope.message = '';
            scope.customButtons = [];
            scope.message = '';

            scope.displayMessage = scope.message.length ? scope.displayMessage : "Are you sure?";
            scope.customButtons = scope.customButtons ? scope.customButtons : [];
            scope.headerText = scope.headerText ? scope.headerText: 'Header';
            scope.showInputBox = scope.showInputBox;
        }
    }
}
