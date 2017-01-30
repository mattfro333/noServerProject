angular.module('cards').controller('blackCtrl', function($scope,blackSrv){
  $scope.title = 'Deal';
  $scope.title2 = 'Hit Me';
  $scope.getDecks = function(){
    blackSrv.getDecks().then(function(response){
      $scope.decks = response.cards
    })

    }
    $scope.getCards = function(){
      console.log('working');
      blackSrv.getCards().then(function(response){
        console.log('blackCtrl #2');
        $scope.cards = response.cards
        console.log(response.cards);
        $scope.cardObj =  blackSrv.deal($scope.cards);
        console.log($scope.cardObj);

        if($scope.cardObj.count === 21){
          swal("BlackJack!");
        }
        // $scope.deal = blackSrv.deal(cards);
      })
}

      $scope.getHits = function(){

        console.log('working');
        blackSrv.getHits().then(function(response){
          $scope.cards.push(response.cards[0])
          console.log($scope.cards)
          $scope.cardObj =  blackSrv.deal($scope.cards);
          // $scope.hit = blackSrv.deal(cards);
          if($scope.cardObj.count === 21){
            swal("21!!");
          }else if($scope.cardObj.count > 21){
            swal("Bust!");
        }
})
        }

});
