var url   = 'https://search.twitter.com/search.json?callback=?&',
    query = 'q=javascript',
	$body = jQuery('body'),
    $container = jQuery('.output');

getTwitterSearch(onlyReplies); // or getTwitterSearch(noReplies);

function getTwitterSearch(filter) {
    return jQuery.getJSON(url + query)
                 .pipe(filter)
                 .then(displayResults);
}

function displayResults(data) {
    jQuery.each(data.results, function(i, item){
        $container.append('<li>' + item.text + '</li>');
        $body.scrollTop($body.height());
    })
}

// Filters for twitter data

// Filtering out tweets which don't have '@' characters
function onlyReplies(data) {
    for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].text.search('@') == -1){
            data.results.splice(i,1);
        }
    }
    return data;
}

// Filtering out tweets which have '@' characters
function noReplies(data) {
    for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].text.search('@') > 0){
            data.results.splice(i,1);
        }
    }
    return data;
}