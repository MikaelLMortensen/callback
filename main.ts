
let callbackStr = 'mycallback({"$id":"1","currentDateTime":"2023-11-25T14:15+01:00","utcOffset":"01:00:00","isDayLightSavingsTime":false,"dayOfTheWeek":"Saturday","timeZoneName":"Central Europe Standard Time","currentFileTime":133453953101897145,"ordinalDate":"2023-329","serviceResponse":null});';

let parts = callbackStr.split(',');
let currentDateTimePart = parts[1];
parts = currentDateTimePart.split('":"');
currentDateTimePart = parts[1].replaceAll('"', '');

parts = currentDateTimePart.split('T');
let date = parts[0];
let time = parts[1];
parts = time.split('+');
time = parts[0];
parts = date.split('-');

let year = parseInt(parts[0]);
let month = parseInt(parts[1]);
let day = parseInt(parts[2]);

parts = time.split(':')
let hour = parseInt(parts[0]);
let minute = parseInt(parts[1]);

timeanddate.setDate(month, day, year);
timeanddate.set24HourTime(hour,minute,0);

basic.showString(timeanddate.dateTime());

