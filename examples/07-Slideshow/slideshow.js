function promiseTimer(time) {
  var deferred = jQuery.Deferred();

  setTimeout(function(){
    deferred.resolve("Timer ended.");
  }, time);

  return deferred.promise();
}

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

var slides = [
    'http://farm6.staticflickr.com/5057/5470765620_5da909055a_m.jpg',
    'http://farm8.staticflickr.com/7021/6531892905_852eae7d97_m.jpg',
    'http://farm1.staticflickr.com/48/135062825_20f63f4b1d_m.jpg',
    'http://farm7.staticflickr.com/6213/6333395084_4aeeb16115_m.jpg'
    ],
    position = 0;

function displayImage(img) {
    jQuery('.output')
        .empty()
        .append(img)
        .hide()
        .fadeIn()
}

function displayError(img) {

}

function incrementSlidePosition() {
    position++;
    if(position == slides.length){
        position = 0;
    }
}

function nextSlide() {
    var timer = promiseTimer(3000),
        image = promiseImage(slides[position]);

    jQuery.when(image, timer)
        .then(function(img){

            incrementSlidePosition();
            displayImage(img);
            nextSlide();

        }, displayError);
}

jQuery('button').click(nextSlide);