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

function display(img1, img2, img3, img4) {
    jQuery(img1)
        .add(img2)
        .add(img3)
        .add(img4)
        .hide()
        .appendTo('.output')
        .fadeIn();
}

function error(img) {
    jQuery('.output')
        .append('Error loading image: ' + img.src);
}

jQuery('button').click(function(){
    var promiseImage1 = promiseImage('http://farm6.staticflickr.com/5057/5470765620_5da909055a_m.jpg'),
        promiseImage2 = promiseImage('http://farm8.staticflickr.com/7021/6531892905_852eae7d97_m.jpg'),
        promiseImage3 = promiseImage('http://farm1.staticflickr.com/48/135062825_20f63f4b1d_m.jpg'),
        promiseImage4 = promiseImage('http://farm7.staticflickr.com/6213/6333395084_4aeeb16115_m.jpg');

    jQuery.when(promiseImage1, promiseImage2, promiseImage3, promiseImage4)
        .then(display, error);
});