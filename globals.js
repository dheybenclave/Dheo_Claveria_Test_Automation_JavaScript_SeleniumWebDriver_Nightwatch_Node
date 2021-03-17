const chromedriver = require('chromedriver');

module.exports = {
    before: function (done, result) {
        chromedriver.start();
        done();
    },

    after: function (done) {
        chromedriver.stop();
        done();
    }
};