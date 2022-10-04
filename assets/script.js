var dateDisplayEl = $('#currentDay')
var timeDisplayEl = $('#currentTime')
var timeBlockEl = $('.time')

var today = moment()
var currentHour = moment().format('H')
var beginDay = '01-01-2022 08:00:00 AM'

var past
var present
var future

// creates timeblock elements
$('.time-block').clone().appendTo('.container')
$('.time-block').clone().appendTo('.container')
$('.time-block').clone().appendTo('.container')


// color codes time blocks based on past present or future
// console.log(currentHour)

// saves event info to localstorage

// displays date in header
dateDisplayEl.text(today.format('MMMM Do YYYY'))

// displays current time in header
timeDisplayEl.text(today.format('hh:mm a'))

timeBlockEl.text(moment(beginDay).format('H a'))

// event listener for event entry save button
