# jsutils
## function Utils ()
```
/*
 * Compare two valid JSON object
 * return {} if equals
 * return (obj2-obj1) if not
 * ====
 * usage:
 * compareJson({a: 5, b: 3}, {a: 5, b: 4, c: 3}) //{b: 4, c: 3}
 * compareJson({a: 5, b: 4, c: 3}, {a: 5, b: 3}); //{b: 3}
 */
Utils.compareJson = function (obj1, obj2, forceParseInt) { }; 
/*
 * Compare two valid JSON object in both directions 
 * return [{},{}] if equals
 * return [(obj2-obj1), (obj1-obj2)} if not 
 * ====
 * twoWaysCompareJson({a: 5, b: 4, c: 3}, {a: 5, b: 3}); //[{b: 3}, {b: 4, c: 3}]
 * */
Utils.twoWaysCompareJson = function(obj1, obj2, forceParseInt) { };

//return true if is a function
Utils.isFunction(functionToCheck) { }

/*
 * return true if value is undefined, null, isNotFunction, with length = 0 or an object without keys
 * else return false
 */
Utils.isUndefinedNullOrEmpty(value){ };

//Return diff between two arrays 
Utils.arrayDiff = function (a,b){ };

//This object is empty ? Output: boolean
Utils.isEmpty = function (arrToCheck){ };

//Removes all holes from an array; if removeEmptyObject = true , removes also empty objects "{}"
Utils.removeHolesFromArray = function(arrayWithHoles, removeEmptyObject){ };

//Input: date; Output: date formatted as dd/mm/yyyy hh24:mi (String)
Utils.formatDate_DDMMYYYYHHMM = function (dateToFormat) { };
```
## Array prototype constructors
```
//Return diff between two arrays 
Array.prototype.difference = function(a) { };

//return true if comparer is found into an array
Array.prototype.isInArray = function(comparer) { }; 

//Push into an Array only if the comparer does not exist
Array.prototype.pushIfNotExist = function(element, comparer) { };
```
## Thanks to
```
Refresh-SF used for js minify: http://refresh-sf.com
```
