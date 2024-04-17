import { expect } from '@wdio/globals'
import entry from "./../screenobjects/all.screen.ts";


describe('My Login application', () => {
    
    it('Verify the plus button functionality', async () => {
        await entry.mainScreen.clickElement(entry.mainScreen.elements.fiveButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.plusButton);
        await entry.mainScreen.clickElement(entry.mainScreen.elements.sixButton);
        await expect(entry.mainScreen.isElementDisplayed(entry.mainScreen.elements.resultPreviewField));
    })
})

