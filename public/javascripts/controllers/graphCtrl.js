angular.module("angularExercises")
    .controller("graphCtrl", function ($scope) {
        $scope.types = [
            { label: "bar", value: "bar" },
            { label: "line", value: "line" },
            { label: "pie", value: "pie" },
            { label: "radar", value: "radar" },
            { label: "doughnut", value: "doughnut" },
            { label: "bubble", value: "bubble" },
            { label: "polarArea", value: "polarArea" }];
        $scope.graphType = $scope.types[0].value;
        $scope.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
        $scope.datasets = [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }];
    });