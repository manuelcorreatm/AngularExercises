angular.module("angularExercises")
    .directive("errorMessage", function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                scope.errors = ctrl.$error;
                scope.defer = attrs["defer"];
                scope.name = attrs["for"];
                scope.text = element.text();
                scope.type = attrs["type"].replace(/-([a-z])/gi, function (match, group1) {
                    return group1.toUpperCase();
                });
                element.empty();

                if (scope.defer) {
                    scope.$watch(function () {
                        return ctrl.$submitted;
                    }, function (newValue) {
                        if (newValue) {
                            createWatcher();
                        }
                    });
                } else {
                    createWatcher();
                }

                function createWatcher() {
                    scope.$watchCollection("errors[type]", function (newErrors) {
                        for (var index in newErrors) {
                            if (newErrors[index].$name == scope.name) {
                                //console.log("Add Error Message");
                                element.text(scope.text);
                                return;
                            }
                        }
                        //console.log("Remove Error Message");
                        element.empty();
                    });
                }

            }, 
            restrict: "E",
            require: "^form",
            scope: {}
        }
    });