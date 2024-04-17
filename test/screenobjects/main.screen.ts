import Page from "./../pageobjects/page.ts";

class mainScreen extends Page {
	elements = {
        clearButton: '//android.widget.ImageButton[@content-desc="clear"]',
        percentButton: '//android.widget.ImageButton[@content-desc="percent"]',
        moreOptionsButton: '//android.widget.ImageView[@content-desc="More options"]',
        deleteButton: '//android.widget.ImageButton[@content-desc="delete"]',

        divideButton: '//android.widget.ImageButton[@content-desc="divide"]',
        multiplyButton: '//android.widget.ImageButton[@content-desc="multiply"]',
        minusButton: '//android.widget.ImageButton[@content-desc="minus"]',
        plusButton: '//android.widget.ImageButton[@content-desc="plus"]',

        zeroButton: '//android.widget.ImageButton[@content-desc="0"]',
        oneButton: '//android.widget.ImageButton[@content-desc="1"]',
        twoButton: '//android.widget.ImageButton[@content-desc="2"]',
        threeButton: '//android.widget.ImageButton[@content-desc="3"]',
        fourButton: '//android.widget.ImageButton[@content-desc="4"]',
        fiveButton: '//android.widget.ImageButton[@content-desc="5"]',
        sixButton: '//android.widget.ImageButton[@content-desc="6"]',
        sevenButton: '//android.widget.ImageButton[@content-desc="7"]',
        eightButton: '//android.widget.ImageButton[@content-desc="8"]',
        nineButton: '//android.widget.ImageButton[@content-desc="9"]',

        resultPreviewField: '//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_preview"]',
        finalResultField: '//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]'
	};
}

export default new mainScreen();