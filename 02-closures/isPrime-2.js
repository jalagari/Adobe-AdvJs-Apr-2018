
var isPrime = (function(){
	var cache = {};

	function algo(n){
		console.log('processing ', n);
		for(var index = 2; index * index <= n; index++){
			if (n % index === 0){
				return false;
			}
		}
		return true;
	}

	return function isPrime(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algo(n);
		return cache[n];
	}
})();

var isOddOrEven = (function(){
	var cache = {};

	function algo(n){
		console.log('processing ', n);
		return n % 2 === 0 ? 'even' : 'odd'
	}

	return function isOddOrEven(n){
		if (typeof cache[n] === 'undefined')
			cache[n] = algo(n);
		return cache[n];
	}
})();