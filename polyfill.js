
Array.prototype.myMap = function(callbackfn){
    var arr = []; 
    for(var i=0; i<this.length; i++){
        arr.push(callbackfn(this[i], i, this)); 
    }

    return arr; 
}

Array.prototype.myFilter = function(callbackfn) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (callbackfn(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myReduce = function(callbackfn, initialValue) {
    var accumulator = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;

    for (var i = startIndex; i < this.length; i++) {
        accumulator = callbackfn(accumulator, this[i], i, this);
    }
    
    return accumulator;
}

var arr1 = [1, 2, 3, 4, 5];

var arr2 = arr1.myFilter((num) => num % 2 != 0);
console.log(arr2); 


var arr3 = arr1.myMap((num) => num * 2);      
console.log(arr3); 


var arr4 = arr1.myReduce((acc, num) => acc + num, 0);
console.log(arr4); 
