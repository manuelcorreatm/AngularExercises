angular.module("angularExercises")
    .directive("censor", function () {
        return {
            link: function (scope, element, attrs) {
                
                var text = element.text();
                if (attrs["type"] == "highlightable") {
                    element.css("color", "black");
                    element.css("background-color", "black");
                } else if (attrs["type"] == "unaccessable") {
                    element.text(text.replace(/./g, "*"));
                }
                
            },
            restrict: "EA"
        }
    });