(function(){
    'use strict';
    angular.module('MBoarding')
    .factory('MBoardingService', MBoardingService);
    MBoardingService.$inject = ['$q'];

    function MBoardingService($q){
        console.log('MBoardingService loaded');
        var now = new Date();
        var ageRatings = [
            {
                id: 1,
                name: 'G – General Audiences',
                info: 'All ages admitted. Nothing that would offend parents for viewing by children.'
            },{
                id: 2,
                name: 'PG – Parental Guidance Suggested',
                info: 'Some material may not be suitable for children. Parents urged to give "parental guidance". May contain some material parents might not like for their young children.'
            },{
                id: 3,
                name: 'PG-13 – Parents Strongly Cautioned',
                info: 'Some material may be inappropriate for children under 13. Parents are urged to be cautious. Some material may be inappropriate for pre-teenagers.'
            },{
                id: 4,
                name: 'R – Restricted',
                info: 'Under 17 requires accompanying parent or adult guardian. Contains some adult material. Parents are urged to learn more about the film before taking their young children with them.'
            },{
                id: 5,
                name: 'NC-17 – Adults Only',
                info: 'No One 17 and Under Admitted. Clearly adult. Children are not admitted.'
            }
        ];

        var releaseType = [
            {
                id: 1,
                type: 'Cinema'
            },{
                id: 2,
                type: 'DVD'
            },{
                id: 3,
                type: 'TV'
            },
        ];

        var movieList = [
            {
                id: '1',
                name: 'Avengers',
                poster: './resources/avengers.jpg',
                release: [
                    {
                        country: 'USA',
                        date: now.getTime(),
                        directorName: ['Dir Ravi Shankar', 'Dir Aditya Chopra'],
                        producerName: ['Pro Ravi Shankar', 'Pro Aditya Chopra'],
                        actorName: ['Actor Ravi Shankar', 'Actor Aditya Chopra'],
                        actressName: ['Bhumika', 'Priyanka'],
                        distributor: ['20th century fox', 'Warner Bros.', 'Lionsgate'],
                        ageRating: {
                            id: 1,
                            name: 'G – General Audiences',
                            info: 'All ages admitted. Nothing that would offend parents for viewing by children.'
                        },
                        links: [
                            {
                                name: 'Promo Video',
                                url: 'https://www.google.com/search?source=hp&ei=693hW-3XOcfqvgS_gJy4Aw&q=Avengers&oq=Avengers&gs_l=psy-ab.3..0i131k1j0l2j0i131k1j0l2j0i131k1j0l3.605.2753.0.3049.2.2.0.0.0.0.147.289.0j2.2.0....0...1c.1.64.psy-ab..0.1.142....0.W1NpiPru9Ng'
                            }
                        ],
                        releaseType: {
                            id: 1,
                            type: 'Cinema'
                        },
                        poster: './resources/avengers.jpg'
                    },{
                        country: 'IN',
                        date: new Date(now.getFullYear(), now.getMonth(), now.getDate()+1).getTime(),
                        directorName: ['Dir Ravi Shankar', 'Dir Aditya Chopra'],
                        producerName: ['Pro Ravi Shankar', 'Pro Aditya Chopra'],
                        actorName: ['Actor Ravi Shankar', 'Actor Aditya Chopra'],
                        actressName: ['Bhumika', 'Priyanka'],
                        distributor: ['20th century fox', 'Warner Bros.', 'Lionsgate'],
                        ageRating: {
                            id: 2,
                            name: 'PG – Parental Guidance Suggested',
                            info: 'Some material may not be suitable for children. Parents urged to give "parental guidance". May contain some material parents might not like for their young children.'
                        },
                        links: [
                            {
                                name: 'Promo Video',
                                url: 'https://www.google.com/search?source=hp&ei=693hW-3XOcfqvgS_gJy4Aw&q=Avengers&oq=Avengers&gs_l=psy-ab.3..0i131k1j0l2j0i131k1j0l2j0i131k1j0l3.605.2753.0.3049.2.2.0.0.0.0.147.289.0j2.2.0....0...1c.1.64.psy-ab..0.1.142....0.W1NpiPru9Ng'
                            }
                        ],
                        releaseType: {
                            id: 1,
                            type: 'Cinema'
                        },
                        poster: './resources/avengers.jpg'
                    }
                ]
            }
        ];

        var MBoardingData = {
            getMoviesList: getMoviesList,
            getMovie: getMovie
        };
        return MBoardingData;

        function uniqueIdGenerator(name){
            return Math.floor(10000 + Math.random() * 90000) + name;
        };

        function findRecord(id){
            for(var i = 0, l = movieList.length; i < l; i++){
                if(movieList[i].id === id){
                    return movieList[i]
                }else{
                    return null;
                }
            }
        };

        function getMoviesList() {
            var deferred = $q.defer();
            if(movieList.length){
                deferred.resolve(movieList);
            }else{
                deferred.reject([]);
            }
            return deferred.promise;
        }

        function getMovie(id) {
            var deferred = $q.defer();
            if(movieList.length){
                deferred.resolve(findRecord(id));
            }else{
                deferred.reject([]);
            }
            return deferred.promise;
        }
    }
})();
