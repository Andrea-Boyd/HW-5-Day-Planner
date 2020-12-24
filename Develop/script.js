var currentDayEl = $("#currentDay");

var currentDay = moment().format('LLL');
currentDayEl.text(currentDay);

var startTime = 9;
var endTime = 17;
var currentHour = moment().format('HH')

for (i=startTime; i<=endTime; i++){
    var newRow = $("<div>").attr("class","row");
    var newHour = $("<p>").attr("class", "hour col-1")
    var newTextArea = $("<textarea>").attr("id", i)
    var newBtn = $("<button>").attr("class", "saveBtn col-1").text("save");

    var textAreaText = localStorage.getItem(i);
    if(i<12){
        newHour.text(i+" AM")
    }else if(i==12){
        newHour.text(i+ " PM")
    }else {
        newHour.text((i-12) + " PM")
    }

    if(i<currentHour){
        newTextArea.attr("class", "col-10 past")
    }else if(i==currentHour){
        newTextArea.attr("class", "col-10 present")
    }else {
        newTextArea.attr("class", "col-10 future")
    }
    
    newTextArea.text(textAreaText);

    newRow.append(newHour);
    newRow.append(newTextArea);
    newRow.append(newBtn);

    $("#timeblocks").append(newRow);
}

function saveToLocal(event){
    event.preventDefault()
    var key = $(this).prev().attr("id");
    var val = $(this).prev().val();
    localStorage.setItem(key, val)
}

$(document).on("click", "button", saveToLocal)
// console.log(currentDay)