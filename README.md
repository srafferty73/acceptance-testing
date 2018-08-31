This application displays the 5 day weather forecast for a given location.

### Features

* Enter city name, get 5 day weather forecast
* Select day, get 3 hourly forecast
* Select day again, hide 3 hourly forecast
* Daily forecast should summarise the 3 hour data:
  * Most dominant (or current) condition
  * Most dominant (or current) wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures
* All values should be rounded down

We would like the application to be tested against the requirements above. Please rewrite the requirements into an appropriate format, e.g. BDD story files, adding any requirements that you think appropriate, such as edge cases or accessibility improvements.

Please write a set of automated acceptance tests against those requirements using any language and / or test framework of your choice.

The application is running in "test" mode, using a set of test data, matching that which comes from the public API at OpenWeatherMap (http://openweathermap.org/forecast5). There is test data for a number of locations, found in the folder ```src/data```.

You should find that every important part of the HTML produced has been marked with ```data-test``` attributes.

### What we are looking for

This exercise is to examine your technical knowledge, and testing skill; there are no tricks or hidden agendas. We are looking for a demonstration of your experience and skill using current testing technologies and methodologies.

Make sure that your code is clear, demonstrates good practices, and that you include a readme file explaining how to build and run your solution - please don't spend more than 2 to 4 hours on this.

Bear in mind that your solution will form the basis for a follow-up conversation.

### Checklist

Please ensure you have submitted the following:

* A pubic repository (e.g. GitHub, BitBucket) containing the requirements and automated tests
* A readme explaining
  * How to build and execute your solution
  * Details on anything further that you would like to achieve given more time, including any trade-offs that you may have made

Good luck and thank you for your time - we look forward to seeing your creation.

### Running the app locally

You'll need node and npm installed - first off, install the required dependencies:

    $ npm install

To start up the application:

    $ npm run develop


-----

### STEPHEN RAFFERTY - Additional

This application took me quite a bite more time than I would have liked.  Firstly, there are a few 'excuse' factors to consider re this:
* I am working in QE and building test scripts only for a couple of months and I'm continuing to learn the components as I have been working.
* I've no prior experience of building/preparing a test framework, but managed to get it going here.
* I've no prior experience of using react.js and so was a little difficult to navigate code.
* The github repository is not accessible on my Windows laptop for work.  I have had to use my home iMac.  This has impacted the time aspect and testing is not possible on a Windows machine.
* Finally, I am on leave abroad for 2 weeks from 1/9 and so preparation for this also impacted my time.

However, there are some positives:
* I currently work with Cucumber/Webdriverio and so this is the framework I've attempted to implement here.
* Pleased to say I was able to pull open the browser and start the process of data automation input for City names.
* Rapid learning (with obvious gaps) to catch up on installing drivers, packages and modules to make it run.

The application is not close to 100%.  It gets so far and then breaks.  However, I can talk through the process and code for some of the methods that perhaps don't get a chance to run.

## Pre-steps

* cloned from github
* downloaded and added ChromeDriver file to root folder of project https://chromedriver.storage.googleapis.com/index.html?path=2.41/  
* Installed cucumber, selenium-webdriver, webdriverio and wdio files (all from NPM repository). 
* To help with building feature files and step_definitions files, ran various iterations of:

    $ ./node_modules/.bin/cucumber-js

* Downloaded latest selenium standalone servier and added to root folder of project:

    $ curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
    
* ran the webdriverio config helper to create file wdio.conf.js with relevant pointers.


So, to start the application as it stands and once cloned, the following command will firstly pull in all required dependencies:

    $  npm install
    
Then, since this was regulary showing various audit concerns, I got into the habit of running:

    $ npm audit fix
    
To start up the application:

    $ npm run develop
    
This also opens a browser window and shows the app as originally presented.  I chose to work with the Chrome driver, since I couldn't implement the IE one on my Mac.  I've included the chromedriver.exe Win file if this is to be demo'd on a PC.  The code to call this is commented-out.

Next to run the webdriver config file from a terminal (ensuring that you are in the root directory of the app):

    $ ./node_modules/.bin/wdio wdio.conf.js

This will launch a new browser window as per the default app.  I've coded it to emulate replacing the 'Glasgow' city name firstly with 'Aberdeen' then 'Dundee'.  After each changed city, a carriage return is emulated.  Evidence of this working is that the 5 day data beneath changes accordingly.

##Accessibility 
* Worth pointing out here from an <b>ACCESSIBILITY</b> perspective that this application would've benefitted from having a confirmation button (OK or similar).  There is no proper indication how to use the application UI and how to move through the screen display.  The only option is to experiment.
* I also think that this would be a doubly-bad experience for anyone with visual impairment or otherwise unable to view the basic layout.  To counter this, it would perhaps be worth adding some <b>ARIA (Accessible Rich Internet Applications)</b> tags in the HTML.  This would ensure that, for example, any blind user will be provided with an improved audible experience whilst navigating the site.

Next, my intention was to work through the remaining feature file tests.
* To attempt to verify that the screen displayed 5 day forecast data, I have a simple check that data-test fields for day 1 and day 5 are not undefined (i.e. ARE present).  If this failed, then the browser should close and the application should end.
* I then started an attempt to check whether all values are rounded down.  I struggled with this, since I am unsure how to either 
    * extract the JSON data nested per city or 
    * work out how it is being handled by the react and node code.  I can see that I would need to import data probably from ./src/ducks/forecast.js but my limited skill with node lets me down here.  The thinking here was to grab the String numerical values shown on the page (temp etc...) and compare those against the floating point values in the JSON to ensure that the displayed values are integers and equal to or lower than the JSON.
* I did notice in the code in ./src/ducks/forecast.js performs a Math.floor routine (i.e. rounding down via Math.floor) on all elements with the exception of rainfall (Math.ceiling - rounded up?).

In conclusion, my code would unfortunately only run to the part where it types the city names and refreshes the data.  After that, I keep getting EventEmitter errors with node.js.  I need to learn more.


 