# jsutils
## function Utils ()
```
//Compare two json javascript object; if forceParseInt = true all values will be cast to int 
Utils.compareJson = function (obj1, obj2, forceParseInt) { }; 

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
Array.prototype.diff = function(a) { };

//return true if comparer is found into an array
Array.prototype.inArray = function(comparer) { }; 

//Push into an Array only if the comparer does not exist
Array.prototype.pushIfNotExist = function(element, comparer) { };
```
