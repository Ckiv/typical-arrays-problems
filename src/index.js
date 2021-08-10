
exports.min = function min (array) {
    if(typeof array != "undefined" && array != null && array.length > 0){
        let result=array[0];
        array.forEach(function(item, index, array) {
            if (item<result) {
                result=item;
            }
        });
        return result;
    }
    else {return 0}
}

exports.max = function max (array) {
    if(typeof array != "undefined" && array != null && array.length > 0){
        let result=array[0];
        array.forEach(function(item, index, array) {
            if (item>result) {
                result=item;
            }
        });
        return result;
    }
    else {return 0}
}

exports.avg = function avg (array) {
    if(typeof array != "undefined" && array != null && array.length > 0){
        let result=0;
        array.forEach(function(item, index, array) {
                result+=item;
        });
        return result/array.length;
        }
    else {return 0}
}
