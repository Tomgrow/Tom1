function setUsername() {
    var username = document.getElementById("username").value;
    document.cookie = "username=" + username + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    alert("Username set successfully!");
}

function getUsername() {
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf("username=") == 0) {
            return decodeURIComponent(cookie.substring("username=".length));
        }
    }
    return "";
}

function displayUsername() {
    var username = getUsername();
    if(username) {
        alert("Username is: " + username);
    } else {
        alert("No username found.");
    }
}

function deleteUsername() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    alert("Username deleted successfully!");
}