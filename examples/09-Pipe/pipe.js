var j    = jQuery,
    api  = 'http://api.twitter.com/1/',
    name = 'aaronacerboni';

j.getJSON(api + 'users/show.json?screen_name=' + name)
    .pipe(function(data){

        var tweet = data.statuses.in_reply_to_status_id_str;
        return j.getJSON(api + 'statuses/show/' + tweet + '.json');

    })
    .done(function(data){

        j('body').html(name + ' last replied to ' + data.user.name);

    });