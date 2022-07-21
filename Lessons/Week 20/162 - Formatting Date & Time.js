/*
    Date And Time

        new Date(timestamp)
        new Date(Date String)
        new Date(Numeric Values)

        Format
        - "Oct 25 1982"
        - "10/25/1982"
        - "1982-10-25" => ISO International Standard
        - "1982 10"
        - "1982"
        - "82"
        - 1982, 9, 25, 2, 10, 0
        - 1982, 9, 25
        - "1982-10-25T06:10:00Z"

        Date.parse("String") => Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);
