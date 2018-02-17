// Setup an event listener to make an API call once auth is complete
window.addEventListener('load', function() {
    
    IN.Event.on(IN, "auth", getProfileData);

    // Handle the successful return from the API call
    function onSuccess(data) {
        console.log(data);
        window.location.href = 'views/index.html';
    }

    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }



    // Use the API call wrapper to request the member's basic profile data
    function getProfileData() {
        IN.API.Raw("/people/~").result(onSuccess).error(onError);
    }

    // Use the API call wrapper to share content on LinkedIn
  function shareContent() {
        
    // Build the JSON payload containing the content to be shared
    var payload = { 
      "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG", 
      "visibility": { 
        "code": "anyone"
      } 
    };

    IN.API.Raw("/people/~/shares?format=json")
      .method("POST")
      .body(JSON.stringify(payload))
      .result(onSuccess)
      .error(onError);
  }
});





/*function nextPage(params) {
    if (condition) {
        window.location.href = 'views/index.html';
    }
}*/