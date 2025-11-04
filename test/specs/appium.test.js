const { expect } = require('chai');

describe('Appium Android Test', () => {
  it('should open ApiDemos app', async () => {
    const activity = await driver.getCurrentActivity();
    console.log('Current activity:', activity);
    expect(activity).to.include('ApiDemos');
  });

  it('should click on Views menu', async () => {
    const views = await $('~Views');
    await views.click();
    const controls = await $('~Controls');
    expect(await controls.isDisplayed()).to.be.true;
  });
});
