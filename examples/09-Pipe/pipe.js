var api = 'https://search.twitter.com/search.json',
    request, chain;

function nextPage(data){
    for (var i = 0; i < data.results.length; i++) {
        jQuery('body').append('<p>' + data.results[i].text + '</p>');
    }
    if(data.next_page){
        jQuery.getJSON(api + data.next_page + '&callback=?')
            .pipe(nextPage);
    } else {
        chain.resolve();
    }
}

request = jQuery.getJSON(api + '?q=javascript&callback=?');
chain   = request.pipe(nextPage)
            .done(function(){
                jQuery('body').prepend('<p>All pages searched.</p>');
            });