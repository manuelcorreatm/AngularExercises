angular.module("angularExercises")
    .controller("navCtrl", function ($scope, $location) {
        
        $scope.showHome = function () {
            $location.path("/");
        }

        $scope.showGraph = function () {
            $location.path("/graph");
        }

        $scope.showSheet = function () {
            $location.path("/spreadsheet");
        }

        $scope.showGallery = function () {
            $location.path("/gallery");
        }

        $scope.showForms = function () {
            $location.path("/forms");
        }

        $scope.showSpoilers = function () {
            $location.path("/spoilers");
        }

        $scope.showNotes = function () {
            $location.path("/notes");
        }
    });