export const config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "RRCRC01F29R", // nama device kamu dari adb devices
      "appium:platformVersion": "14", // versi Android dari adb shell getprop
      "appium:automationName": "UiAutomator2",
      "appium:browserName": "Chrome",
      "appium:noReset": true,
    },
  ],

  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [
    [
      "appium",
      {
        command: "appium",
        args: {
          address: "127.0.0.1",
          port: 4723,
        },
      },
    ],
  ],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
