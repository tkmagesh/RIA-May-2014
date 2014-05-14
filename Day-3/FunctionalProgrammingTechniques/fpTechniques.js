var products = [
	{id : 9, name : "pen", units : 50, cost : 10, category : 10},
	{id : 3, name : "hen", units : 30, cost : 50, category : 20},
	{id : 5, name : "ten", units : 90, cost : 20, category : 10},
	{id : 7, name : "den", units : 20, cost : 80, category : 20},
	{id : 8, name : "len", units : 60, cost : 40, category : 10},
	{id : 2, name : "zen", units : 70, cost : 30, category : 20}
]

function sort(list){
	//implementation to sort the list by "id"
	//assumption is that the list is an array of objects having an "id" attribute
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function sort(list, comparerFn){
	/*ComparerFn returns 
		1 if left > right
		-1 if left < right
		0 if left = right
	*/
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function productComparerByCost(p1,p2){
	if (p1.cost > p2.cost) return 1;
	if (p2.cost < p2.cost) return -1;
	return 0;
}
console.log("before sorting");
console.table(products);
sort(products,productComparerByCost);
console.table("After sorting by cost using comparerFunction")
console.table(products);

function sort(list, attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

sort(products,"units");
console.table("After sorting by units using attribute name")
console.table(products);

function min(list, attributeSelectorFn){
	var result = attributeSelectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = attributeSelectorFn(list[i]);
		if (result > value) result = value;
	}
	return result;
}

function costSelectorFn(p){
	return p.cost;
}

console.log("Minimum cost (using attributeSelectorFn) = ", min(products,costSelectorFn));

function min(list, attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++){
		var value = list[i][attrName];
		if (result > value) result = value;
	}
	return result;
}

console.log("Minimum units (using attrName) = ", min(products,"units"));

function min(list, attrSelector){
	var attributeSelectorFn = typeof attrSelector === "function" ? attrSelector : function(item){ return item[attrSelector];};
	var result = attributeSelectorFn(list[0]);
	for(var i=1;i<list.length;i++){
		var value = attributeSelectorFn(list[i]);
		if (result > value) result = value;
	}
	return result;
}

/*Create the following functions
	1. max
	2. sum
	3. average
	4. countBy
	5. filter
*/

function groupBy(list,attrSelector){
	var attributeSelectorFn = typeof attrSelector === "function" ? attrSelector : function(item){ return item[attrSelector];};
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = attributeSelectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var categorizeProductByCost = function(product){ return product.cost > 50 ? "costly" : "affordable"};

var productsByCostCategory = groupBy(products,categorizeProductByCost);

console.table(productsByCostCategory.costly)

console.table(productsByCostCategory.affordable)



var categories = [
	{id : 10, name : "stationary"},
	{id : 20, name : "grocery"},
]

/*
	write a "join" function that will join any 2 collections
	var productsWithCatogeryName = join(products, categories, .......);
	"productsWithCatogeryName" should be the following

	[
		{id : 9, name : "pen", units : 50, cost : 10, category : "stationary"},
		{id : 3, name : "hen", units : 30, cost : 50, category : "grocery"},
		{id : 5, name : "ten", units : 90, cost : 20, category : "stationary"},
		{id : 7, name : "den", units : 20, cost : 80, category : "grocery"},
		{id : 8, name : "len", units : 60, cost : 40, category : "stationary"},
		{id : 2, name : "zen", units : 70, cost : 30, category : "grocery"}
	]

*/