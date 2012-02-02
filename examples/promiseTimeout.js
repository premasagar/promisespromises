function timerFinished(){
	var deferred = jQuery.Deferred();

	setTimeout(function(){
		deferred.resolve()
	}, 5000)

	return deferred.promise();
}

jQuery.when(timerFinished(), function(){
	console.log("Fully resolved");
});