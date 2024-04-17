import { expect } from '@wdio/globals'
import entry from "./../screenobjects/all.screen.ts";
import { driver } from "@wdio/globals";

// afterEach(async () => {
//     await entry.mainScreen.clickElement(entry.mainScreen.elements.clearButton);
// });

describe('My Login application', () => {
    

    it('Change background color', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.changeThemeButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.darkThemeButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.submitThemeButton);

        const backgroundColor = await entry.mainScreen.getElementBackgroundColor(entry.mainScreen.elements.mainCalculator);
        expect(backgroundColor).toEqual('dark'); 
    })  
        
    it('Verify the plus button functionality', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.sevenButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.plusButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.eightButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        //await expect((await entry.mainScreen.getElementText(entry.mainScreen.elements.resultPreviewField)).toString).toHaveText("11");
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.finalResultField);

        // Convert the text to a string and then assert its value
        await expect(resultText.toString()).toBe('15');
    })

    it('The error message shown during the dividing by zero', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.fiveButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.divideButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.zeroButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.resultPreviewField);
        // Convert the text to a string and then assert its value
        await expect(resultText.toString()).toBe("Can't divide by 0");

        await entry.mainScreen.clickElement(entry.mainScreen.elements.clearButton);
    })

    it('The error message shown if divide symbol goes before number', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.minusButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.divideButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.nineButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.resultPreviewField);
        // Convert the text to a string and then assert its value
        await expect(resultText.toString()).toBe("Format error");
    })

    it('Clear history', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.historyButton);

        await entry.mainScreen.clickElement(entry.historyScreen.elements.moreHistoryOptionsButton);
        await entry.mainScreen.clickElement(entry.historyScreen.elements.clearHistoryButton);
        await entry.mainScreen.clickElement(entry.historyScreen.elements.submitButton);

        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.historyButton);

        // Convert the text to a string and then assert its value
        await expect(await entry.historyScreen.isElementDisplayed(entry.historyScreen.elements.noHistoryText)).toBe(true);
    })
})

