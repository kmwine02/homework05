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

// saves new items added to the planner in local storage
$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("data-hour");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);
})

// puts anything from local storage back into the correct box
function checkStorage() {
    $(".time-block").each(function() {
        var hour = $(this).attr("data-hour");
        $(this).children(".description").val(localStorage.getItem(hour));
    })
}

checkHour();
checkStorage();
