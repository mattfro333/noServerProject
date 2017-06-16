angular.module('cards').controller('texasCtrl', function($scope,texasSrv){

  $scope.getFlop = function(){
      console.log('working');
    texasSrv.getFlop().then(function(response){
      $scope.cards = response.cards
        console.log(response.cards);
    })

    }
    $scope.getNext = function(){
        console.log('turn');
      texasSrv.getNext().then(function(response){
        $scope.cards.push(response.cards[0])
        $scope.CardNames = texasSrv.buildDeck($scope.cardNames)
        console.log($scope.cards);
      })

      }
  })
