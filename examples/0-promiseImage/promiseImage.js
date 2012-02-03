function show(img) {
    jQuery('.output').append(img);
}

function error(img) {
    jQuery('.output').text('Error loading image');
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

jQuery('button').click(function(){
    promiseImage('foo.jpg').then(show, error);
});