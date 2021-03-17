// * Feature: Sleek Test Cases

// Scenario: Clicking the Pricing link from the Header menu navigates user to the Pricing page
//  Given I went to the Sleek SG "Home" page
//  When I click on the "Pricing" link
//  Then I should be navigated to    the Sleek SG "Pricing" page


// Scenario Outline: Correct corporate secretary details should display after selecting a shareholder value from the slider
//  Given I am on the Sleek SG "Pricing" page
//  When 
//  Then the "Shareholder" cell text should be "<shareholder_number>"
//  And the "Annual Billing" cell text should be "s$<annual_billing_value>/ Year"

//  Examples:
//    | shareholder_number | annual_billing_value |
//    | 41                 | 1200                 |
//    | 11                 | 780                  |


module.exports = {
    "@tags": ["uiSmoke", "pricing", "UI_Pricing_Main"],
    name: "UI_Pricing_Main.js",
    author: "Dheo Claveria",
    before: function (browser) {
        browser.url(browser.launchUrl).maximizeWindow();
    },

    'Unit Test - Sleek - Pricing - Verify Details Mode': client => {

        let pricingSelect = client.page.pricing();
        let expectedValue = ["10~780~11", "20~1020~21", "30~1200~31", "40~1200~41"];

        // Scenario1 : Clicking the Pricing link from the Header menu navigates user to the Pricing page

        //Navigate and Click Pricing Pages and Assert URL https://sleek.com/sg/pricing/
        pricingSelect
            .waitForElementVisible(`@detailsMode_navigation_Price_Link`)
            .assert.visible("@detailsMode_navigation_Price_Link")
            .click(`@detailsMode_navigation_Price_Link`)
            .assert.urlEquals('https://sleek.com/sg/pricing/');
        
        //Verify if the billing-slider-inner is visible
        client
            .assert.visible("div.billing-slider-inner-main-block-price-content")
            .click("div.billing-slider-inner-main-block-price-content")

        //Verify if the Billing Amount Label and ShareHolder is visible
        pricingSelect
            .assert.visible("@detailsMode_billing_Amount_Label")
            .assert.visible("@detailsMode_billing_ShareHolder_Label")

        //Assert if the Billing Amount Label default is "300" and ShareHolder Label "1" 
        pricingSelect
            .assert.containsText("@detailsMode_billing_Amount_Label", "300")
            .assert.containsText("@detailsMode_billing_ShareHolder_Label", "1")


        // Scenario Outline: Correct corporate secretary details should display after selecting a shareholder value from the slider

        //Validate each slider and Verify the Amount Label Share Holder
        expectedValue.forEach(value => {
            pricingSelect
                .click(`@detaislMode_billing_SliderValue${value.split("~")[0]}_Button`).pause(1200)
                .assert.containsText("@detailsMode_billing_Amount_Label", value.split("~")[1])
                .assert.containsText("@detailsMode_billing_ShareHolder_Label", value.split("~")[2])
        });


    }
};