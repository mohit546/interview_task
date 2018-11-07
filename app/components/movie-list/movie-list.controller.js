(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('MovieListController', MovieListController);
    MovieListController.$inject = ['$state', 'MBoardingService'];
    function MovieListController($state, MBoardingService){
        console.log('MovieListController loaded', MBoardingService);

        var vm = this;
        vm.moviesList = [];
        vm.movie = {
            name: null
        };

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
            $state.go('editMovie', {id: movie.id});
        };

        vm.deleteMovie = function(movie) {
            console.log('deleteMovie ---> ', movie.id);
            MBoardingService.deleteMovie(movie.id).then(function(response){
                console.log('deleteMovie ---> ', response);
                vm.moviesList = response;
            }, function(err){
                console.log(err);
            });
        };

        vm.addNewMovie = function() {
            console.log(vm.movie);
            MBoardingService.addNewMovie(vm.movie).then(function(response){
                console.log('addNewMovie ---> ', response);
                vm.movie = {name: null};
                $('#newMovieModal').modal('hide');
                vm.moviesList = response;
            }, function(err){
                console.log(err);
            });
        };

    }
})();
