var url   = 'https://search.twitter.com/search.json',
    query = '?q=javascript',
	$body = jQuery('body'),
    $container = jQuery('ol#container');

function nextPage(data) {
    displayResults(data.results);
    if(data.next_page){
        getPage(data.next_page);
    }
}

function displayResults(results) {
    jQuery.each(results, function(i, item){
        $container.append('<li>' + item.text + '</li>');
        $body.scrollTop($body.height());
    })
}

function getPage(next_page) {
    if(next_page) query = next_page;
    jQuery.getJSON(url + query + '&callback=?')
        .pipe(nextPage);
}

getPage();