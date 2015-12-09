module.exports = function () {

  this.Given("I am on the sauce guinea pig page", function(callback) {
    this.client
      .url('https://saucelabs.com/test/guinea-pig')
      .call(callback);
  });

  this.Then(/^I type "(.*)" into the email input field$/, function(inputText, callback) {
    this.client
      .setValue("#fbemail", inputText)
      .call(callback);
  });

  this.Then(/^the email input value field should contain "(.*)"$/, function(inputText, callback) {
    this.client
      .getValue("#fbemail").should.eventually.be.equal(inputText)
      .call(callback);
  });

}