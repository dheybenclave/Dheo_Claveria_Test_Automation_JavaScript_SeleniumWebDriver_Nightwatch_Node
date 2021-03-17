const chromedriver = require('chromedriver');

module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    "src_folders": ["tests"],
    "output_folder": "reports",
    "page_objects_path": "pages",
    "global_path": "globals.js",

    "webdriver": {
        "start_process": true,
        "server_path": "node_modules/.bin/chromedriver",
        "server_path": require('chromedriver').path,
        "port": 9515,
    },

    "test_settings": {
        "default": {
            "globals": {
                "enviroment": "default"
            },
            "launch_url": 'https://sleek.com/sg/',
            "slient": true,
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": './screenshots' // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        }
    }

};