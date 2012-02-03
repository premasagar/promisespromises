function display(amount) {
    $('.output').append('Number of attendees: ' + amount);
}

jQuery('button').click(function(){
  var url = 'http://api-v1.lanyrd.net/2011/asyncjs-security/attendees/';

  jQuery.getJSON(url + "?callback=?")
      .then(function(data){
          display(data.attendees.length);
      });
});