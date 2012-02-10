var url   = 'https://search.twitter.com/search.json',
    $body = jQuery('body'),
    $container = jQuery('.output');

function displayResults(results) {
    jQuery.each(results, function(i, item){
        $container.append('<li>' + item.text + '</li>');
        $body.scrollTop($body.height());
    })
}

function searchTwitter(data) {
    if (data.results){
        displayResults(data.results);
    }

    // The first time this is run, the query is '?q=javascript'
    // The second time, the query will include Twitter's identifier for the next page of results
    if (data.next_page){
        return jQuery.getJSON(url + data.next_page + '&callback=?')
                     .then(searchTwitter);
    }
}

searchTwitter({next_page: '?q=javascript'});