"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/
// variables used
var thisDay = new Date("August 30, 2018");
// stores the test date August 30, 2018
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
// the starting html code to create a table
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);
// creates another date variable storing 14 days in advanced
// converts the time from milliseconds to seconds, minutes, hours, then days

// for loop to create the table entries
for(var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   // gets the event date from the lht_list.js file
   var eventDay = eventDate.toDateString();
   // turns the date from eventDate var into a date string
   var eventTime  = eventDate.toLocaleTimeString();
   // takes the time form the eventDate var and puts it into a string

   if(thisDay <= eventDate && eventDate <= endDate){
      // only works if thisDay is less than or equal to eventDate and eventDate is less than or equal to endDate
      tableHTML = tableHTML + "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
      // adds information to the table based on the vars from the for loop
   }
}

tableHTML = tableHTML + "</table>";
// closes the table created from the tableHTML var

document.getElementById("eventList").innerHTML = tableHTML;
// plugs the code from tableHTML var into the html div element with the id eventList