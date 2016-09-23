angular.module("angularExercises")
    .directive("multipleCoincide", function ($rootScope, pubsub) {
        return {
            link: function (scope, element, attrs, ctrl) {
                var eventName = "multiple-coincide" + "-" + element.attr("multiple-coincide");
                var form = element[0].form;

                //Add the checking to the $parsers array
                ctrl.$parsers.push(function (viewValue) {
                    var currentValue = viewValue;
                    var valid = true;
                    var inputValue;
                    angular.forEach(form, function (input, fieldName) {
                        if (input.attributes["multiple-coincide"]) {
                            if (input.attributes["multiple-coincide"].value == element.attr("multiple-coincide")) {
                                inputValue = input.value.trim();
                                if (currentValue != inputValue) {
                                    valid = false;
                                }
                                currentValue = inputValue;
                            }
                        }
                    });
                    //send event with error (publish)
                    pubsub.publish(eventName, {
                        valid: valid
                    });
                    return viewValue;
                });

                //subscribe to event
                pubsub.subscribe(eventName, function (topic, args) {
                    ctrl.$setValidity("multiple-coincide", args.valid);
                });

            },
            require: "ngModel"
        }
    });