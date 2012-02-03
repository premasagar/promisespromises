function show(img) {
    jQuery('.output').append(img);
}

function error(img) {
    jQuery('.output').append('Error loading image');
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
    var src = 'http://farm6.staticflickr.com/5057/5470765620_5da909055a_m.jpg';
    promiseImage(src).then(show, error);
});