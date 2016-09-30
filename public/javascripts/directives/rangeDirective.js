angular.module("angularExercises")
    .directive("range", function () {
        return {
            link: function (scope, element, attrs, ctrl) {
                var type = attrs["type"].toLowerCase();

                if (type == "date" || type == "number") {
                    if (attrs["rangeMin"]) {
                        let min = type == "number" ? Number(attrs["rangeMin"]) : attrs["rangeMin"];
                        ctrl.$validators.rangeMin = function (modelValue, viewValue) {
                            var value = type == "number" ? Number(viewValue) : viewValue;
                            if (value == "" || value !== value || value < min) {
                                return false;
                            } else {
                                return true;
                            }
                        };
                    }

                    if (attrs["rangeMax"]) {
                        let max = type == "number" ? Number(attrs["rangeMax"]) : attrs["rangeMax"];
                        ctrl.$validators.rangeMax = function (modelValue, viewValue) {
                            var value = type == "number" ? Number(viewValue) : viewValue;
                            if (value == "" || value !== value || value > max) {
                                return false;
                            } else {
                                return true;
                            }
                        };
                    }
                }
            },
            require: "ngModel"
        }
    });