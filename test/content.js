alert("Hello, this is a test!")

var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            console.log(firstHref);
	    //new line goes after here
	    chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
	        }
	}
);
