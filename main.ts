

function GetDateTimeFromCallback(callbackString : string)
{
    let dateObject = { year: 1900, month: 1, day: 1, hour: 0, minute: 0, second: 0, daylightsaving: false, errorCode : 0 }
    dateObject.errorCode = 1;
    if (callbackString == null || callbackString == '')
        return dateObject;

    dateObject.errorCode = 2;
    let parts = callbackString.split(',');
    if (parts.length < 2)
        return dateObject;

    dateObject.errorCode = 3;
    let currentDateTimePart = parts[1];
    parts = currentDateTimePart.split('":"');
    if (parts.length != 2)
        return dateObject;
    currentDateTimePart = parts[1].replaceAll('"', '');

    dateObject.errorCode = 4;
    parts = currentDateTimePart.split('T');
    if (parts.length != 2)
        return dateObject;
    let date = parts[0];
    let time = parts[1];

    dateObject.errorCode = 5;
    parts = time.split('+');
    if (parts.length != 2)
        return dateObject;
    time = parts[0];


    dateObject.errorCode = 6;
    parts = date.split('-');
    if (parts.length != 3)
        return dateObject;

    dateObject.year = parseInt(parts[0]);
    dateObject.month = parseInt(parts[1]);
    dateObject.day = parseInt(parts[2]);

    dateObject.errorCode = 7;
    parts = time.split(':')
    if (parts.length != 2)
        return dateObject;
    dateObject.hour = parseInt(parts[0]);
    dateObject.minute = parseInt(parts[1]);

     return dateObject;
}

let callbackStr = 'mycallback({"$id":"1","currentDateTime":"2023-11-25T14:15+01:00","utcOffset":"01:00:00","isDayLightSavingsTime":false,"dayOfTheWeek":"Saturday","timeZoneName":"Central Europe Standard Time","currentFileTime":133453953101897145,"ordinalDate":"2023-329","serviceResponse":null});';
let dateObject = GetDateTimeFromCallback(callbackStr);

if (dateObject.errorCode == 0)
    basic.showString('Error: ' + dateObject.errorCode);
else {
    basic.showString('D: ' + dateObject.year + '-' + dateObject.month + '-' + dateObject.day);
    basic.showString('T: ' + dateObject.hour + ':' + dateObject.minute);
}
