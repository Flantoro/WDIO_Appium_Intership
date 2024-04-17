import { config as sharedConfig } from "./wdio.conf.js";
import { driver } from "@wdio/globals";
import { join } from "path"
import dotenv from "dotenv";
import entry from "./../test/screenobjects/all.screen.ts";
dotenv.config(); // Load environment variables from .env file

export const config = {
    ...sharedConfig,
    port: 4723,
    services: ["appium"],
    appium: {
      // For options see
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
      args: ["--allow-insecure"],
    },

    beforeTest: async function () {
      await driver.closeApp();
      await driver.activateApp("calculator");
    },
    
    capabilities: [{
      // capabilities for local Appium web tests on an Android Emulator or Real device
      platformName: 'Android',
      "appium:app": join(process.cwd(), "./apps/android/calculator.apk"),
      'appium:platformVersion': '10.0',
      'appium:automationName': 'UiAutomator2'
  }],
}
