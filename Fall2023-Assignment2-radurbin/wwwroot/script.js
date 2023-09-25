/*
JS:
    - Replace "my-api-url" under the ajax call with the url from your search API.
    - Replace "my-api-key" next to "Ocp-Apim-Subscription-Key" with the api key from your search API.
    - Write a function that calls the "apiSearch" function on a click of your search button.
    - Write a function that changes the background image of your site on a click of your search engine name.
    - Write a function that gets the current time (formatted HH:MM), loads the result into your 'time' div, and displays the div as a jQueryUI dialog window on a click of your time button.
BONUS:
    - Implement a "I'm feeling lucky" button. This button should take the user to the first web page returned from your search API.
    - Modify the function that changes your background image so that each click cycles through two different images without refreshing the page.
*/

function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '810523bc63ea4a5fbf992a219c471a44'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}
