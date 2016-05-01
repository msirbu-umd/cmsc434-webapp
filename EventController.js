'use strict';

//controllers are responsible for creating scope
eventsApp.controller('EventController',
    function EventController($scope){

        $scope.sortorder = 'date';
        $scope.stateinfo = {
            name: 'Maryland',
            stateImage: 'img/md-map-state-shape.png',
            events: [
                {
                    name: 'Voter ID Laws',
                    description: 'Please show the following forms of ID: A copy of a current and valid photo ID, a ' +
                    'copy of a current utility bill, bank statement, government check, paycheck or other government ' +
                    'document that shows your name and address.'

                },
                {
                    name: 'Advocacy',
                    description: ' The ACLU of Maryland: fights for the rights of the underrepresented to vote. ' +
                    'The New Voters Project: a nonpartisan effort to help register young people and get them to the ' +
                    'polls on Election Day.'

                },
                {
                    name: 'News: Early Voting',
                    description: 'Early voting in Maryland began April 14 and runs through Thursday, April 21. Polling ' +
                    'places are open from 10 a.m. until 8 p.m. those days.'

                },
                {
                    name: 'Absentee Voting',
                    description: 'A registered Maryland voter may fill out an absentee ballout online digitally, ' +
                    'fill out a form downloaded online and turn in a physical form, or go to their local board of ' +
                    'elections and fill out and turn in the form '

                }
            ],
            event1: {
                name: 'Voter ID Laws',
                description: 'Please show the following forms of ID: A copy of a current and valid photo ID, a ' +
                'copy of a current utility bill, bank statement, government check, paycheck or other government ' +
                'document that shows your name and address.'
            }
        }

    }

);