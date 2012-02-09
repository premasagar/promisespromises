var api = 'http://search.twitter.com/search.json',
    request, chain;

function nextPage(data){
    for (var i = 0; i < results.length; i++) {
        jQuery('body').append('<p>' + results[i].text + '</p>');
    }
    if(data.next_page){
        jQuery.getJSON(api + data.next_page)
            .pipe(nextPage);
    } else {
        chain.resolve();
    }
}

request = jQuery.getJSON(api + '?q=javascript')
chain   = request.pipe(nextPage)
            .done(function(){
                jQuery('body').append('<p>All pages searched.</p>');
            });