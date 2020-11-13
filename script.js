var APIkey = "JYxnRLGDQhYPQh5CJ7txIMYPBlmv12Zj"
var searchTerm = $("#searchTerm")
var recordNumber = $("recordNumber")
var startYear = $("startYear")
var endYear = $("endYear")
var submitBtn = $("#submitBtn")
var clearBtn = $("#clearBtn")

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey



function searchResults() {

}


submitBtn.on("click", function (event) {
    event.preventDefault();
    var APIkey = "JYxnRLGDQhYPQh5CJ7txIMYPBlmv12Zj"

    var search = searchTerm.val()
    var record = recordNumber.val()
    var start = startYear.val()
    var end = endYear.val()

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&facet_fields=source&facet=true&begin_date=" + start + "0101&end_date=" + end + "0101&api-key=" + APIkey

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        console.log(response.response.docs[0].headline.main)
        // response.docs[0].headline.print_headline

        // response.docs[0]
    })

})