import Page from "./../pageobjects/page.ts";

class historyScreen extends Page {
	elements = {
        moreHistoryOptionsButton: '(//android.widget.ImageView[@content-desc="More options"])[1]',
        clearHistoryButton: '//android.widget.TextView[@resource-id="com.google.android.calculator:id/title"]',
        submitButton: '//android.widget.Button[@resource-id="android:id/button1"]',
        noHistoryText: '//android.widget.TextView[@text="No History"]',
	};
}

export default new historyScreen();