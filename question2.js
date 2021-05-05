//maximum consecutive one's
function maximum_ones(arr){
     var count=0;
     var temp=0;
    var i;
     for(i=0; i<arr.length; i++){
         if(arr[i]== 0)
           count = 0;
         else
         count++;
         temp = count > temp ? count : temp;
     }
     return temp;
}

var arr1 = [0,0,1,1,0,0,0,1,0,0,1,1,1,0];
var arr2 = [1,0,0,0,0,1,0,0,0,1];

console.log(maximum_ones(arr1));
console.log(maximum_ones(arr2));