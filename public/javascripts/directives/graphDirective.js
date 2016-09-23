angular.module("angularExercises")
    .directive("graph", function () {
        return {
            link: function (scope, element, attrs) {
                //get the data from the scope variable that equals the value of the data attribute
                var type = scope.type;
                var data = {
                    labels: scope.labels,
                    datasets: scope.datasets
                };
                var options = {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                };

                var config = {
                    type: scope.type,
                    data: data,
                    options: options
                };

                scope.$watch("type", function (newValue) {
                    config.type = newValue;
                    var tempConfig = angular.copy(config);
                    var canvas = angular.element("<canvas></canvas>");
                    element.empty().append(canvas);
                    var chart = new Chart(element.find("canvas"), tempConfig);
                });
            },
            restrict: "A",
            template: '<canvas></canvas>',
            //replace: true,
            scope: {
                type: "@graph",
                labels: "=labels",
                datasets: "=datasets"
            }
        }
    });