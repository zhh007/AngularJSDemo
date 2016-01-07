var userInfoModule=angular.module('UserInfoModule', []);

userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope){
    $scope.userInfo={
        email:'1111@qq.com',
        password:'1111',
        autoLogin:true
    };
    $scope.getFormData=function(){
        console.log($scope.userInfo);
    }
    $scope.setFormData=function(){
        $scope.userInfo={
            email:'test@qq.com',
            password:'test',
            autoLogin:false
        };
    }
    $scope.resetForm=function(){
        $scope.userInfo={
            email:'1111@qq.com',
            password:'1111',
            autoLogin:true
        };
    }
}]);