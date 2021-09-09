var currentHour = moment().hours();

// sets the current date at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// checks what hour of the day it is and formats the table based on that time
function checkHour() {
    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("data-hour"));
        console.log(typeof hour);
        console.log(typeof currentHour);

        if (hour < currentHour) {
            $(this).addClass("past");
        } else if (hour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}


