//code to find the repeated number
//I assumne the array of 10 munbers for this code

var arr=[0,1,2,3,4,5,6,7,7,8,];
var i,j;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            console.log(arr[i]);
            return 0;
        }
    }
}
