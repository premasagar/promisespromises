// Master promise

var promises = [];

jQuery.when.apply(jQuery, promises)
    .then(function(){
        console.log("all done!");
    });