function show(img) {
    jQuery('body').append(img);
}

function error(img) {
    jQuery('body').text('Error loading image');
}

function promiseImage(src){
    var img = jQuery('<img>'),
        deferred = jQuery.Deferred();

    img.load(function(){
           deferred.resolve(img);
       })
       .error(function(){
           deferred.reject(img);   
       })
       .attr('src', src);

    return deferred.promise();
}

promiseImage('foo.jpg').then(show, error);