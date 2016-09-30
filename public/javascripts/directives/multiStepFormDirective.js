angular.module("angularExercises")
    .directive("multiStep", function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                scope.forms = element.find("ng-form");
                scope.formCtrls = [];                

                angular.forEach(ctrl, function (value, key) {
                    if (value instanceof ctrl.constructor) {
                        scope.formCtrls.push(value);
                    }
                });

                scope.currentFormIndex = 0;
                scope.currentForm = angular.element(scope.forms[scope.currentFormIndex]);

                scope.forms.addClass("ng-hide");
                scope.currentForm.removeClass("ng-hide");

                scope.nextStep = function () {
                    scope.formCtrls[scope.currentFormIndex].$setSubmitted();
                    if (scope.formCtrls[scope.currentFormIndex].$valid) {
                        scope.currentForm = angular.element(scope.forms[++scope.currentFormIndex]);
                        scope.forms.addClass("ng-hide");
                        scope.currentForm.removeClass("ng-hide");
                    }
                }

                scope.previousStep = function () {
                    scope.currentForm = angular.element(scope.forms[--scope.currentFormIndex]);
                    scope.forms.addClass("ng-hide");
                    scope.currentForm.removeClass("ng-hide");
                }
            },
            restrict: "A",
            scope: true,
            require: "^form"
        }
    });