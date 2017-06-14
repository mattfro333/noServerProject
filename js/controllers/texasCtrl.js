angular.module('cards').controller('texasCtrl', function($scope,texasSrv){

  $scope.getFlop = function(){
      console.log('working');
    texasSrv.getFlop().then(function(response){
      $scope.cards = response.cards
        console.log(response.cards);
    })

    }
  })
