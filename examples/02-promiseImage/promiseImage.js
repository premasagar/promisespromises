function promiseImage(src){
    var $img = jQuery('<img>'),
        img = $img[0],
        deferred = jQuery.Deferred();

    $img.on('load', function(){
           deferred.resolve(img);
       })
       .on('error', function(){
           deferred.reject(img);
       })
       .attr('src', src);

    return deferred.promise();
}

function display(img1, img2) {
    jQuery(img1).add(img2)
        .hide()
        .appendTo('.output')
        .fadeIn();
}

function error(img) {
    jQuery('.output')
        .append('Error loading image: ' + img.src);
}

jQuery('button').click(function(){
    var promiseImage1 = promiseImage('foo.jpg'),
        promiseImage2 = promiseImage('bar.jpg');

    jQuery.when(promiseImage1, promiseImage2)
        .then(display, error);
});