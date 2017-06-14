angular.module('cards').service('blackSrv', function($http, $q){

    this.getCards = function(){
      console.log('http request')
      return $http({
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
      })
      .then(function(response){
        console.log(response.data)
      return response.data;
    })
    }
    this.getHits = function(){
      return $http({
        method: 'GET',
        url: 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
      })
      .then(function(response){
      return response.data;
    })
    }
    // this.countValue = (cards) => {
    //   var countedCards = cards; //[{value: 'ACE'},{value: '5'}]
    //   var tens = ['JACK', 'QUEEN', 'KING'];
    //   var count = 0;
    //   for (var i = 0; i < countedCards.length; i++) { //i = 0
    //     var card = countedCards[i].value;
    //     if (Number(card)) {   // is card a number in a string or words
    //       card = Number(card); //change '5' to 5
    //       count += card;
    //     } else if (tens.indexOf(card) >= 0) {
    //       card = 10;
    //       count += card;
    //     } else if ( i !== (countedCards.length - 1) ){ // is
    //       countedCards.push(countedCards[i]);
    //       countedCards.splice(i, 1);
    //       i--;
    //     } else if (i === (countedCards.length - 1) ) {
    //       if (count < 11) {
    //         card = 11;
    //         count += card;
    //       } else {
    //         card = 1;
    //         count += card;
    //       }
    //     }
    //   }

this.sum = function (arr) {
  return arr.reduce(function(a, b) {
    return a+b;
    }, 0);
};
this.arrayObjToArrayStr = function(obj) {
  console.log(obj);
  var newArr = [];
  for (var i = 0; i < obj.length; i++) {
    console.log(obj[i].value);
    newArr.push(obj[i].value);

  }
  console.log(newArr);
  return newArr;
};
this.noAces = function(arr) {
  return arr.filter(function(i) {
    return Number(i);
    });
};
this.countAces = function (arr) {
  var cC = arr;
  var obj = {
    "ACE": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "JACK": 0,
    "QUEEN": 0,
    "KING": 0
  };
  for (var i = 0; i < cC.length; i++){
    for (var key in obj) {
      if (cC[i] === key) {
        obj[key]++;
      }
    }
     if (obj.ACE > 1) {
      cC[cC.indexOf("ACE")] = 1;
      }
  }
  return cC;
};
this.changeFaces = function (arr) {
  var tens = ['JACK', 'QUEEN', 'KING'];
  var cardObj = {
    array: arr,
    count: 0
  };
  for (var i = 0; i < arr.length; i++) {
    if (tens.indexOf(arr[i]) >= 0) {
      arr[i] = 10;
    }
  }
  console.log(cardObj);
  return cardObj;
};
this.changeNums = function (obj) {
  for (var i = 0; i < obj.array.length; i++) {
    if (!isNaN(obj.array[i])) {
      obj.array[i] = parseInt(obj.array[i], 10);
    }
  }
  console.log(obj);
   return obj;
};
this.theAce = function (obj) {
   obj.count = this.sum(this.noAces(obj.array));
   if (obj.count > 10) {
     if (obj.array.indexOf("ACE") >= 0) {
       obj.array[obj.array.indexOf("ACE")] = 1;
       obj.count += 1;
     }
   } else {
       if (obj.array.indexOf("ACE") >= 0) {
         obj.array[obj.array.indexOf("ACE")] = 11;
         obj.count += 11;
       }
   } console.log(obj);

  return obj;
};
this.deal = function (arr) {
  return this.theAce(this.changeNums(this.changeFaces(this.countAces(this.arrayObjToArrayStr(arr)))));
};
  // console.log(countedCards);


});
