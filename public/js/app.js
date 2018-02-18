// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);
}

// Handle the successful return from the API call
function onSuccess(data) {
    console.log(data);
    let url = data.siteStandardProfileRequest.url;
    localStorage.name = data.firstName;
    localStorage.headline = data.headline;
    localStorage.lastName = data.lastName;
    localStorage.setItem(`url`, url);
}

function moreInfo(data) { // estos datos no estan en basic profile
    localStorage.picture = data.pictureUrl;
    window.location.href = 'views/home.html';
}

// Handle an error response from the API call
function onError (error) {
    console.log(error);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
    IN.API.Raw("/people/~").result(onSuccess).error(onError);
    IN.API.Raw('people/~:(id,num-connections,pictureUrl)').result(moreInfo).error(onError);
}
