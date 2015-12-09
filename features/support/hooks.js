/*!
 * Cucumber Hooks
 */

module.exports = function () {
  var passed = true;

  /**
   * Cleanup after each feature
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.After(function(event, callback) {
    this.client
      .sauceJobStatus({
          passed: passed,
          name: event.getName(),
          public: true
        })
      .end()
      .then(callback);
  });

  /**
   * Store client test status so we can notify SauceLabs
   *
   * @param {Function} event
   * @param {Function} callback
   */
  this.StepResult(function(event, callback) {
    var stepResult = event.getPayloadItem('stepResult');
    passed = stepResult.isSuccessful() && passed;
    callback();
  });
};
