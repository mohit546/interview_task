(function(){
    'use strict';
    angular.module('MBoarding')
    .controller('EditMovieController', EditMovieController);
    EditMovieController.$inject = ['$stateParams', 'MBoardingService'];
    function EditMovieController($stateParams, MBoardingService){
        console.log('EditMovieController loaded', $stateParams);

        var vm = this;
        vm.movie = null;
        vm.tempMovie = {
            country: null,
            date: null,
            directorName: null,
            producerName: null,
            actorName: null,
            actressName: null,
            distributors: null,
            ageRatings: null,
            links: null,
            releaseType: null,
            poster: null
        };

        vm.$onInit = function(){
            getRequiredData();
            getMovie($stateParams.id);
        };

        function getRequiredData() {
            MBoardingService.getRequiredData().then(function(response){
                vm.requiredData = response;
            }, function(err){
                console.log(err);
            });
        }

        function getMovie(id) {
            MBoardingService.getMovie(id).then(function(response){
                console.log(response);
                vm.movie = response;
            }, function(err){
                console.log(err);
            });
        }

        vm.openAddNewRelease = function(){
            $('#newReleaseModal').modal({
                keyboard: false,
                backdrop: 'static',
                show: true
            });
        };

        vm.addEntry = function(record, arr){
            if(record){
                arr.push(record);
            }
            return null;
        }

        vm.removeEntry = function(index, arr){
            arr.splice(index, 1);
            return arr;
        }
    }

})();
