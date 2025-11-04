const { expect } = require('chai');

describe('Appium Demo Test', () => {
  it('should open the ApiDemos app', async () => {
    const activity = await driver.getCurrentActivity();
    console.log('Current activity:', activity);
    expect(activity).to.include('ApiDemos');
  });

  it('should click on Views menu', async () => {
    const viewsButton = await $('~Views');
    await viewsButton.click();
    const controlsMenu = await $('~Controls');
    expect(await controlsMenu.isDisplayed()).to.be.true;
  });
});