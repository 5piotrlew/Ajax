'use strict';

$(function () {
    console.log('hello');

    /*    $.ajax({
            url: "http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl",
            dataType: "json",
            success: function (resultJSON) {
                console.log(resultJSON);
            },
            error: function (msg) {
                console.log(msg);
            }

        });*/

    $.getJSON('http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
        console.log(data);
        
        
        
        
        
    })

});