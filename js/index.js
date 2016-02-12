 $(document).ready(getQuote);

function getQuote() {
  $.ajax({
    dataType: "jsonp",
    jsonpCallback: "parseQuote",
    url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote",
    success: function(results) {
      $('#quote').text(results.quoteText);
      $('#author').text(results.quoteAuthor);
    }
  });
}

$(document).ready(function() {
  getQuote();
  $('.new-quote').click(getQuote);
  
});