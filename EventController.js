'use strict';

//controllers are responsible for creating scope
eventsApp.controller('EventController',
    function EventController($scope){

        $scope.sortorder = 'date';
        $scope.stateinfo = {
            name: 'Maryland',
            date: 'Monday and Friday',
            time: '5:00PM - 7:00PM',
            location: {
                where: 'Sundial on the Mall (At the end of the Fountain)'
            },
            stateImage: 'img/md-map-state-shape.png',
            circle1: 'img/Circle 1.png',
            circle11: 'img/Circle 1-1.png',
            circle2: '../cmsc434-app/img/Circle 1.png',
            circle3: '../cmsc434-app/img/Circle 1.png',
            circle4: '../stateinfopage/app/img/Circle 1.png',
            circle5: '../stateinfopage/app/img/Circle 1.png',
            events: [
                {
                    name: 'Next election',
                    date: 'April 26th'
                }
            ]
        }

    }

);