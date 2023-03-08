let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showTime(){
    const date = new Date();
    return date.getHours + " Hrs, " + date.getMinutes + " Min " + date.getSeconds() + "Secs";
}

//callback
function makeAJAXCall(methodType, url, callback, async = true, data = null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(methodType+" State Change Called. Ready State: "+ xhr.onreadystatechange+" Status: "+xhr.status);
        if (xhr.readyState == 4) {
            callback(xhr.responseText);            
        } else if (xhr.status >= 400){
            console.log("Handle 400 client Error or 500 server Error");
        }
    }
    xhr.open(methodType, url, async);
    xhr.send();
    console.log(methodType+" request send to server at "+showTime());
}
//promise
function promiseCall(methodType, url, callback, async = true, data = null){
    return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function()
    xhr.onload = function(){
        console.log(methodType+" State Change Called. Ready State: "+ xhr.onreadystatechange+" Status: "+xhr.status);
        if (xhr.readyState == 4) {
            resolve(xhr.responseText);            
        } else if (xhr.status >= 400){
            reject({
                status : xhr.status,
                statusText : xhr.statusText
            });
            console.log("Handle 400 client Error or 500 server Error");
        }
    }
    xhr.onerror = function() {
        reject({
            status : this.status,
            statusText : xhttp.statusText
        });
    };
    xhr.open(methodType, url, async);
    if(data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else {
        xhr.send();
    }
    console.log(methodType+" request send to server at "+showTime());
});
}
// const getURL = "http://localhost:3000/employees/1";
// function getUserDetails(data){
//     console.log("Get User Data at : " + showTime() + " data: " + data)
// }
// makeAJAXCall("GET", getURL, getUserDetails, true);

// promiseCall("GET", getURL, true)
//     .then(responseText => {
//     console.log("Get User Data: "+responseText)
// })
// .catch(error => console.log("GET Error Status : "+JSON.stringify(error)));