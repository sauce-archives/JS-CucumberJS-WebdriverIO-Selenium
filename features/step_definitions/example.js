module.exports = function () {

  this.Given("I am on the draft city chicago homepage", function(callback) {
    this.client
      .url('http://www.nfl.com/draft-city-chicago')
      .call(callback);
  });

  this.Then('I should see the draft city chicago logo image', function(callback) {
    this.client
      .waitForVisible('.index-content img', 3000).should.eventually.be.true
      .call(callback);
  });

  this.Then('I should see the draft city chicago homepage text', function(callback) {
    this.client
      .waitForText('.index-content div', 3000).should.eventually.be.true
      .getText('.index-content div').should.eventually.contain("For the first time in 51 years,")
      .call(callback);
  });

  this.When('I click the explore icon', function (callback) {
    var selector = '.index-content span';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .click(selector)
      .call(callback);
  });

  this.Then('I wait for the map to collapse', function (callback) {
    var selector = '#',
      that = this;

    this.client
      .waitForVisible("#Map_Items g", 3000, true).should.eventually.be.true
      .call(callback)
  });


  this.Then('I should see the Auditorium Theatre header and text', function(callback) {
    var selector = '.header-left';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .getText(selector).should.eventually.contain("AUDITORIUM THEATRE")
      .call(callback);
  });

  this.Then('I should see a profile picture for "$player"', function(player, callback) {
    var selector = 'div.content div div div img';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .getAttribute(selector, 'src').should.eventually.contain(player.replace(' ', '-'))
      .call(callback);
  });

  this.Then('I should see a bio entry for "$player"', function(player, callback) {
    var selector = 'div.content';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .getText(selector).should.eventually.contain(player.toUpperCase())
      .call(callback);
  });

  this.When('I click on "$player" from the player menu toolbar', function(player, callback) {
    var selector = '[data-person-name="' + player + '"]';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .click(selector)
      .call(callback);
  });

  this.When('I click on the map icon in the right rail', function (callback) {
    var selector = "div[style*='icn-map.svg']";

    this.client
      .click(selector)
      .call(callback);
  });

  this.When('I click on "$location" in the expanded svg map', function (location, callback) {
    var selector = "#" + location.toLowerCase().replace(/ /gi, '-') + '-clickzone';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .click(selector)
      .call(callback);
  });

  this.Then('I should see the overlay of "$content"', function (content, callback) {
    var selector = '.header-left';

    this.client
      .waitForVisible(selector, 3000).should.eventually.be.true
      .getText(selector).should.eventually.contain(content.toUpperCase())
      .call(callback);
  });

};
