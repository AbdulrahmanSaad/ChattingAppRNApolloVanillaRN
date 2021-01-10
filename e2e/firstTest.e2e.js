describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should display a login text', async () => {
    await expect(element(by.id('login'))).toBeVisible();
  });

  it('should display an email textinput', async () => {
    await expect(element(by.id('emailTextInput'))).toBeVisible();
  });

  it('should write email in email textinput', async () => {
    await element(by.id('emailTextInput')).typeText('email');
  });

});
