var dateDisplayEl = $('#currentDay')
var timeDisplayEl = $('#currentTime')
var timeBlockEl = $('.time')
var descriptionEl = $('.description')

var today = moment()
var currentHour = moment().format('H')
var currentDay = moment().format('MM DD')
var beginDay = moment().hours(8).startOf('hour')
var cloned = $('.time-block')

// creates timeblock elements

for (let i = 0; i < 16; i++) {

    
    timeBlockEl.html(beginDay.format('h a')).addClass(colorCode())
    beginDay.add(1, 'h')  

    descriptionEl.html(localStorage.getItem(timeBlockEl.text()))
    console.log(descriptionEl.html())
    if (descriptionEl.html() === "") {
        descriptionEl.html('<span>--insert event here--</span>')
    }

    // console.log(parseInt((today.format('HH'))))
    // console.log(parseInt(beginDay.format('HH')))
    
    cloned.replaceWith().clone(true, true).appendTo('.container')
    }
    
    // color codes time blocks based on past present or future
    function colorCode() {
        
        
        if (today.format('DD HH') == beginDay.format('DD HH')) {
            cloned.removeClass('future past').addClass('present')
        } else if (today.isAfter(beginDay)) {
            cloned.removeClass('present future').addClass('past')
        } else if (beginDay.isAfter(today)) {
            cloned.removeClass('past present').addClass('future')
        } 
    }

// event listener for event entry save button
// saves event info to localstorage
$(".saveBtn").click(function () {
    var text = $(this).siblings('.description').text()
    var time = $(this).siblings('.hour').text()
    localStorage.setItem(time, text)
    console.log(time, text)
    // console.log($(this).siblings('.description').text())
})

window.addEventListener("load", (event) => {
    console.log(localStorage.getItem($('.time-block').siblings('.time').text()))
  });

// displays date in header
dateDisplayEl.text(today.format('MMMM Do YYYY'))

// displays current time in header
timeDisplayEl.text(today.format('hh:mm a'))
