"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var days;
(function (days) {
    days[days["Monday"] = 0] = "Monday";
    days[days["Tuesday"] = 1] = "Tuesday";
    days[days["Wednesday"] = 2] = "Wednesday";
    days[days["Thursday"] = 3] = "Thursday";
    days[days["Friday"] = 4] = "Friday";
    days[days["Saturday"] = 5] = "Saturday";
    days[days["Sunday"] = 6] = "Sunday";
})(days || (days = {}));
console.log(days.Saturday);
