angular.module("angularExercises")
    .controller("notesCtrl", function ($scope) {

        var created = "";
        $scope.notes = {};

        (function getNotes() {
            for (let key in localStorage) {
                if (key.startsWith("note")) {
                    let note = JSON.parse(localStorage.getItem(key));
                    $scope.notes[note.created] = note;
                }
            }
        })();

        $scope.saveNote = function () {
            var note = {
                title: $scope.title,
                content: $scope.content,
            };
            if (created != "") {
                console.log("Edited");
                note.created = parseInt(created);
                note.modified = Date.now();
            } else {
                console.log("Added");
                note.created = Date.now();
                note.modified = null;
            }

            $scope.notes[note.created] = note;
            $scope.clear();
            localStorage.setItem("note" + note.created, JSON.stringify(note));
            
        }

        $scope.clear = function () {
            $scope.title = "";
            $scope.content = "";
            created = "";
        }

        $scope.editNote = function (noteId) {
            var note = $scope.notes[noteId];
            $scope.title = note.title;
            $scope.content = note.content;
            created = note.created;
        }

        $scope.deleteNote = function (noteId) {
            delete $scope.notes[noteId];
            localStorage.removeItem("note"+noteId);
        }

        $scope.$watchCollection("notes", function (newValue, oldValue) {
            console.log(newValue);
            
            
        });

    });