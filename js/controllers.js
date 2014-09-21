'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('LandingPageController', [function () {
        console.log("LandingPageController");
    }])
    .controller('WaitlistController', ['$scope',  function ($scope) {
        // Connect $scope.parties to live Firebase data.
        //var partiesRef = new Firebase('https://waitandeat-sergio.firebaseio.com/parties');
        $scope.parties = []; //$firebase(partiesRef);

        // Object to store data from waitlist form.
        $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};

        // Function to save a new party to the waitlist.
        $scope.saveParty = function () {
            $scope.parties.push($scope.newParty);
            $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};
        };
    }]);