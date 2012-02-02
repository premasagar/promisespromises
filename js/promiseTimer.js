var promiseTimer;

function timerFinished() {
    var deferred = jQuery.Deferred(),
        interval, count = 6;
    
    interval = setInterval(function(){
        count--;
        jQuery('.timer-status').text('Timer started ' + count);
    }, 1000);

    setTimeout(function(){
        clearInterval(interval);
        jQuery('.timer-status').text('Timer started!');
        deferred.resolve();
    }, count * 1000);

    return deferred.promise();
}

promiseTimer = jQuery
                .when(timerFinished())
                .then(function(){
                    jQuery('.timer-status').text('Timer finished.')
                    jQuery('.example-2')
                        .removeClass('unresolved rejected')
                        .addClass('resolved');
                })
                .promise();

promises.push(promiseTimer);