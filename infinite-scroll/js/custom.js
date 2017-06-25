'use strict';

$(function () {
    console.log("https://jsonplaceholder.typicode.com/users");

    $(window).scroll(function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
/*        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {*/


            $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {

              

                
                for (var i = 0; i < data.length ; i++){
                    
                $("body").append('<p>Nazwa użytkownika to: ' + data[i].name + '</p>');
                $("body").append('<p>ID użytkownika: ' + data[i].id + '</p>');
                $("body").append('<p>URL: ' + data[i].website + '</p>');
                $("body").append('<hr>');
                }

            });





        }
    });

});