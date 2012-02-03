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

function display(/* each image node is passed in as an argument */) {
    jQuery(arguments)
        .hide()
        .css('padding','20px')
        .appendTo('.output')
        .fadeIn();
}

function error(img) {
    jQuery('.output')
        .append('Error loading image: ' + img.src);
}

function getLanyrdAttendees() {
  var url = 'http://api-v1.lanyrd.net/2011/asyncjs-security/attendees/',
      images = [];

    jQuery.getJSON(url + "?callback=?")
        .then(function(data){
            
            jQuery.each(data.attendees, function(i, attendees){
                var img = attendees.user.avatar_url;
                images.push(promiseImage(img));
            });

            jQuery.when.apply(jQuery, images)
                .then(display, error);
        });

}

jQuery('button').click(getLanyrdAttendees);