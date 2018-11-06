(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('MovieListController', MovieListController);
    MovieListController.$inject = ['$state', 'MBoardingService'];
    function MovieListController($state, MBoardingService){
        console.log('MovieListController loaded', MBoardingService);

        var vm = this;
        vm.moviesList = [];
        vm.movieName = null;

        vm.$onInit = function(){
            getMoviesList();
        };

        function getMoviesList() {
            MBoardingService.getMoviesList().then(function(response){
                console.log('moviesList ---> ', response);
                vm.moviesList = response;
            }, function(err){
                console.log(err);
            });
        }

        vm.addNewMovieModal = function() {
            $('#newMovieModal').modal({
                keyboard: false,
                backdrop: 'static',
                show: true
            });
        };

        vm.editMovie = function(movie) {
            $state.go('editMovie', {id: movie});
        };

        vm.addNewMovie = function() {
            console.log(vm.movieName);
            vm.movieName = null;
            $('#newMovieModal').modal('hide');
        };

    }
})();
