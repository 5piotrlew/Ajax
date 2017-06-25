'use strict';

function pobierzDane() {
    var httpReq = new XMLHttpRequest();
    
    httpReq.open("GET","http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl", true);
    
    httpReq.onreadystatechange = function () {
        console.log(httpReq.readyState);
        
        if (httpReq.readyState == 4) {
            console.log(httpReq.status);
            
            if(httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpReq.status == "undefined"){
                httpReq = null;
            }
        }
    }
    httpReq.send();
}
pobierzDane();