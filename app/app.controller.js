(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('MBoardingController', MBoardingController);
    MBoardingController.$inject = ['MBoardingService'];
    function MBoardingController(MBoardingService){
        console.log('MBoardingController loaded', MBoardingService);
    }
})();
