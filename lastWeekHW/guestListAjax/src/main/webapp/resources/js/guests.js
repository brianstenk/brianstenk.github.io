$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    }).done(displayGuests);
}

function displayGuests(data) {
    $('#guestList').html("");
    for (let i = 0; i < data.length; i++) {
        const guestList = data[i].first + " " +data[i].last + "<br>";
        $("#guestList").append(guestList);
    }

}