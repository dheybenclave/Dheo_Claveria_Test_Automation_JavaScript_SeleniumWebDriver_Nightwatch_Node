module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["tests"],

    "webdriver": {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "server_path": require('chromedriver').path,
        "port": 9515
    },

    test_settings: {
        default: {
            launch_url: 'https://sleek.com/sg/',
            desiredCapabilities: {
                browserName: 'chrome',
                //   alwaysMatch: {
                //     // Enable this if you encounter unexpected SSL certificate errors in Firefox
                //     // acceptInsecureCerts: true,
                //     'moz:firefoxOptions': {
                //       args: [
                //         // '-headless',
                //         // '-verbose'
                //       ],
                //     }
                //   }
            }
        }
    }
};