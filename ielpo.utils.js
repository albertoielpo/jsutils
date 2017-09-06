
/*
 * Compare two json javascript object
 * if forceParseInt = true all values will be cast to int 
 */
Object.prototype.compareJson = function (obj2, forceParseInt) {
	var obj1 = this;
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
