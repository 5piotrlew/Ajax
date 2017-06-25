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

/*$(window).scrollTop()*/
    $('#get-data').click(function () {
        $.getJSON('http://echo.jsontest.com/userID/108/userName/Akademia108/userURL/akademia108.pl', function (data) {
            $("body").append('<p>Nazwa uzytkownika to: ' + data.userName + '</p>');
            $("body").append('<p>ID uzytkownika to: ' + data.userID + '</p>');
            $("body").append('<p>URL to: ' + data.userURL + '</p>');
        });
    });

});