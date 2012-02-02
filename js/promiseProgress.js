// Master promise container
var promises = [];

jQuery.apply.when(x, y)
	.then(function(){
		console.log("all done!");
	})