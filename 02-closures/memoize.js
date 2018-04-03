/*
function memoize(algo){
	var cache = {};

	return function (n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algo(n);
		return cache[n];
	}
}
*/

function memoize(algo){
	var cache = {};

	return function (){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = algo.apply(this, arguments);
		return cache[key];
	}
}