function Utils () {}
/*
 * Compare two valid JSON object
 * return {} if equals
 * return (obj2-obj1) if not
 * ====
 * usage:
 * compareJson({a: 5, b: 3}, {a: 5, b: 4, c: 3}) //{b: 4, c: 3}
 * compareJson({a: 5, b: 4, c: 3}, {a: 5, b: 3}); //{b: 3}
 */
Utils.compareJson = function (obj1, obj2, forceParseInt) {
	var ret = {};
	if(forceParseInt){
		for(var i in obj2) {
			if(!obj1.hasOwnProperty(i) || parseInt(obj2[i]) !== parseInt(obj1[i])) { 		
				ret[i] = obj2[i]; 
			}
		}		
	}else{
		for(var i in obj2) { 	
			if(!obj1.hasOwnProperty(i) || obj2[i] !== obj1[i]) { 
				ret[i] = obj2[i]; 
			} 		
		} 
	}		
	return ret; 
}; 

/*
 * Compare two valid JSON object in both directions 
 * return [{},{}] if equals
 * return [(obj2-obj1), (obj1-obj2)} if not 
 * ====
 * twoWaysCompareJson({a: 5, b: 4, c: 3}, {a: 5, b: 3}); //[{b: 3}, {b: 4, c: 3}]
 * */
Utils.twoWaysCompareJson = function (obj1, obj2, forceParseInt) { 
	var arrList = new Array();
	arrList.push(Utils.compareJson(obj1, obj2, forceParseInt));
	arrList.push(Utils.compareJson(obj2, obj1, forceParseInt));
	return arrList;
};

Utils.arrayDiff = function (a,b){
	return a.filter(function(i) {return b.indexOf(i) < 0;});
}

/*
 * Return diff between two arrays 
 */
Array.prototype.difference = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};

/*
 * return true if comparer is found into an array
 * else false
 */
Array.prototype.isInArray = function(comparer) { 
	for(var i=0; i < this.length; i++) { 
		if(comparer(this[i])){
			return true;
		} 
	}
	return false; 
}; 

/*
 * Push into an Array only if not exists
 */
Array.prototype.pushIfNotExist = function(element, comparer) { 
	if (!this.isInArray(comparer)) {
		this.push(element);
	}
};

Utils.isFunction = function(functionToCheck) {
	var getType = {};
	return functionToCheck
			&& getType.toString.call(functionToCheck) === '[object Function]';
};

/*
 * Return true if value is undefined or null or isNotFunction and (with length = 0 if array or an object without keys or empty string)
 * else return false
 */
Utils.isUndefinedNullOrEmpty = function(value){		
	if(typeof value === "undefined" || value == null)
		return true;
	
	if(!isFunction(value)){
		if((Array.isArray(value) && value.length == 0) || 
				(typeof value === "object" && Object.keys(value).length == 0) || 
				(typeof value === "string" && value == ""))
			return true;
	}
	
	return false;
};

/*
 * this object is empty ?
 */
Utils.isEmpty = function (arrToCheck){
	if(typeof arrToCheck === "undefined" || arrToCheck == null){
		return true;		
	}else{
		if(arrToCheck.length == 0){
			return true;			
		}else{
			for(var key in arrToCheck) {
				if(typeof key !== "undefined"){
					return false;
				}
			 }
		}
	}
	
	return true;
};

/*
 * Removes all holes from an array
 * if removeEmptyObject = true , removes also empty objects "{}"
 * * Example
 * * var arrayWithHoles = new Array();
 * * arrayWithHoles[0] = {id: 1, di: 2};
 * * arrayWithHoles[1] = {}; 	//will be remove if removeEmptyObject = true
 * * arrayWithHoles[2] = {id: 1, di: 2};
 * * arrayWithHoles[3] = {};	//will be remove if removeEmptyObject = true
 * * arrayWithHoles[4] = {id: 1, di: 2};
 * * arrayWithHoles[5] = {id: 1, di: 2};
 * * arrayWithHoles[10] = {id: 1, di: 2};
 * * [6][7][8][9] = will be remove cause undefined
 */
Utils.removeHolesFromArray = function(arrayWithHoles, removeEmptyObject){
	for(var ii=0,index=0; ii<arrayWithHoles.length; ii++){
		if(!arrayWithHoles[index] || (removeEmptyObject && arrayWithHoles[index] && Utils.isEmpty(arrayWithHoles[index]))){
			arrayWithHoles.splice(index,1);
			ii--;
		}else{
			index++;
		}
	}
	return arrayWithHoles;
};


Utils.formatDate_DDMMYYYYHHMM = function (dateToFormat) {
	var day = dateToFormat.getDate();
	var month = dateToFormat.getMonth() + 1;
	var year = dateToFormat.getFullYear();
	var hours = dateToFormat.getHours();
	var minutes = dateToFormat.getMinutes();
	day = day < 10 ? "" + 0 + day : day;
	month = month < 10 ? "" + 0 + month : month;
	hours = hours < 10 ? "" + 0 + hours : hours;
	minutes = minutes < 10 ? "" + 0 + minutes : minutes;
	res = day  + "/" + month + "/" +	year + " " + hours + ":" + minutes;	
	return res;
};

/*
 * return true if two valid JSON object are equals
 * else return false 
 */
Utils.areTheseJsonEquals = function(obj1, obj2, forceParseInt){
	//check if the two objects are valid
	if(Utils.isUndefinedNullOrEmpty(obj1) && Utils.isUndefinedNullOrEmpty(obj2))
		return true;

	if((Utils.isUndefinedNullOrEmpty(obj1) && !Utils.isUndefinedNullOrEmpty(obj2)) || (!Utils.isUndefinedNullOrEmpty(obj1) && Utils.isUndefinedNullOrEmpty(obj2)))
		return false;

	//if two objects are valid
	var res = twoWaysCompareJson(obj1, obj2, forceParseInt);
	if(res && res[0] && res[1] && Utils.isUndefinedNullOrEmpty(res[0]) && Utils.isUndefinedNullOrEmpty(res[1]))
		return true;
	
	return false;
};

/*
 * Swap object keys and values
 * swapKeysValues({a:1, b:2}) //{1:"a", 2:"b"}
 */
Utils.swapKeysValues = function (obj) {
	var newObj = {};
	for (var prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			newObj[obj[prop]] = prop;
		}
	}
	return newObj;
};