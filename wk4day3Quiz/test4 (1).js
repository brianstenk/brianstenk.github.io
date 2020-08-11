
"use strict";

//GET JSON from ".../computers.json"
$(function(){
    $("#btns").click(() =>{
        $.get("computer.json", { "id": $(this).text() })
            .done(function (data) {
                $("#cpu").text(data.cpu);
                $("#ram").text(data.ram);
                $("#storage").text(data.storage);
                $("#price").text(data.price);
            });
    });
});
