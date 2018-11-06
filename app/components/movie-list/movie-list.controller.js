(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('MovieListController', MovieListController);
    MovieListController.$inject = ['MBoardingService'];
    function MovieListController(MBoardingService){
        console.log('MovieListController loaded', MBoardingService);
    }
})();
