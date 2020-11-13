var APIkey = "JYxnRLGDQhYPQh5CJ7txIMYPBlmv12Zj"
var searchTerm = $("#searchTerm")
var recordNumber = $("recordNumber")
var startYear = $("startYear")
var endYear = $("endYear")
var submitBtn = $("#search")
var clearBtn = $("#clear")

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey



function searchResults() {

}


submitBtn.on("click", function (event) {
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })

})