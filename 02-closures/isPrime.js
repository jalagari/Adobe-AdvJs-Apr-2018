
var isPrime = (function(){
	var cache = {};

	return function isPrime(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = true;
		for(var index = 2; index * index <= n; index++){
			if (n % index === 0){
				cache[n] = false;
				break;
			}
		}
		return cache[n];
	}
})();

var isOddOrEven = (function(){
	var cache = {};

	return function isOddOrEven(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = n % 2 === 0 ? 'even' : 'odd'
		return cache[n];
	}
})();