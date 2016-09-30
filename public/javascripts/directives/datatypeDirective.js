angular.module("angularExercises")
    .directive("datatype", function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                var type = attrs["datatype"];

                if (type == "alphabetic") {
                    let regex = /^[a-zA-Z]+$/;
                    ctrl.$validators.datatype = function (modelValue, viewValue) {
                        if (!viewValue) {
                            return false;
                        } else {
                            return regex.test(modelValue);
                        }
                    };
                } else if (type == "numeric") {
                    ctrl.$validators.datatype = function (modelValue, viewValue) {
                        var value = Number(viewValue);
                        if (value !== value || viewValue === "") {
                            return false;
                        } else {
                            return true;
                        }
                    };
                }
            },
            require: "ngModel"
        }
    });