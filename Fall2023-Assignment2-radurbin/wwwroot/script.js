/*
JS:
    ✔ Replace "my-api-url" under the ajax call with the url from your search API.
    ✔ Replace "my-api-key" next to "Ocp-Apim-Subscription-Key" with the api key from your search API.
    ✔ Write a function that calls the "apiSearch" function on a click of your search button.
    ✔ Write a function that changes the background image of your site on a click of your search engine name.
    ✔ Write a function that gets the current time (formatted HH:MM), loads the result into your 'time' div, and displays the div as a jQueryUI dialog window on a click of your time button.
BONUS:
    ✔ Implement a "I'm feeling lucky" button. This button should take the user to the first web page returned from your search API.
    ✔ Modify the function that changes your background image so that each click cycles through two different images without refreshing the page.
*/

// AI generated autocomplete array
var autocompleteData = [
    "Apple",
    "Banana",
    "Cherry",
    "Dolphin",
    "Elephant",
    "Football",
    "Google",
    "Hamburger",
    "Ice Cream",
    "JavaScript",
    "Kangaroo",
    "Laptop",
    "Mount Everest",
    "Netflix",
    "Orange",
    "Pineapple",
    "Queen Elizabeth II",
    "Robotics",
    "Strawberry",
    "Tiger",
    "Umbrella",
    "Volleyball",
    "Watermelon",
    "Xylophone",
    "Yoga",
    "Zebra",
    "Albert Einstein",
    "Barack Obama",
    "Catherine Zeta-Jones",
    "David Beckham",
    "Elon Musk",
    "Frida Kahlo",
    "Galileo Galilei",
    "Harrison Ford",
    "Isaac Newton",
    "Jane Austen",
    "Kobe Bryant",
    "Leonardo da Vinci",
    "Marilyn Monroe",
    "Nelson Mandela",
    "Oprah Winfrey",
    "Pablo Picasso",
    "Queen Victoria",
    "Rosa Parks",
    "Stephen Hawking",
    "Taylor Swift",
    "Usain Bolt",
    "Vincent van Gogh",
    "William Shakespeare",
    "Architecture",
    "Basketball",
    "Cats",
    "Dancing",
    "Eiffel Tower",
    "Ferrari",
    "Guitar",
    "Hiking",
    "Ice Skating",
    "Jazz Music",
    "Karate",
    "Lighthouse",
    "Mango",
    "Napoleon Bonaparte",
    "Octopus",
    "Paris",
    "Quokka",
    "Rainbow",
    "Sushi",
    "Tennis",
    "UFO",
    "Vampire",
    "Waffles",
    "X-Men",
    "Yacht",
    "Zigzag",
    "Artificial Intelligence",
    "Baseball",
    "Chocolate",
    "Dinosaurs",
    "Elephant",
    "Fishing",
    "Gardening",
    "Hawaii",
    "Ice Cream Sundae",
    "Jungle",
    "Kangaroo",
    "Lasagna",
    "Mars",
    "Ninjas",
    "Orchestra",
    "Penguins",
    "Quantum Physics",
    "Rainforest",
    "Space Exploration",
    "Tropical Paradise",
    "Unicorn",
    "Venus",
    "Waterfall",
    "Xylophone",
    "Yosemite",
    "Zeppelin",
    "Avocado",
    "Ballet",
    "Cappuccino",
    "Dolphins",
    "Eggplant",
    "Fruit Salad",
    "Giraffe",
    "Hiking Trails",
    "Ice Hockey",
    "Jungle Safari",
    "Kaleidoscope",
    "Lion King",
    "Meditation",
    "Nebula",
    "Oasis",
    "Panda",
    "Quasar",
    "Rainbow Colors",
    "Saxophone",
    "Trampoline",
    "Universe",
    "Venus Flytrap",
    "Watermelon",
    "X-ray Vision",
    "Yogurt",
    "Zookeeper",
    "Beach Vacation",
    "Candlelight Dinner",
    "Dance Party",
    "Easter Bunny",
    "Fireworks",
    "Garden Gnome",
    "Hot Air Balloon",
    "Ice Skating Rink",
    "Japanese Garden",
    "Kite Flying",
    "Lighthouse Beach",
    "Mardi Gras",
    "New York City",
    "Olive Oil",
    "Picnic Basket",
    "Quiet Retreat",
    "Roller Coaster",
    "Sunflower Field",
    "Theater Show",
    "Underwater World",
    "Valentine's Day",
    "Water Park",
    "Xmas Tree",
    "Yacht Party",
    "Zodiac Signs",
    "Adventure",
    "Bike Ride",
    "Camping",
    "Dessert",
    "Eiffel Tower",
    "Football Game",
    "Great Wall of China",
    "Hollywood",
    "Island Paradise",
    "Jungle Expedition",
    "Kung Fu",
    "Lighthouse View",
    "Magic Show",
    "Nautical Adventure",
    "Outer Space",
    "Pizza Party",
    "Quietude",
    "Rainy Day",
    "Snowflake",
    "Tropical Island",
    "Umbrella Dance",
    "Vampire Fangs",
    "Waterfall Oasis",
    "Xylophone Music",
    "Yoga Retreat",
    "Zen Garden",
    "Amusement Park",
    "Basketball Court",
    "Carnival Fun",
    "Dance Moves",
    "Eco-Friendly",
    "Fairy Tale",
    "Golf Course",
    "Honeymoon",
    "Ice Cream Parlor",
    "Jurassic Park",
    "Koi Pond",
    "Lunar Eclipse",
    "Mystical Forest",
    "Nature Trail",
    "Oceanside",
    "Pirate Ship",
    "Quaint Village",
    "Rainbow Bridge",
    "Sailing Adventure",
    "Theme Park",
    "Underwater Treasure",
    "Vibrant Colors",
    "Waterfall Rapids",
    "Xylophone Melody",
    "Yoga Poses",
    "Zen Retreat",
];


$('#query').autocomplete({
    source: autocompleteData
});

function apiSearch(lucky) {
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

            if (!lucky) {
                var len = data.webPages.value.length;
                var results = '';
                for (i = 0; i < len; i++) {
                    results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
                }

                $('#searchResults').html(results);
                //$('#searchResults').dialog();
            }
            else {
                window.location.href = data.webPages.value[0].url;
            }
        })
        .fail(function () {
            alert('error');
        });
}

$("#searchButton").click(function () {
    document.getElementById("searchResults").style.visibility = "visible";
    apiSearch(false);
});
$("#clearResults").click(function () {
    document.getElementById("searchResults").style.visibility = "hidden";
    document.getElementById("searchResults").innerHTML = "";
});

$('#feelingLucky').click(function () {
    apiSearch(true);
});

var toggle = true;

$('#title').click(function () {
    if (toggle) {
        $("body").css("background-image", "url('./css/images/altBG.png')");
    }
    else {
        $("body").css("background-image", "url('./css/images/background.webp')");
    }
    toggle = !toggle;
});

$('#timeButton').click(function () {
    document.getElementById("time").style.visibility = "visible";
    var curTime = new Date();
    var hours = curTime.getHours().toString().padStart(2, "0");
    var minutes = curTime.getMinutes().toString().padStart(2, "0");
    var formattedTime = '' + hours + ':' + minutes;
    $('#time').html('Current Time: ' + formattedTime);
    $('#time').dialog();
});