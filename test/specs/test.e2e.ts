import { expect } from '@wdio/globals'
import entry from "./../screenobjects/all.screen.ts";
import fixtures from '../helpers/fixtures.ts';

describe('Calculator', () => {
    it('Verify background color change functionality', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.changeThemeButton);
        await entry.mainScreen.clickElement(entry.themeScreen.elements.darkThemeButton);
        await entry.mainScreen.clickElement(entry.themeScreen.elements.submitThemeButton);

        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.changeThemeButton);
        
        const darkThemeButton = await entry.mainScreen.getElement(entry.themeScreen.elements.darkThemeButton);
        const isChecked = await darkThemeButton.getAttribute('checked');

        await expect(isChecked).toBeTruthy();
        await entry.mainScreen.clickElement(entry.themeScreen.elements.submitThemeButton);
    })  
        
    it('Verify the multiply functionality', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.sevenButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.multiplyButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.eightButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.finalResultField);

        await expect(resultText.toString()).toBe(fixtures.multiplyResult);
    })

    it('The error message shown during the dividing by zero', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.fiveButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.divideButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.zeroButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.resultPreviewField);
        
        await expect(resultText.toString()).toBe(fixtures.divideByZeroError);

        await entry.mainScreen.clickElement(entry.mainScreen.elements.clearButton);
    })

    it('The error message shown if divide symbol goes before number', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.minusButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.divideButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.nineButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.equalsButton);
        const resultText = await entry.mainScreen.getElementText(entry.mainScreen.elements.resultPreviewField);
        
        await expect(resultText.toString()).toBe(fixtures.invalidInputError);
    })

    it('History clearing functionality', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.historyButton);

        await entry.mainScreen.clickElement(entry.historyScreen.elements.moreHistoryOptionsButton);
        await entry.mainScreen.clickElement(entry.historyScreen.elements.clearHistoryButton);
        await entry.mainScreen.clickElement(entry.historyScreen.elements.submitButton);

        await entry.mainScreen.clickElement(entry.mainScreen.elements.moreOptionsButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.historyButton);

        await expect(await entry.historyScreen.isElementDisplayed(entry.historyScreen.elements.noHistoryText)).toBe(true);
    })
})

