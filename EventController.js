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
            circle2: 'img/Circle 2.png',
            circle21: 'img/Circle 2-1.png',
            circle3: 'img/Circle 3.png',
            circle31: 'img/Circle 3-1.png',
            circle4: 'img/Circle 4.png',
            circle41: 'img/Circle 4-1.png',
            events: [
                {
                    name: 'ACLU',
                    link: 'http://www.aclu-md.org/issues/voting_rights_and_elections'

                },
                {
                    name: 'Maryland PIRG Students',
                    link: 'http://marylandpirgstudents.org/campaigns/md/new-voters-project'

                }
            ]
        }

    }

);