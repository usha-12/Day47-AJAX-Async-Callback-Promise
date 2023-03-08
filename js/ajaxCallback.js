let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showTime(){
    const date = new Date();
    return date.getHours + " Hrs, " + date.getMinutes + " Min " + date.getSeconds() + "Secs";
}

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

const getURL = "http://localhost:3000/employees/1";
function getUserDetails(data){
    console.log("Get User Data at : " + showTime() + " data: " + data)
}
makeAJAXCall("GET", getURL, getUserDetails, true);