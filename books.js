var BookCtrl = function($scope) {
    $scope.books = [];

    $scope.addBook = function() {
        $scope.books.push($scope.newBook);
        $scope.newBook = {};
    };

    $scope.deleteBook = function(newBook) {
        var index = $scope.books.indexOf(newBook)
        $scope.books.splice(index, 1);
    };
};