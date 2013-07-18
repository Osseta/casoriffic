chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request == "logindetails") {
    var user = localStorage['casoriffic-user'];
    var pass = localStorage['casoriffic-password'];
    var doSubmit = localStorage['casoriffic-submit'];
    sendResponse({username: user, password: pass, doSubmit: doSubmit});
  }
});
