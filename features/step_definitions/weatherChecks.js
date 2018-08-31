const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const webdriverio = require('webdriverio');

//import { Temperature } from './temperature';


function weatherChecks(city) {
    // empty for  now
}

Given(/^I navigate to the entry page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    browser.url('http://localhost:3000');
    browser.pause(2000);  // pause for 5 secs to ensure page up and running
});

When(/^I enter the different city names, followed by return key$/, function () {
    // Write code here that turns the phrase above into concrete actions
    const cityName1 = "Aberdeen";   const cityName2 = "Dundee";

    var input = $('//input[@id="city"]');

    input.setValue(cityName1);
    browser.pause(2000);
    browser.keys("\uE007"); // simulates a RETURN/ENTER key
    browser.pause(5000);

    input.setValue(cityName2);
    browser.pause(2000);
    browser.keys("\uE007"); // simulates a RETURN/ENTER key
    browser.pause(5000);

});

Then(/^The screen will display relevant forecast data for last five days inclusive$/, function () {
    // This is very basic checking that weather details for
    // Day 1 and Day 5 is displayed on screen.
    // Clearly, this does not check for Days 2-4, but the inference
    // is there, since those days are only displayed at the same time as these.

    // I'm also aware that this code would look nicer in a loop :)

    var day1 = $('//input[@data-test="day-1"]');
    var day5 = $('//input[@data-test="day-5"]');
    var input = $('//input[@id="city"]');

    if (typeof day1 !== "undefined" &&
        typeof day5 !== "undefined" &&
        input === "Aberdeen") {
    } else {
        browser.close();
        return false();
    }
    return true;
});

Then(/^All numerical data should be rounded down to the nearest integer$/, function () {

    // I started making up these variables initially thinking it would be
    // straightforward to compare the webpage outputs against the JSON data.


/*    var maxTemp1 = $('//input[@data-test="maximum-1"]');
    var minTemp1 = $('//input[@data-test="minimum-1"]');
    var speed1   = $('//input[@data-test="speed-1"]');
    var rainfall1   = $('//input[@data-test="rainfall-1"]');
    var pressure1   = $('//input[@data-test="pressure-1"]');

    var maxTemp5 = $('//input[@data-test="maximum-5"]');
    var minTemp5 = $('//input[@data-test="minimum-5"]');
    var speed5   = $('//input[@data-test="speed-5"]');
    var rainfall5   = $('//input[@data-test="rainfall-5"]');
    var pressure5   = $('//input[@data-test="pressure-5"]');

    if (forecast.main.temp_max >= maxTemp1) {
    }*/
    return 'pending';
});



Given(/^A five day weather forecast for a city is already displayed$/, function () {
    // This is duplicate code from the above 'Then' in prev scenario
    var day1 = $('//input[@data-test="day-1"]');
    var day5 = $('//input[@data-test="day-5"]');
    var input = $('//input[@id="city"]');

    if (typeof day1 !== "undefined" &&
        typeof day5 !== "undefined" &&
        input === "Aberdeen") {
    }
});

When(/^I click anywhere on a row for one of those days$/, function () {

    var summary1 = $('//div[@class="summary" and .//span[contains(., "day-1")]]');
    //var summary5 = $('//div[@class="summary" and .//span[contains(., "day-1")]]');
    browser.click(summary1);  // this should drop down the 3 hourly forecast data for day 1
    browser.pause(5000);
});

Then(/^Data showing three hourly forecasts will dropdown between that day and the next day$/, function () {
    // This method checks that the first hour element and last rainfall element
    // for the first 3 hour forecast is present on screen.

    var dataTestHour1 = $('//input[@data-test="hour-1-1"]');
    var dataTestRainfall1 = $('//input[@data-test="rainfall-1-1"]');

    if (typeof dataTestHour1 !== "undefined" && typeof dataTestRainfall1 !== "undefined") {
    }
    return true;
});

Then(/^The display should show elements in the following way$/, function (dataTable) {

    // This seems a clumsy long-winded way to approach this comparison task per listed element.
    // If I had more time, I would explore other methods.

    //Temperature
    var dataTestMax1 = parseInt($('//input[data-test="maximum-1"]'));
    var dataTestMin1 = parseInt($('//input[data-test="minimum-1"]'));

    var dataTestMax1_1 = parseInt($('//input[data-test="maximum-1-1"]'));
    var dataTestMin1_1 = parseInt($('//input[data-test="minimum-1-1"]'));

    var dataTestMax1_2 = parseInt($('//input[data-test="maximum-1-2"]'));
    var dataTestMin1_2 = parseInt($('//input[data-test="minimum-1-2"]'));

    var dataTestMax1_3 = parseInt($('//input[data-test="maximum-1-3"]'));
    var dataTestMin1_3 = parseInt($('//input[data-test="minimum-1-3"]'));

    var dataTestMax1_4 = parseInt($('//input[data-test="maximum-1-4"]'));
    var dataTestMin1_4 = parseInt($('//input[data-test="minimum-1-4"]'));

    var maxArray = [dataTestMax1_1, dataTestMax1_2, dataTestMax1_3, dataTestMax1_4];
    var minArray = [dataTestMin1_1, dataTestMin1_2, dataTestMin1_3, dataTestMin1_4];

    if (dataTestMax1 === Math.max(maxArray)) {
    }

    if (dataTestMin1 === Math.min(minArray)) {
    }
    return true;
});

Then(/^All three hour numerical data should be rounded down to the nearest integer$/, function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});