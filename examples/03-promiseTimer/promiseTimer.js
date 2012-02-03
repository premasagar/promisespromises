function promiseTimer(time) {
  var deferred = jQuery.Deferred();

  setTimeout(function(){
    deferred.resolve("Timer ended.");
  }, time);

  return deferred.promise();
}

function display(msg) {
    jQuery('.output').text(msg);
}

jQuery('button').click(function(){
    promiseTimer(2000).then(display);
});