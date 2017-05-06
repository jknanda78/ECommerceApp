var seleniumWebdriver = require("selenium-webdriver");
var By = seleniumWebdriver.By;
var assert = require("assertthat");

module.exports = function() {
  var callback = function() {
    console.log(arguments);
  };

  this.Given(/^that I am on the "([^"]*)" screen$/, function (header) {
    var driver = this.driver;
    return driver.get('http://local.dev.com:9020/example').then(function(){
       return driver.findElement(By.css("h1")).getText().then(function(text){
         assert.that(text).is.equalTo(header);
       });
    });
  });

  this.When(/^I click on "([^"]*)" button$/, function (buttonName) {
    var driver = this.driver;
    return driver.get('http://local.dev.com:9020/example').then(function(){
       return driver.findElement(By.css("button[type='submit']")).then(function(element){
          element.click();
       });
    });
  });

};
