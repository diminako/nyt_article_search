var APIkey = "JYxnRLGDQhYPQh5CJ7txIMYPBlmv12Zj"
var searchTerm = $("#searchTerm")
var recordNumber = $("recordNumber")
var startYear = $("startYear")
var endYear = $("endYear")
var submitBtn = $("#submitBtn")
var clearBtn = $("#clearBtn")

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
})

