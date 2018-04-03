var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

//Sort
//Filter
//GroupBy

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});


describe('Sorting', function(){
	describe('Default Sorting (products by id)', function(){
		function sort(){
			for(var i = 0; i < products.length - 1; i++ )
				for(var j = i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	describe('Sort any list by any attributes', function(){
		function sort(list, attrName){
			for(var i = 0; i < list.length - 1; i++ )
				for(var j = i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe('Products by cost', function(){
			sort(products, 'cost');
			console.table(products);
		});

		describe('Products by units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe('Sort any list by anything', function(){
		function sort(list, comparerFn){
			for(var i = 0; i < list.length - 1; i++ )
				for(var j = i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe('Products by value (cost * units)', function(){
			function productComparerByValue(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			}
			sort(products, productComparerByValue);
			console.table(products);
		});
	});
});

describe('Filtering', function(){
	describe('All Costly products (cost > 50)', function(){
		function filterCostlyProducts(){
			var result = [];
			for(var index = 0, count = products.length; index < count; index++){
				if (products[index].cost > 50)
					result.push(products[index]);
			}
			return result;
		}
		var costlyProuducts = filterCostlyProducts();
		console.table(costlyProuducts);
	});

	describe('Any list by any criteria', function(){
		function filter(list, criteria){
			var result = [];
			for(var index = 0, count = list.length; index < count; index++){
				if (criteria(list[index]))
					result.push(list[index]);
			}
			return result;
		}

		function negate(criteria){
			return function(product){
				return !criteria(product);
			}
		}

		describe("Products By Cost", function(){
			var costlyProductCriteria = function(product){
				return product.cost > 50;
			};
			describe('All Costly products ( cost > 50 )', function(){
				
				var costlyProducts = filter(products, costlyProductCriteria);
				console.table(costlyProducts);
			});

			/*var affordableProductCriteria = function(product){
				return product.cost <= 50;
			};*/
			/*var affordableProductCriteria = function(product){
				return !costlyProductCriteria(product);
			}*/
			var affordableProductCriteria = negate(costlyProductCriteria);

			describe('All affordable products ( cost <= 50 )', function(){
				
				var affordableProducts = filter(products, affordableProductCriteria);
				console.table(affordableProducts);
			});
		});

		describe('Products By Units', function(){
			var underStockedProductCriteria = function(product){
				return product.units < 50;
			};
			describe('All understocked products', function(){
				
				var underStockedProducts = filter(products, underStockedProductCriteria);
				console.table(underStockedProducts);
			})

			/*var wellStockedProductCriteria = function(product){
				return !underStockedProductCriteria(product);
			};*/

			var wellStockedProductCriteria = negate(underStockedProductCriteria);

			describe('All wellstocked products', function(){
				var wellStockedProducts = filter(products, wellStockedProductCriteria);
				console.table(wellStockedProducts);
			})
		});
	})
});



