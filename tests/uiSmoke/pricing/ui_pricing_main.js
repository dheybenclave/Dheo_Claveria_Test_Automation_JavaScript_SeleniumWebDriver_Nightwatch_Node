module.exports = {
    before: function (browser) {
        browser
            .url(browser.launchUrl)
            .maximizeWindow()


    },
    after: (browser) => {
        browser.end();
    },

    'Unit Test - Sleek - Pricing - Verify Details View': function (client) {

        client
            .waitForElementVisible(`li[id="menu-item-15902"]`)
            .click(`li[id="menu-item-15902"] a`)


            .pause()



        // * Feature: Sleek Test Cases

        // Scenario: Clicking the Pricing link from the Header menu navigates user to the Pricing page
        //  Given I went to the Sleek SG "Home" page
        //  When I click on the "Pricing" link
        //  Then I should be navigated to the Sleek SG "Pricing" page


        // Scenario Outline: Correct corporate secretary details should display after selecting a shareholder value from the slider
        //  Given I am on the Sleek SG "Pricing" page
        //  When 
        //  Then the "Shareholder" cell text should be "<shareholder_number>"
        //  And the "Annual Billing" cell text should be "s$<annual_billing_value>/ Year"

        //  Examples:
        //    | shareholder_number | annual_billing_value |
        //    | 41                 | 1200                 |
        //    | 11                 | 780                  |

    }
};