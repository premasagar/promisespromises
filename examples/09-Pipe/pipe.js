var url   = 'https://search.twitter.com/search.json',
    query = '?q=javascript',
    $body = jQuery('body');

function nextPage(data) {
    displayResults(data.results);
    if(data.next_page){
        getPage(data.next_page);
    }
}

function displayResults(results) {
    var html = '';
    jQuery.each(results, function(i, data){
        html += '<p>' + data.text + '</p>';
    })
    $body.html(html);
}

function getPage(next_page) {
    if(next_page) query = next_page;
    jQuery.getJSON(url + query + '&callback=?')
        .pipe(nextPage);
}

getPage();