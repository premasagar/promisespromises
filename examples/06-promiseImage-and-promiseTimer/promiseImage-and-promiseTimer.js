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

function promiseTimer(time) {
  var deferred = jQuery.Deferred();

  setTimeout(function(){
    deferred.resolve("Timer ended.");
  }, time);

  return deferred.promise();
}

function display(img) {
  jQuery('.output').append(img);
}

function error(img) {
    jQuery('.output')
        .append('Error loading image: ' + img.src);
}

jQuery('button').click(function(){
    var image = promiseImage('http://farm6.staticflickr.com/5057/5470765620_5da909055a_m.jpg'),
        timer = promiseTimer(3000);

    jQuery.when(image, timer)
        .then(display, error);
});