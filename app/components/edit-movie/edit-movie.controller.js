(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('EditMovieController', EditMovieController);
    EditMovieController.$inject = ['$stateParams', 'MBoardingService'];
    function EditMovieController($stateParams, MBoardingService){
        console.log('EditMovieController loaded', $stateParams);

        var vm = this;
        vm.movie = null;

        vm.$onInit = function(){
            getMovie($stateParams.id);
        };

        function getMovie(id) {
            MBoardingService.getMovie(id).then(function(response){
                console.log(response);
            }, function(err){
                console.log(err);
            });
        }
    }

})();
