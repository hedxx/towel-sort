
// You should implement your task here.

module.exports = function towelSort (array = []) {
  var resultArray = [];
     
  function funMin(a,b){
     return a-b;
  }

  function funMax(a,b){
     return b-a;
  }


 for ( var i = 0; i < array.length; i ++) {
    if  ( !( i % 2) ){
       array[i].sort(funMin);
    } else {
   
       array[i].sort(funMax);
   }
    resultArray = resultArray.concat (array[i]);
  }

return resultArray;
}
