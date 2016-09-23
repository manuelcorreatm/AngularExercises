angular.module("angularExercises")
    .directive("sheet", function () {
        return {
            link: function (scope, element, attrs) {
                var container = element.find("div")[0];
                var settings = {
                    data: scope[attrs.sheet],
                    rowHeaders: angular.isDefined(attrs.rowHeaders),
                    colHeaders: angular.isDefined(attrs.colHeaders),
                    columnSorting: angular.isDefined(attrs.columnSorting)
                }
                var hot = new Handsontable(container, settings);
            },
            template: "<div></div>"
        }
    });