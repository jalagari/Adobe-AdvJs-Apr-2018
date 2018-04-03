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
		function sort(){

		}
		describe('Products by cost', function(){
			//sort();
			console.table(products);
		});

		describe('Products by units', function(){
			//sort();
			console.table(products);
		});
	});

	/*describe('Sort any list by anything', function(){
		describe('Products by value (cost * units)', function(){
			//sort();
			console.table(products);
		});
	});*/
});

describe('Filtering', function(){
	/*describe('All Costly products)', function(){
		//sort();
		console.table(products);
	});*/
});



