$(function() {
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
	$("#guestList").children().remove();
	let listOfGuest = [];
	data.forEach((g)=>{
		let fullName = g.last+","+g.first;
		let elem = $("<p>",{'text':fullName});
		listOfGuest.push(elem);
	});
	$("#guestList").append(listOfGuest);
}