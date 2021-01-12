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

  it('should display a password textinput', async () => {
    await expect(element(by.id('passwordTextInput'))).toBeVisible();
  });

  it('should write password in password textinput', async () => {
    await element(by.id('passwordTextInput')).typeText('password');
  });

  it('should tap on the login button and navigate to the chat screen', async () => {
    await element(by.id('loginButton')).tap();
  });

  it('should display a message textinput', async () => {
    await expect(element(by.id('messageTextInput'))).toBeVisible();
  });

  it('should write message in message textinput', async () => {
    await element(by.id('messageTextInput')).typeText('send message test');
  });

  it('should tap on the send button and send message', async () => {
    await element(by.id('sendButton')).tap();
  });

});