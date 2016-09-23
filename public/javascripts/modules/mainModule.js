angular.module("angularExercises", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when("/graph", {
            templateUrl: "/graph.html"
        });

        $routeProvider.when("/spreadsheet", {
            templateUrl: "/sheet.html"
        });

        $routeProvider.when("/gallery", {
            templateUrl: "/gallery.html"
        });

        $routeProvider.when("/forms", {
            templateUrl: "/forms.html"
        });

        $routeProvider.when("/spoilers", {
            templateUrl: "/spoilers.html"
        });

        $routeProvider.when("/notes", {
            templateUrl: "/notes.html"
        });

        $routeProvider.otherwise({
            templateUrl: "/home.html"
        });

    });