(function(){
    'use strict';
    angular.module('MBoarding')
    .factory('MBoardingService', MBoardingService);

    function MBoardingService(){
        console.log('MBoardingService loaded');

        return {};
    }
})();
