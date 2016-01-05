function GreetCtrl($scope, $rootScope){
    $scope.name = 'World';
    $rootScope.department = 'OA';
}

function ListCtrl($scope) {
    $scope.names = ['apple', 'orange', 'tomoto'];
}