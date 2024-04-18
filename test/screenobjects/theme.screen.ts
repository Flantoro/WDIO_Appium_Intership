import Page from "./../pageobjects/page.ts";

class themeScreen extends Page {
	elements = {
        darkThemeButton: '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Dark"]',
        submitThemeButton: '//android.widget.Button[@resource-id="android:id/button1"]',
	};
}

export default new themeScreen();