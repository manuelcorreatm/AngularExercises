angular.module("angularExercises")
    .directive("gallery", function ($http) {
        return {
            link: function (scope, element, attrs) {
                //scope.query = "pokemon";
                var key = "AIzaSyANJPY3bOT5iBdT8jkPq0_OR8MU6HvusPk";
                var cx = "011224388624238538700:gg6vn3hovj8";

                var gallery = element.find("#gallerySearchResults");

                gallery.on('scroll', function () {
                    if (gallery[0].scrollTop + gallery[0].offsetHeight > gallery[0].scrollHeight) {
                        scope.$apply(scope.nextPage);
                    }
                });

                scope.searchImages = function () {
                    if (scope.query == "") {
                        return;
                    }
                    var request = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&searchType=image" + "&q=" + scope.query;
                    $http.get(request).success(function (data) {
                        scope.items = [];
                        scope.data = data;
                        for (let item of data.items) {
                            scope.items.push(item);
                        }
                    });
                };

                scope.nextPage = function () {
                    if (scope.data.queries.nextPage[0].startIndex > 100) {
                        return;
                    }

                    var request = "https://www.googleapis.com/customsearch/v1?key=" + key + "&cx=" + cx + "&searchType=image" +
                        "&q=" + scope.data.queries.nextPage[0].searchTerms + "&start=" + scope.data.queries.nextPage[0].startIndex;

                    $http.get(request).success(function (data) {
                        scope.data = data;
                        for (let item of data.items) {
                            scope.items.push(item);
                        }
                    });
                };
                                
            }, 
            templateUrl: "galleryDirectiveTemplate.html", 
            restrict: "EA",
            scope: true
        }
    });