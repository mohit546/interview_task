(function(){
    'use strict';
    angular.module('MBoarding')
    .config(Config);
    Config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function Config($stateProvider, $urlRouterProvider) {
        console.log('routes');

        $stateProvider.
        state('movieList', {
            url: '/movieList',
            templateUrl: './app/components/movie-list/movie-list.template.html',
            controller: 'MovieListController',
            controllerAs: 'MovieList'
        }).
        state('editMovie', {
            url: '/editMovie/:id',
            templateUrl: './app/components/edit-movie/edit-movie.template.html',
            params: {id: null},
            controller: 'EditMovieController',
            controllerAs: 'EditMovie'
        });

        $urlRouterProvider.otherwise('/movieList');
    }
})();
