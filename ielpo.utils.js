function Utils () {}
/*
 * Compare two json javascript object
 * if forceParseInt = true all values will be cast to int 
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
 * Return diff between two arrays 
 */
Array.prototype.diff = function(a) {
	return this.filter(function(i) {return a.indexOf(i) < 0;});
};

Utils.arrayDiff = function (a,b){
	return a.filter(function(i) {return b.indexOf(i) < 0;});
}

/*
 * return true if comparer is found into an array
 * else false
 */
Array.prototype.inArray = function(comparer) { 
	for(var i=0; i < this.length; i++) { 
		if(comparer(this[i])){
			return true;
		} 
	}
	return false; 
}; 

/*
 * Push into an Array only if not exists
 * example
 * * var array = [{ name: "tom", text: "tasty" }];
 * * var element = { name: "tom", text: "tasty" };
 * * array.pushIfNotExist(element, function(e) { return e.name === element.name && e.text === element.text; });
 */
Array.prototype.pushIfNotExist = function(element, comparer) { 
	if (!this.inArray(comparer)) {
		this.push(element);
	}
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
}


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
}
