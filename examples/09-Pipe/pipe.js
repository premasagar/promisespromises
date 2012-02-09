var api = 'https://search.twitter.com/search.json';

function nextPage(data) {
    displayResults(data.results);
    if(data.next_page){
        jQuery.getJSON(api + data.next_page + '&callback=?')
            .pipe(nextPage);
    }
}

function displayResults(results) {
    for (var i = 0; i < results.length; i++) {
        jQuery('body').append('<p>' + results[i].text + '</p>');
    }
}

jQuery.getJSON(api + '?q=javascript&callback=?')
    .pipe(nextPage);